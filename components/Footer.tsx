import Link from 'next/link'
import Image from 'next/image'
import { Mail, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-oti-navy text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/Logo_Complete.png"
              alt="OTI Logo"
              width={200}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              A bridge between research, business, and policy. Analyzing technological trends with scientific rigor.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:info@oti-observatory.org" className="hover:text-oti-light-blue transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-oti-light-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-oti-light-blue transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/scientific-committee" className="text-gray-300 hover:text-white transition-colors">Scientific Committee</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/publications" className="text-gray-300 hover:text-white transition-colors">Publications</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Milan, Italy</li>
              <li>info@oti-observatory.org</li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Form</Link></li>
              <li><Link href="/newsletter" className="hover:text-white transition-colors">Newsletter</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Observatory for Technology and Innovation. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
