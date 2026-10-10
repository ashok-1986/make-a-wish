/* Five-point star drawn from the logo's star motif. Decorative only. */
export function Star({
  className = "",
  color = "currentColor",
  style,
}: {
  className?: string;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      <polygon
        fill={color}
        points="50,4 62,37 97,38 69,60 79,94 50,74 21,94 31,60 3,38 38,37"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Spot = {
  top: string;
  left?: string;
  right?: string;
  size: number;
  color: string;
  kind: "twinkle" | "drift";
  dur: number;
  delay: number;
  /* Hide on small screens where the star would sit on top of text */
  mobileHidden?: boolean;
};

/* A scattering of floating stars. Pass absolute positions per section. */
export function StarField({ spots }: { spots: Spot[] }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {spots.map((s, i) => (
        <Star
          key={i}
          color={s.color}
          className={`absolute ${s.mobileHidden ? "hidden md:block" : ""} ${
            s.kind === "twinkle" ? "anim-twinkle" : "anim-drift"
          }`}
          style={
            {
              top: s.top,
              left: s.left,
              right: s.right,
              width: s.size,
              height: s.size,
              "--dur": `${s.dur}s`,
              "--delay": `${s.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
