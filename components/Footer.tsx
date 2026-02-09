import Link from 'next/link'
import Image from 'next/image'
import { Mail, Linkedin, Twitter, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-oti-navy text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Image
              src="/images/Logo_Complete.png"
              alt="OTI Observatory"
              width={180}
              height={50}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              A bridge between research, business, and policy. Analyzing technological trends with scientific rigor.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:info@oti-observatory.org"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-oti-accent flex items-center justify-center transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-oti-accent flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-oti-accent flex items-center justify-center transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/scientific-committee" className="text-white/80 hover:text-white transition-colors text-sm">
                  Scientific Committee
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/80 hover:text-white transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-white/80 hover:text-white transition-colors text-sm">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/80 hover:text-white transition-colors text-sm">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/80 text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Milan, Italy</span>
              </li>
              <li className="flex items-start gap-3 text-white/80 text-sm">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:info@oti-observatory.org" className="hover:text-white transition-colors">
                  info@oti-observatory.org
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80 text-sm">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>+39 02 XXXX XXXX</span>
              </li>
              <li>
                <Link href="/contact" className="text-oti-accent hover:text-white transition-colors text-sm font-medium">
                  Contact Form →
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-white/80 text-sm mb-4">
              Stay updated with our latest research and insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-oti-accent transition-colors text-sm"
              />
              <button
                type="submit"
                className="w-full bg-oti-accent hover:bg-white text-white hover:text-oti-navy font-semibold py-2.5 px-4 rounded transition-all duration-200 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © {currentYear} Observatory for Technology and Innovation. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
