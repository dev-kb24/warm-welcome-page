import { useCallback, useEffect, useRef, useState } from "react";

export function BeforeAfter({
  before,
  after,
  alt,
  className = "",
}: {
  before: string;
  after: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => move(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [dragging, move]);

  return (
    <div
      ref={ref}
      className={`relative select-none overflow-hidden ${className}`}
      onPointerDown={(e) => {
        setDragging(true);
        move(e.clientX);
      }}
    >
      <img src={after} alt={`${alt} — après`} loading="lazy" className="h-full w-full object-cover" />
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt={`${alt} — avant`}
          loading="lazy"
          className="h-full object-cover"
          style={{ width: `${pos > 0 ? (100 / pos) * 100 : 100}%`, maxWidth: "none" }}
        />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 bg-[oklch(0_0_0/60%)] px-2 py-0.5 text-[11px] tracking-wide text-primary-foreground">
        AVANT
      </span>
      <span className="pointer-events-none absolute right-3 top-3 bg-[oklch(0_0_0/60%)] px-2 py-0.5 text-[11px] tracking-wide text-primary-foreground">
        APRÈS
      </span>

      <span
        className="pointer-events-none absolute inset-y-0 w-px bg-background/80"
        style={{ left: `${pos}%` }}
      />
      <button
        type="button"
        aria-label={`Comparer avant / après : ${alt}`}
        className="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-background text-sm text-ink shadow-[0_1px_8px_oklch(0_0_0/30%)]"
        style={{ left: `${pos}%` }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
        }}
      >
        ◀▶
      </button>
    </div>
  );
}
