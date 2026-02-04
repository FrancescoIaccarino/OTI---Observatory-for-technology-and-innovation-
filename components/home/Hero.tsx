'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-oti-navy to-oti-blue text-white pt-32 pb-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Observatory for Technology and Innovation
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200">
              A bridge between research, business, and policy
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Analyzing technological trends with scientific rigor to produce robust evidence and translate it into operational recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-primary bg-white text-oti-navy hover:bg-gray-100">
                Learn More
              </Link>
              <Link href="/scientific-committee" className="btn-secondary border-white text-white hover:bg-white hover:text-oti-navy">
                Join Our Committee
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <Image
                src="/images/OTI.png"
                alt="OTI Observatory"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
