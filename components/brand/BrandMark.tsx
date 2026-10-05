interface BrandMarkProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
}

/** A survey control point sits within a parcel and its terrain contours. */
export default function BrandMark({
  size = 44,
  color = "currentColor",
  className,
  title,
}: BrandMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title && <title>{title}</title>}
      <g stroke={color} strokeWidth="1.25" strokeLinejoin="round">
        <path d="M32 3 59 18v29L32 62 5 47V18L32 3Z" />
        <path d="M32 3v59M5 18l27 15 27-15M5 47l27-14 27 14" opacity=".65" />
        <path d="M5 39c8-10 14 8 24-1s19-10 30-7M5 46c8-10 14 8 24-1s19-10 30-7" />
        <circle cx="32" cy="32" r="6" />
      </g>
    </svg>
  );
}
