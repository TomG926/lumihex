// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// Initialize animations when the page loads
document.addEventListener("turbo:load", () => {
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button')
  const mobileMenu = document.querySelector('.mobile-menu')
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden')
    })
  }

  // Navbar scroll effect
  const navbar = document.querySelector('nav')
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-md')
        navbar.classList.remove('bg-white/80')
      } else {
        navbar.classList.remove('bg-white', 'shadow-md')
        navbar.classList.add('bg-white/80')
      }
    })
  }

  // Initialize animation observers
  const animateElements = document.querySelectorAll('.animate-text, .animate-image')
  
  // Set initial state for elements that should animate
  animateElements.forEach(element => {
    if (!element.closest('.hero')) {
      element.setAttribute('data-animate', 'true')
    }
  })

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        // Unobserve after animation is triggered
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  // Observe all animated elements
  animateElements.forEach(element => {
    if (element.hasAttribute('data-animate')) {
      observer.observe(element)
    }
  })

  // Animate text elements
  const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, span:not(.sr-only)')
  textElements.forEach(element => {
    // Skip hero section elements
    if (!element.closest('.hero')) {
      element.classList.add('animate-text')
    }
  })

  // Animate images
  const images = document.querySelectorAll('img')
  images.forEach(image => {
    // Skip hero section images
    if (!image.closest('.hero')) {
      image.classList.add('animate-image')
    }
  })

  // Fade in elements on scroll
  const fadeElements = document.querySelectorAll('.fade-in')
  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0')
        entry.target.classList.remove('opacity-0', 'translate-y-4')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  fadeElements.forEach(element => {
    element.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500')
    fadeObserver.observe(element)
  })

  // Slide in elements from sides
  const slideElements = document.querySelectorAll('.slide-in')
  const slideObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-x-0')
        entry.target.classList.remove('opacity-0', 'translate-x-4')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  slideElements.forEach(element => {
    element.classList.add('opacity-0', 'translate-x-4', 'transition-all', 'duration-500')
    slideObserver.observe(element)
  })

  // Scale up elements
  const scaleElements = document.querySelectorAll('.scale-up')
  const scaleObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'scale-100')
        entry.target.classList.remove('opacity-0', 'scale-95')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  scaleElements.forEach(element => {
    element.classList.add('opacity-0', 'scale-95', 'transition-all', 'duration-500')
    scaleObserver.observe(element)
  })
})
