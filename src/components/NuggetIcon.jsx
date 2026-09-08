export default function NuggetIcon({ size = 64 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffe08a" />
          <stop offset="45%" stopColor="#f0b429" />
          <stop offset="100%" stopColor="#c9880f" />
        </linearGradient>
        <linearGradient id="goldDark" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a06e0c" />
          <stop offset="100%" stopColor="#e3a92b" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="28" fill="#10161f" />
      <path
        d="M32 8c6 8 14 10 22 8-2 10-1 18 4 26-10 2-16 8-18 16h-16c-2-8-8-14-18-16 5-8 6-16 4-26 8 2 16 0 22-8Z"
        fill="url(#gold)"
        stroke="#7a5306"
        strokeWidth="2"
      />
      <path
        d="M32 16c4 5 9 7 15 6-1 7-1 12 2 17-6 2-11 6-13 11-2-5-7-9-13-11 3-5 3-10 2-17 6 1 11-1 15-6Z"
        fill="url(#goldDark)"
        opacity="0.55"
      />
      <path
        d="M24 20l3 6m10-6l-3 6m-14 8l5 2m18-2l-5 2"
        stroke="#fff6d8"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.8"
      />
      <title>GoldenNugget</title>
    </svg>
  )
}