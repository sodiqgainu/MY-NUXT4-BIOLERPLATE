import Lenis from '@studio-freight/lenis';

export default defineNuxtPlugin(() => {
  if (process.client) {
    const lenis = new Lenis({
      smooth: true, // Enables smooth scrolling
      duration: 1.2, // Adjust scroll duration (optional)
      easing: (t) => 1 - Math.pow(1 - t, 3), // Smooth easing function (optional)
    });

    // Animation frame to keep Lenis updating
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
});
