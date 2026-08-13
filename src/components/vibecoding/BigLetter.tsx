interface BigLetterProps {
  children: string;
  className?: string;
}

export function BigLetter({ children, className = "" }: BigLetterProps) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-0 select-none text-[220px] font-black leading-none sm:text-[280px] ${className}`}
      style={{
        color: "transparent",
        WebkitTextStroke: "1.5px rgba(20,20,20,0.14)",
        textShadow:
          "5px 5px 0 rgba(0,0,0,0.06), 10px 10px 0 rgba(0,0,0,0.05), 22px 26px 24px rgba(0,0,0,0.14)",
      }}
    >
      {children}
    </span>
  );
}
