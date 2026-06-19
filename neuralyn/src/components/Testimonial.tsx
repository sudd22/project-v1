import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const TESTIMONIAL =
  "Neuralyn revolutionized how we handle financial insights using smart analytics. We are now driving better outcomes quicker than we ever imagined! Neuralyn revolutionized how we handle financial insights using smart analytics.";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, [
    "hsl(0 0% 35%)",
    "hsl(0 0% 100%)",
  ]);

  return (
    <motion.span style={{ opacity, color }} className="mr-[0.3em]">
      {children}
    </motion.span>
  );
}

export default function Testimonial() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const words = TESTIMONIAL.split(" ");
  const total = words.length;

  return (
    <section className="flex min-h-screen items-center justify-center px-8 md:px-28 py-24 md:py-32">
      <div
        ref={containerRef}
        className="mx-auto flex max-w-3xl flex-col items-start gap-10"
      >
        {/* Quote symbol */}
        <img
          src="/quote-symbol.svg"
          alt="Quote"
          className="h-10 w-14 object-contain"
        />

        {/* Testimonial text with scroll-driven word reveal */}
        <p className="flex flex-wrap text-4xl md:text-5xl font-medium leading-[1.2]">
          {words.map((word, i) => {
            const start = i / total;
            const end = (i + 1) / total;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
          <span className="ml-2 text-muted-foreground">&rdquo;</span>
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <img
            src="/testimonial-avatar.svg"
            alt="Brooklyn Simmons"
            className="h-14 w-14 rounded-full border-[3px] border-foreground object-cover"
          />
          <div>
            <p className="text-base font-semibold leading-7 text-foreground">
              Brooklyn Simmons
            </p>
            <p className="text-sm font-normal leading-5 text-muted-foreground">
              Product Manager
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
