'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Team = () => {
  const teamMembers = [
    {
      name: 'Rocco Totaro',
      role: 'Co-Founder OTI',
      credentials: [
        'Founder - Astra Network',
        'MSc Operations Research - Columbia University',
        'New York Chapter Lead - LeadTheFuture',
      ],
    },
    {
      name: 'Gaetano Loffredo',
      role: 'Co-Founder OTI',
      credentials: [
        'Scientific Committee - Istituto M&C Militerni',
        'President - Legal Forum Ita',
        'Loffredo Associated Law Firm',
      ],
    },
    {
      name: 'Benito Piscitelli',
      role: 'Co-Founder OTI',
      credentials: [
        'Founder - Astra Network',
        'Law - Bocconi University',
        'Founder - Sturge Weber',
      ],
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-oti-navy mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Promoted by young professionals with experience in academia, business, and policy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-oti-gray p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-oti-navy mb-2">{member.name}</h3>
              <p className="text-oti-blue font-semibold mb-4">{member.role}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {member.credentials.map((credential, idx) => (
                  <li key={idx}>• {credential}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/about#team" className="btn-secondary">
            Meet the Full Team
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
