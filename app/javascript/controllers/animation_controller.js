import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["title", "description", "cta", "feature", "badge"]

  connect() {
    this.initializeAnimations()
  }

  initializeAnimations() {
    // Add initial classes
    const animatedElements = this.element.querySelectorAll('[data-animation]')
    animatedElements.forEach(element => {
      element.classList.add('opacity-0', 'transition-all', 'duration-700', 'ease-out')
    })

    // Trigger animations with staggered delay
    setTimeout(() => {
      animatedElements.forEach((element, index) => {
        const animation = element.dataset.animation
        const delay = index * 150 // Staggered delay between elements

        setTimeout(() => {
          element.classList.remove('opacity-0')
          
          switch(animation) {
            case 'fade-up':
              element.classList.add('translate-y-0')
              element.classList.remove('translate-y-8')
              break
            case 'scale':
              element.classList.add('scale-100')
              element.classList.remove('scale-95')
              break
          }
        }, delay)
      })
    }, 100)

    // Add hover animations for feature items
    const featureItems = this.element.querySelectorAll('.feature-item')
    featureItems.forEach(item => {
      const icon = item.querySelector('div')
      
      item.addEventListener('mouseenter', () => {
        icon.classList.add('scale-110', 'rotate-3')
        icon.classList.remove('scale-100', 'rotate-0')
      })
      
      item.addEventListener('mouseleave', () => {
        icon.classList.remove('scale-110', 'rotate-3')
        icon.classList.add('scale-100', 'rotate-0')
      })
    })

    // Add scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    animatedElements.forEach(element => {
      observer.observe(element)
    })
  }
} 