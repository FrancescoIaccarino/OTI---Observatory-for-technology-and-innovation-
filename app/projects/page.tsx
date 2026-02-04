'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Banknote,
  Scale,
  Newspaper,
  Calendar,
  BookOpen,
  ArrowRight,
  Building2,
  Cpu,
  Users
} from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      icon: <Banknote className="w-10 h-10" />,
      title: 'Fintech Observatory',
      description: 'Partnership with Assofintech to observe innovation in credit, payments, and digital investments.',
      details: [
        'Market analysis and trends monitoring',
        'Regulatory impact assessments',
        'Innovation case studies',
        'Annual sector reports'
      ],
      status: 'Active',
      partner: 'Assofintech'
    },
    {
      icon: <Scale className="w-10 h-10" />,
      title: 'Legal Tech',
      description: 'Focus on AI, data governance, algorithmic responsibility, and digital regulation.',
      details: [
        'AI governance frameworks',
        'Data protection analysis',
        'Algorithmic accountability',
        'Digital rights research'
      ],
      status: 'Active',
      partner: null
    },
    {
      icon: <Newspaper className="w-10 h-10" />,
      title: 'Newsletter & Podcast',
      description: 'Reasoned press review, case analysis, and interviews with experts and Committee members.',
      details: [
        'Weekly technology digest',
        'Expert interviews',
        'Policy analysis',
        'Industry insights'
      ],
      status: 'Coming Soon',
      partner: null
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: 'Events',
      description: 'Annual conferences, thematic tables, methodological workshops, and training sessions.',
      details: [
        'Annual OTI Conference',
        'Thematic roundtables',
        'Research workshops',
        'Professional training'
      ],
      status: 'Ongoing',
      partner: null
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: 'Publications',
      description: 'Publications in collaboration with the M&C Militerni Institute with ISSN code and ANVUR recognition.',
      details: [
        'Research papers',
        'Policy briefs',
        'Sector reports',
        'Position papers'
      ],
      status: 'Active',
      partner: 'Istituto M&C Militerni'
    }
  ]

  const workflowSteps = [
    { label: 'Board proposes', icon: <Building2 className="w-6 h-6" /> },
    { label: 'Committee validates', icon: <Users className="w-6 h-6" /> },
    { label: 'Commissions execute', icon: <Cpu className="w-6 h-6" /> },
    { label: 'Outputs published', icon: <BookOpen className="w-6 h-6" /> }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Core Projects</h1>
            <p className="text-xl text-gray-200">
              An integrated and coherent portfolio of research and outreach initiatives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <p className="text-lg text-gray-600">
              OTI is not a single editorial initiative or a series of disconnected events,
              but a coordinated ecosystem of projects that dialogue with each other and
              reinforce one another. Our initial portfolio includes five main pillars.
            </p>
          </motion.div>

          {/* Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-oti-gray rounded-xl p-8 mb-16"
          >
            <h3 className="text-xl font-bold text-oti-navy text-center mb-8">Project Workflow</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {workflowSteps.map((step, index) => (
                <div key={step.label} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-oti-navy text-white rounded-full flex items-center justify-center mb-2">
                      {step.icon}
                    </div>
                    <span className="text-sm font-medium text-oti-navy text-center">{step.label}</span>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-oti-blue mx-4 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-oti-gray">
        <div className="container-custom">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-oti-navy">{project.icon}</div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-oti-navy">{project.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.status === 'Active' ? 'bg-green-100 text-green-700' :
                            project.status === 'Coming Soon' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        {project.partner && (
                          <p className="text-sm text-oti-blue mb-2">
                            In partnership with {project.partner}
                          </p>
                        )}
                        <p className="text-gray-600">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/3">
                    <h4 className="font-semibold text-oti-navy mb-3">Key Activities</h4>
                    <ul className="space-y-2">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-oti-navy rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-oti-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Collaborate With Us</h2>
            <p className="text-xl text-gray-200 mb-8">
              Interested in partnering on a project or contributing your expertise?
              We welcome collaboration with researchers, institutions, and organizations.
            </p>
            <Link href="/contact" className="btn-secondary inline-block">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
