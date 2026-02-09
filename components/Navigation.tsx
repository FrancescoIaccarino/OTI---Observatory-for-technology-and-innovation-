'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Scientific Committee', href: '/scientific-committee' },
    { name: 'Projects', href: '/projects' },
    { name: 'Publications', href: '/publications' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-oti-navy/95 backdrop-blur-sm shadow-lg h-16'
          : 'bg-oti-navy h-20'
        }`}
    >
      <div className="container-custom h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Logo_Complete.png"
              alt="OTI Observatory"
              width={180}
              height={50}
              className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'
                } w-auto`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white font-medium text-sm transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/scientific-committee#apply"
              className="bg-oti-accent hover:bg-white text-white hover:text-oti-navy font-semibold py-2.5 px-6 rounded transition-all duration-200"
            >
              Join Committee
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-oti-navy border-t border-white/10">
          <div className="container-custom py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-white/90 hover:text-white font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/scientific-committee#apply"
              className="block w-full text-center bg-oti-accent hover:bg-white text-white hover:text-oti-navy font-semibold py-3 px-6 rounded transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Join Committee
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
