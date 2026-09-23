import { fadeIn } from "@/lib/motion";
import { MotionDiv } from "@/components/motion/MotionWrapper";

/**
 * Fixed decorative backdrop: deep navy base, large soft radial glows,
 * a faint grid, and a slow-drifting gradient orb. Purely decorative —
 * pointer-events none, aria-hidden, and disabled under reduced motion.
 */
export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-navy-950" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />

      {/* Static radial glows */}
      <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute top-[40%] -right-32 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 -left-32 h-[500px] w-[500px] rounded-full bg-blue-700/15 blur-[120px]" />

      {/* Slow drifting orb */}
      <MotionDiv
        variants={fadeIn}
        animate="visible"
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute left-[15%] top-[15%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px] motion-reduce:hidden"
      >
        <MotionDiv
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full rounded-full bg-blue-500/10 blur-[80px]"
        />
      </MotionDiv>

      {/* Vignette to deepen edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(3,7,18,0.6)_100%)]" />
    </div>
  );
}
