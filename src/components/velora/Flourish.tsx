export function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={className} fill="none" aria-hidden>
      <path d="M0 10 Q 50 0, 100 10 T 200 10" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <circle cx="100" cy="10" r="1.4" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
