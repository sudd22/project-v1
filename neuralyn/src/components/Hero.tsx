import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Hero text group: drift up and fade out over the first half of the scroll
  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Dashboard image parallax
  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      <Navbar />

      {/* Hero content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="mt-16 md:mt-20 px-4 flex flex-col items-center text-center"
      >
        {/* Tag pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="liquid-glass mb-6 flex items-center gap-2 rounded-lg px-3 py-2"
        >
          <span className="rounded-md bg-foreground px-2 py-0.5 text-sm font-medium text-background">
            New
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            Say Hello to Corewave v3.2
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3 text-5xl md:text-7xl font-medium leading-tight md:leading-[1.15] tracking-[-2px]"
        >
          Your Insights.
          <br />
          One Clear{" "}
          <span className="font-serif italic font-normal">Overview.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: "hsl(var(--hero-subtitle))" }}
          className="mb-8 text-lg font-normal leading-6 opacity-90"
        >
          Neuralyn helps teams track metrics, goals,
          <br />
          and progress with precision.
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full bg-foreground px-8 py-3.5 text-base font-medium text-background"
        >
          Get Started for Free
        </motion.button>
      </motion.div>

      {/* Dashboard + video area — full viewport width */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative mt-16"
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          aspectRatio: "16 / 9",
        }}
      >
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dashboard image */}
        <motion.img
          src="/hero-dashboard.svg"
          alt="Neuralyn analytics dashboard"
          style={{ y: dashboardY, mixBlendMode: "luminosity" }}
          className="absolute left-1/2 top-1/2 w-[90%] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-2xl"
        />

        {/* Bottom gradient fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-30 h-40 w-full bg-gradient-to-t from-background to-transparent" />
      </motion.div>
    </section>
  );
}
