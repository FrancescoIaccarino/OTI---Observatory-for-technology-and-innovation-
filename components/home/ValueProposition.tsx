'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Users, TrendingUp } from 'lucide-react'

const ValueProposition = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Scientific Rigor',
      description: 'Validated methodologies and peer review on all main outputs.',
    },
    {
      icon: Users,
      title: 'Operational Dialogue',
      description: 'Accessible language for businesses, policy makers, and institutional stakeholders.',
    },
    {
      icon: TrendingUp,
      title: 'Measurable Impact',
      description: 'Clear KPIs, documented outputs, traceable visibility for all contributors.',
    },
  ]

  return (
    <section className="section-padding bg-oti-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-oti-navy mb-4">
            Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bridge the gap between research, business, and policy through three core principles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-oti-navy text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-oti-navy mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ValueProposition
