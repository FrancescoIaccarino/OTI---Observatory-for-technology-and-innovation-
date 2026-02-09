'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { UserPlus, Mail } from 'lucide-react'

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-oti-navy via-oti-blue to-oti-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
            Join the Scientific Committee
          </h2>
          <p className="text-lead text-white/90 mb-10 max-w-2xl mx-auto">
            Take an active role in defining OTI's scientific agenda and contribute to shaping
            the future of technology policy in Italy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/scientific-committee"
              className="bg-white hover:bg-oti-accent text-oti-navy hover:text-white font-semibold py-3 px-8 rounded transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <UserPlus size={20} />
              Learn More
            </Link>
            <Link
              href="/contact"
              className="btn-secondary"
            >
              <Mail size={20} />
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
