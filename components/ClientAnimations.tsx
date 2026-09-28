'use client'

import { useEffect } from 'react'

export default function ClientAnimations() {
  useEffect(() => {
    // Reveal on Scroll Observer
    const revealElements = () => {
      if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('[data-reveal]').forEach(el => {
          el.classList.add('revealed')
        })
        return
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-reveal-delay') || '0'
            setTimeout(() => {
              entry.target.classList.add('revealed')
              observer.unobserve(entry.target)
            }, parseInt(delay))
          }
        })
      }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })

      document.querySelectorAll('[data-reveal]').forEach(el => {
        observer.observe(el)
      })
    }

    // Rotating Words Animation
        const rotateWords = () => {
          const rotatingWordsElements = document.querySelectorAll('.rotating-words')
          rotatingWordsElements.forEach(container => {
            const words = container.querySelectorAll('.word')
            if (words.length === 0) return

            let currentIndex = 0
            const interval = setInterval(() => {
              words.forEach((word, idx) => {
                const el = word as HTMLElement
                if (idx === currentIndex) {
                  el.style.opacity = '1'
                  el.style.transform = 'translateY(0)'
                } else {
                  el.style.opacity = '0'
                  el.style.transform = 'translateY(20px)'
                }
              })
              currentIndex = (currentIndex + 1) % words.length
            }, 3000)

            return () => clearInterval(interval)
          })
        }

    // Marquee Scroll Animation
    const initMarquee = () => {
      const marqueeContainers = document.querySelectorAll('.marquee-track')
      const animationFrames: number[] = []
      
      marqueeContainers.forEach((container) => {
        const direction = container.getAttribute('data-direction') || 'ltr'
        const speed = 1
        let position = direction === 'ltr' ? 0 : -(container.scrollWidth / 2)
        
        const animate = () => {
          if (direction === 'ltr') {
            position += speed
            if (position > container.scrollWidth / 2) {
              position = 0
            }
          } else {
            position -= speed
            if (position < -(container.scrollWidth / 2)) {
              position = 0
            }
          }
          ;(container as HTMLElement).style.transform = `translateX(${position}px)`
          const frame = requestAnimationFrame(animate)
          animationFrames.push(frame)
        }
        
        animate()
      })

      return () => {
        animationFrames.forEach(frame => cancelAnimationFrame(frame))
      }
    }

    // Smooth scroll to anchor
    const smoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const href = (this as HTMLAnchorElement).getAttribute('href')
          if (href === '#' || href === '#daftar') return
          
          e.preventDefault()
          const target = document.querySelector(href!)
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
          }
        })
      })
    }

    revealElements()
    rotateWords()
    const cleanupMarquee = initMarquee()
    smoothScroll()

    return () => {
      if (cleanupMarquee) cleanupMarquee()
    }
  }, [])

  return null
}
