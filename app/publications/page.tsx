'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  BookOpen,
  FileText,
  Download,
  ExternalLink,
  Award,
  Building2
} from 'lucide-react'

export default function PublicationsPage() {
  const publicationTypes = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Research Papers',
      description: 'Peer-reviewed academic publications on technology and innovation topics.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Policy Briefs',
      description: 'Concise summaries translating research findings into policy recommendations.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Sector Reports',
      description: 'Comprehensive analyses of specific technology sectors and trends.'
    }
  ]

  // Placeholder publications - in production, these would come from a CMS or database
  const publications = [
    {
      title: 'Coming Soon',
      type: 'Report',
      date: '2025',
      description: 'Our first publications will be available soon. Check back for updates on our research output.',
      downloadUrl: null
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Publications & Research</h1>
            <p className="text-xl text-gray-200">
              Rigorous research with real-world impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Banner */}
      <section className="bg-oti-gray py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left"
          >
            <Building2 className="w-12 h-12 text-oti-navy" />
            <div>
              <h3 className="text-lg font-bold text-oti-navy">
                In Partnership with Istituto M&C Militerni
              </h3>
              <p className="text-gray-600">
                Publications with ISSN code and ANVUR recognition to valorize research and the Third Mission
              </p>
            </div>
            <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
              <Award className="w-5 h-5" />
              <span className="font-semibold">ANVUR Recognized</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publication Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-oti-navy mb-4">What We Publish</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              OTI produces analyses, policy briefs, scientific papers, and structured
              discussion moments, using language accessible to businesses and institutions
              without sacrificing methodological rigor.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {publicationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-oti-gray rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-oti-navy text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-oti-navy mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Repository */}
      <section className="section-padding bg-oti-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-oti-navy mb-4">Publication Repository</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access our research outputs, policy recommendations, and sector analyses.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md mb-4"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-oti-navy text-white text-xs font-semibold rounded-full">
                        {pub.type}
                      </span>
                      <span className="text-sm text-gray-500">{pub.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-oti-navy mb-2">{pub.title}</h3>
                    <p className="text-gray-600">{pub.description}</p>
                  </div>
                  {pub.downloadUrl ? (
                    <a
                      href={pub.downloadUrl}
                      className="flex items-center gap-2 text-oti-navy hover:text-oti-blue font-semibold whitespace-nowrap"
                    >
                      <Download className="w-5 h-5" />
                      Download PDF
                    </a>
                  ) : (
                    <span className="text-gray-400 italic">Coming soon</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Authors */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-oti-navy mb-6 text-center">For Authors</h2>
            <div className="bg-oti-gray rounded-xl p-8">
              <p className="text-gray-600 mb-6">
                OTI welcomes contributions from researchers, academics, and practitioners
                in the fields of technology, innovation, and policy. Our publication process
                ensures rigorous peer review while maintaining accessibility.
              </p>
              <h3 className="font-bold text-oti-navy mb-4">Publication Benefits:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-oti-navy flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">ANVUR recognition for academic evaluations</span>
                </li>
                <li className="flex items-start gap-3">
                  <ExternalLink className="w-5 h-5 text-oti-navy flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Wide dissemination to policy makers and businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-oti-navy flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">ISSN-coded publications</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-primary inline-block">
                Submit a Proposal
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-oti-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-200 mb-8">
              Subscribe to receive notifications about new publications and research updates.
            </p>
            <Link href="/contact" className="btn-secondary inline-block">
              Subscribe to Updates
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
