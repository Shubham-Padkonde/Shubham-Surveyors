/** Original editorial diagrams. Illustrative geometry, never a cadastral record. */
export default function GuideArtwork({ kind }: { kind: number }) {
  return (
    <svg viewBox="0 0 480 270" fill="none" aria-hidden="true" focusable="false">
      {kind === 0 ? (
        <>
          <path
            d="M0 210c90-90 110 30 220-70s170-10 260-60M0 240c90-90 110 30 220-70s170-10 260-60M0 180c90-90 110 30 220-70s170-10 260-60"
            stroke="#adb9a5"
            strokeWidth="1.5"
          />
          <path
            d="M140 46h190v180H140z"
            fill="#fffdf6"
            stroke="#204536"
            strokeWidth="2"
            transform="rotate(-7 235 136)"
          />
          <path
            d="M169 85h119M169 107h83M169 185h75"
            stroke="#52735b"
            strokeWidth="3"
          />
          <path
            d="m167 143 21-14 30 21 34-30 37 22v26H167z"
            fill="#dce3d1"
            stroke="#52735b"
            strokeWidth="1.5"
          />
          <circle cx="300" cy="188" r="26" fill="#214b39" />
          <path d="m288 188 8 8 16-18" stroke="#f5f4e9" strokeWidth="3" />
        </>
      ) : kind === 1 ? (
        <>
          <path d="M50 221h380M240 30v210" stroke="#52745f" strokeWidth="1" />
          <circle
            cx="322"
            cy="81"
            r="33"
            stroke="#cbbb88"
            strokeWidth="1.5"
            strokeDasharray="5 7"
          />
          <path
            d="m102 210 45-102 45 102M147 100v108"
            stroke="#f3f0df"
            strokeWidth="4"
          />
          <rect x="128" y="69" width="40" height="39" rx="4" fill="#cbbb88" />
          <circle cx="149" cy="86" r="9" stroke="#173d2c" strokeWidth="3" />
          <path d="M322 211V106" stroke="#f3f0df" strokeWidth="4" />
          <ellipse cx="322" cy="97" rx="29" ry="10" fill="#cbbb88" />
          <rect x="301" y="143" width="28" height="35" rx="3" fill="#f3f0df" />
          <path
            d="m322 33-9-12m9 12 9-12M280 62l-12-5M364 62l12-5"
            stroke="#cbbb88"
            strokeWidth="2"
          />
        </>
      ) : (
        <>
          <path
            d="m0 78 480 52M0 178l480-52M91 0l109 270M315 0l-47 270M427 0l-93 270"
            stroke="#aeb89f"
            strokeWidth="1.5"
          />
          <path
            d="m149 86 172 16-37 122-130-28z"
            fill="#e6dfb9"
            stroke="#214b39"
            strokeWidth="3"
          />
          <path
            d="m149 86 172 16-37 122-130-28z"
            stroke="#214b39"
            strokeWidth="1"
            strokeDasharray="3 5"
            transform="translate(10 -10)"
          />
          {[
            [149, 86],
            [321, 102],
            [284, 224],
            [154, 196],
          ].map(([x, y]) => (
            <g key={x}>
              <circle cx={x} cy={y} r="8" fill="#214b39" />
              <circle cx={x} cy={y} r="3" fill="#f6f4e9" />
            </g>
          ))}
          <path
            d="M408 50v45m-8-33 8-12 8 12"
            stroke="#214b39"
            strokeWidth="2"
          />
          <path
            d="M43 227h61m-61-5v10m61-10v10"
            stroke="#214b39"
            strokeWidth="2"
          />
        </>
      )}
    </svg>
  );
}
