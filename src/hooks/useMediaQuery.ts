"use client";

import { useState, useEffect } from "react";

/**
 * A custom hook that safely checks a media query in SSR environments.
 * It initially returns `false` (or a fallback value if provided) on the server,
 * and updates to the correct value once mounted on the client.
 */
export function useMediaQuery(query: string, defaultValue = false): boolean {
  const [matches, setMatches] = useState(defaultValue);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia(query);
    
    // Set the initial value
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Listener function
    const listener = () => setMatches(media.matches);
    
    // Modern approach using addEventListener
    media.addEventListener("change", listener);
    
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [matches, query]);

  // Prevent hydration mismatch by using the default value until mounted
  if (!mounted) {
    return defaultValue;
  }

  return matches;
}

/**
 * Pre-configured hooks based on Irken Solutions Design System breakpoints.
 * Mobile: < 640px
 * Tablet: >= 640px and < 1024px
 * Desktop: >= 1024px
 */

export function useIsMobile() {
  return useMediaQuery("(max-width: 639px)");
}

export function useIsTablet() {
  return useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}
