/**
 * Minimal custom "B" monogram mark for the Baibo brand.
 * A single rounded-square glyph that reads clearly at small sizes.
 */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="Baibo logo"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.75"
        y="0.75"
        width="30.5"
        height="30.5"
        rx="9"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />
      <path
        d="M11 8h6.2c3.2 0 5.3 1.7 5.3 4.4 0 1.9-1.1 3.2-2.7 3.7 1.9.4 3.2 1.9 3.2 4 0 2.9-2.2 4.9-5.6 4.9H11V8zm5.7 6.9c1.5 0 2.4-.8 2.4-2.1 0-1.3-.9-2-2.4-2h-2.4v4.1h2.4zm.3 7.2c1.6 0 2.6-.8 2.6-2.2 0-1.4-1-2.2-2.6-2.2h-2.7v4.4H17z"
        fill="currentColor"
      />
    </svg>
  )
}
