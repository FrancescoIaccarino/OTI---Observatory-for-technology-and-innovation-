'use client'

import { motion } from 'framer-motion'

const Vision = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-oti-navy mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              OTI's ambition is to become, in the coming years, one of the reference interlocutors in Italy on themes of 
              technology, innovation, and their impact on the economy and society.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We create a common home for those working on these themes from different perspectives: academics studying 
              algorithms and regulation, professionals implementing digital solutions, and policy makers who must regulate 
              rapidly evolving phenomena.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Independence and methodological rigor are our founding principles. Every analysis, recommendation, or 
              partnership is evaluated according to criteria of transparency, balance of interests, and scientific quality 
              certified by our Committee.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Venn Diagram */}
              <svg viewBox="0 0 400 400" className="w-full h-auto">
                {/* Policy Circle */}
                <circle cx="200" cy="120" r="100" fill="#5A8AB8" opacity="0.6" />
                <text x="200" y="80" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
                  Policy
                </text>

                {/* Academia Circle */}
                <circle cx="140" cy="240" r="100" fill="#1E4D7B" opacity="0.6" />
                <text x="100" y="280" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
                  Academia
                </text>

                {/* Enterprises Circle */}
                <circle cx="260" cy="240" r="100" fill="#002B5C" opacity="0.6" />
                <text x="300" y="280" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
                  Enterprises
                </text>

                {/* OTI Center */}
                <circle cx="200" cy="200" r="40" fill="#002B5C" />
                <text x="200" y="210" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
                  OTI
                </text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Vision
