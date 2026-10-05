interface BrandMarkProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
}

/** An angular parcel trace forms the S; the detached square is its control point. */
export default function BrandMark({
  size = 44,
  color = "currentColor",
  className,
  title,
}: BrandMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
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
      <g fill={color} transform="translate(-4 2)">
        <path d="M62 10H30L10 30V40H44L36 48H10V66H44L66 44V30H32L40 22H62V10Z" />
        <path d="M66 10H78V22H66V10Z" />
      </g>
    </svg>
  );
}
