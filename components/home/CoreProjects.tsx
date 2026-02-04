'use client'

import { motion } from 'framer-motion'
import { DollarSign, Scale, Radio, Calendar, FileText } from 'lucide-react'
import Link from 'next/link'

const CoreProjects = () => {
  const projects = [
    {
      icon: DollarSign,
      title: 'Fintech',
      description: 'Partnership with Assofintech to observe innovation in credit, payments, and digital investments.',
      color: 'bg-blue-500',
    },
    {
      icon: Scale,
      title: 'Legal Tech',
      description: 'Focus on AI, data governance, algorithmic responsibility, and digital regulation.',
      color: 'bg-purple-500',
    },
    {
      icon: Radio,
      title: 'Newsletter & Podcast',
      description: 'Reasoned press review, case analysis, and interviews with experts and Committee members.',
      color: 'bg-green-500',
    },
    {
      icon: Calendar,
      title: 'Events',
      description: 'Annual conferences, thematic tables, methodological workshops, and training sessions.',
      color: 'bg-orange-500',
    },
    {
      icon: FileText,
      title: 'Publications',
      description: 'Publications with ISSN code and ANVUR recognition to valorize research and the Third Mission.',
      color: 'bg-red-500',
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
            Core Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An integrated and coherent portfolio of projects that dialogue with each other
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${project.color} text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-oti-navy mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/projects" className="btn-primary">
            Explore All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CoreProjects
