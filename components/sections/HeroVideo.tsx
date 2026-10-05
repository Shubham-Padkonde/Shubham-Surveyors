"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

/** Decorative motion is loaded after the page, and never required to read it. */
export default function HeroVideo({ poster }: { poster: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const manuallyPaused = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [controlsAvailable, setControlsAvailable] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 761px)");
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let pageReady = false;
    let inView = false;
    const eligible = () =>
      !motion.matches &&
      !connection?.saveData &&
      !["slow-2g", "2g"].includes(connection?.effectiveType ?? "");
    const maybeEnable = () => {
      if (
        pageReady &&
        inView &&
        !document.hidden &&
        eligible() &&
        desktop.matches
      )
        setEnabled(true);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        setControlsAvailable(eligible());
        maybeEnable();
      },
      { threshold: 0.05 },
    );
    if (video.current) observer.observe(video.current);
    document.addEventListener("visibilitychange", maybeEnable);
    const schedule = () => {
      if (eligible()) {
        timer = setTimeout(() => {
          pageReady = true;
          maybeEnable();
        }, 1800);
      }
    };
    const onMotionChange = () => {
      clearTimeout(timer);
      setControlsAvailable(eligible());
      if (motion.matches) {
        video.current?.pause();
        setEnabled(false);
        setReady(false);
      } else schedule();
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    motion.addEventListener("change", onMotionChange);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      document.removeEventListener("visibilitychange", maybeEnable);
      window.removeEventListener("load", schedule);
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  useEffect(() => {
    const element = video.current;
    if (!enabled || !element) return;
    let visible = true;
    const sync = () => {
      if (!visible || document.hidden || manuallyPaused.current)
        element.pause();
      else
        element.play().catch(() => {
          /* The poster remains if autoplay is unavailable. */
        });
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        sync();
      },
      { threshold: 0.05 },
    );
    observer.observe(element);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      element.pause();
    };
  }, [enabled]);

  const toggle = () => {
    const element = video.current;
    if (!element) return;
    if (!enabled) {
      manuallyPaused.current = false;
      setEnabled(true);
      return;
    }
    if (element.paused) {
      manuallyPaused.current = false;
      element.play().catch(() => setPlaying(false));
    } else {
      manuallyPaused.current = true;
      element.pause();
    }
  };

  return (
    <>
      <video
        ref={video}
        className="grove-film"
        poster={poster}
        src={enabled ? "/videos/landscape-grove.mp4" : undefined}
        width={1280}
        height={720}
        autoPlay={enabled}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        onPlaying={() => {
          setReady(true);
          setPlaying(true);
        }}
        onPause={() => setPlaying(false)}
        onCanPlay={() => setReady(true)}
        onError={() => {
          setEnabled(false);
          setReady(false);
        }}
      />
      {controlsAvailable && (
        <button
          type="button"
          className="grove-video-control"
          onClick={toggle}
          disabled={enabled && !ready}
          aria-label={
            enabled && !ready
              ? "Loading film: background video"
              : playing
                ? "Pause film: background video"
                : "Play film: background video"
          }
        >
          {playing ? (
            <Pause size={13} aria-hidden="true" />
          ) : (
            <Play size={13} aria-hidden="true" />
          )}
          <span>
            {enabled && !ready
              ? "Loading film"
              : playing
                ? "Pause film"
                : "Play film"}
          </span>
        </button>
      )}
    </>
  );
}
