'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-oti-navy to-oti-blue text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Scientific Committee
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Take an active role in defining OTI's scientific agenda and contribute to shaping the future of technology policy in Italy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/scientific-committee" className="btn-primary bg-white text-oti-navy hover:bg-gray-100">
              Learn More
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-oti-navy">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
