import { useEffect } from 'react';

/**
 * Adds the `.is-visible` class to every element carrying a `.reveal` family
 * class as soon as it scrolls into view, triggering the CSS keyframe
 * animations defined in index.css.  Elements only animate once.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = document.querySelectorAll(
      '.reveal, .reveal-fade, .reveal-scale, .reveal-left, .reveal-right'
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
