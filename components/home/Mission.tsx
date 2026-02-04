'use client'

import { motion } from 'framer-motion'

const Mission = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-oti-navy mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The Observatory on Technology and Innovation was created to fill a structural gap in the Italian landscape: 
            the lack of a stable place where academia, businesses, and institutions can dialogue rigorously on the 
            economic and social impact of emerging technologies.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            OTI is not a generic initiative on innovation, but a scientific platform with clear methodological standards, 
            guaranteed by an authoritative Scientific Committee that actively participates in defining priorities, 
            methodologies, and research outputs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Mission
