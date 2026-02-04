'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Target, Eye, Users, Building2, GraduationCap, Landmark } from 'lucide-react'

export default function AboutPage() {
  const team = [
    {
      name: 'Rocco Totaro',
      role: 'Co-Founder OTI',
      credentials: [
        'Founder - Astra Network',
        'MSc Operations Research - Columbia University',
        'New York Chapter Lead - LeadTheFuture'
      ]
    },
    {
      name: 'Gaetano Loffredo',
      role: 'Co-Founder OTI',
      credentials: [
        'Scientific Committee - Istituto M&C Militerni',
        'President - Legal Forum Ita',
        'Loffredo Associated Law Firm'
      ]
    },
    {
      name: 'Benito Piscitelli',
      role: 'Co-Founder OTI',
      credentials: [
        'Founder - Astra Network',
        'Law - Bocconi University',
        'Founder - Sturge Weber'
      ]
    },
    {
      name: 'Francesco Iaccarino',
      role: 'Treasurer',
      credentials: [
        'Treasurer - Astra Bocconi',
        'MSc Data Science - Bocconi University',
        'Representative - Bocconi University'
      ]
    },
    {
      name: 'Francesco Loffredo',
      role: 'Secretary',
      credentials: [
        'Ambassador - AURORA Alliance',
        'Board Member - NOVA UNINA',
        'Board Member - United Minds'
      ]
    },
    {
      name: 'Gabriele Pastore',
      role: 'Head of Press Office',
      credentials: [
        'Law - Federico II University',
        'Author - La Legge per Tutti'
      ]
    },
    {
      name: 'Francesco Pompeo',
      role: 'Head of Media',
      credentials: [
        'CEO - Dopamina',
        'President - We Save',
        'Innovation Bridge Foundation'
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-oti-navy to-oti-blue text-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About OTI</h1>
            <p className="text-xl text-gray-200">
              A bridge between research, business, and policy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-oti-navy" />
                <h2 className="text-3xl font-bold text-oti-navy">Our Mission</h2>
              </div>
              <p className="text-gray-600 mb-4">
                The Observatory on Technology and Innovation was created to fill a structural gap
                in the Italian landscape: the lack of a stable place where academia, businesses,
                and institutions can dialogue rigorously on the economic and social impact of
                emerging technologies.
              </p>
              <p className="text-gray-600">
                OTI is not a generic initiative on innovation, but a scientific platform with
                clear methodological standards, guaranteed by an authoritative Scientific Committee
                that actively participates in defining priorities, methodologies, and research outputs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-oti-navy" />
                <h2 className="text-3xl font-bold text-oti-navy">Our Vision</h2>
              </div>
              <p className="text-gray-600 mb-4">
                OTI&apos;s ambition is to become one of the reference interlocutors in Italy on
                themes of technology, innovation, and their impact on the economy and society.
              </p>
              <p className="text-gray-600">
                We aspire to be a stable table between academia, businesses, and institutions,
                a laboratory to experiment with new applied research projects, and a visibility
                platform for experts and researchers who want to take their skills beyond the
                boundaries of scientific literature.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Venn Diagram Section */}
      <section className="section-padding bg-oti-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-oti-navy mb-4">
              Where Three Worlds Meet
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              OTI creates a common home for those working on technology and innovation
              from different perspectives.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-80 h-80"
            >
              {/* Venn Diagram Circles */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-oti-navy/20 flex items-center justify-center">
                <div className="text-center">
                  <Landmark className="w-8 h-8 text-oti-navy mx-auto mb-2" />
                  <span className="font-semibold text-oti-navy">Policy</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-oti-blue/20 flex items-center justify-center">
                <div className="text-center">
                  <GraduationCap className="w-8 h-8 text-oti-blue mx-auto mb-2" />
                  <span className="font-semibold text-oti-blue">Academia</span>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-oti-light-blue/30 flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="w-8 h-8 text-oti-light-blue mx-auto mb-2" />
                  <span className="font-semibold text-oti-light-blue">Enterprises</span>
                </div>
              </div>
              {/* Center OTI */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-oti-navy flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">OTI</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-oti-navy" />
              <h2 className="text-3xl font-bold text-oti-navy">Our Team</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Promoted by young professionals with experience in the three worlds
              the Observatory intends to connect.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-oti-gray rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-oti-navy rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white text-xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-oti-navy text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-oti-blue text-center mb-4">{member.role}</p>
                <ul className="space-y-1">
                  {member.credentials.map((credential, i) => (
                    <li key={i} className="text-sm text-gray-600 text-center">
                      {credential}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="section-padding bg-oti-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Our Founding Principles</h2>
            <p className="text-xl text-gray-200">
              Independence and methodological rigor are the founding principles of the Observatory.
              Every analysis, recommendation, or partnership is evaluated according to criteria of
              transparency, balance of interests, and scientific quality certified by the Committee.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
