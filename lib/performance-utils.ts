// Utility functions for performance optimization

/**
 * Debounce function to limit the rate at which a function can fire
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function to ensure a function is called at most once in a specified time period
 */
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle = false

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

/**
 * Lazy load images that are not in the viewport
 */
export function lazyLoadImages() {
  if (typeof window !== "undefined" && "IntersectionObserver" in window) {
    const lazyImages = document.querySelectorAll("img[data-src]")

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src || ""
          img.removeAttribute("data-src")
          imageObserver.unobserve(img)
        }
      })
    })

    lazyImages.forEach((img) => {
      imageObserver.observe(img)
    })
  }
}

/**
 * Detect browser and device for targeted optimizations
 */
export function detectBrowser() {
  if (typeof window === "undefined") return null

  const userAgent = window.navigator.userAgent
  let browser = "unknown"

  if (userAgent.indexOf("Chrome") > -1) {
    browser = "chrome"
  } else if (userAgent.indexOf("Safari") > -1) {
    browser = "safari"
  } else if (userAgent.indexOf("Firefox") > -1) {
    browser = "firefox"
  } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident/") > -1) {
    browser = "ie"
  } else if (userAgent.indexOf("Edge") > -1) {
    browser = "edge"
  }

  return browser
}

/**
 * Check if the device is mobile
 */
export function isMobile() {
  if (typeof window === "undefined") return false

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)
}

/**
 * Preload critical resources
 */
export function preloadResources(resources: string[]) {
  if (typeof window === "undefined") return

  resources.forEach((resource) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.href = resource

    if (resource.endsWith(".js")) {
      link.as = "script"
    } else if (resource.endsWith(".css")) {
      link.as = "style"
    } else if (/\.(png|jpg|jpeg|gif|webp)$/.test(resource)) {
      link.as = "image"
    } else if (/\.(woff|woff2|ttf|otf)$/.test(resource)) {
      link.as = "font"
      link.crossOrigin = "anonymous"
    }

    document.head.appendChild(link)
  })
}

