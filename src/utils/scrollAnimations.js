/**
 * Scroll Animation Utility
 *
 * This script handles one-time animations when elements scroll into view.
 * Add the class 'animate-on-scroll' to any element you want to animate on scroll.
 * Additionally, you can add animation classes like 'fade-in', 'slide-up', etc.
 */

// Function to check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // Adjust this value to control when the animation triggers
  // Lower values mean the element has to be more visible before animating
  const triggerPoint = 0.15;

  return (
    rect.top <= windowHeight * (1 - triggerPoint) &&
    rect.bottom >= windowHeight * triggerPoint
  );
}

// Function to handle scroll events
function handleScrollAnimations() {
  const elements = document.querySelectorAll(
    ".animate-on-scroll:not(.animated)"
  );

  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      // Add the 'animated' class to prevent re-animation
      element.classList.add("animated");
    }
  });
}

// Initialize animations
function initScrollAnimations() {
  // Run once on load
  handleScrollAnimations();

  // Add scroll listener
  window.addEventListener("scroll", handleScrollAnimations, { passive: true });

  // Also trigger on resize
  window.addEventListener("resize", handleScrollAnimations, { passive: true });
}

// Start when DOM is fully loaded
document.addEventListener("DOMContentLoaded", initScrollAnimations);

// Export for use in component frameworks like React/Vue if needed
export { initScrollAnimations };
