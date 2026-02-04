'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Compass,
  CheckCircle2,
  Clock,
  Gift,
  Shield,
  FileText,
  Users,
  Target,
  BookOpen,
  Network
} from 'lucide-react'

export default function ScientificCommitteePage() {
  const roles = [
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'Strategic Direction',
      description: 'Define research priorities, areas of intervention, and selection criteria for projects and partnerships.'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: 'Methodological Validation',
      description: 'Guarantee scientific rigor on analyses, surveys, case studies, and recommendations produced by the Observatory.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Co-authorship and Visibility',
      description: 'Sign publications, reports, and policy briefs with impact on qualified decision-makers and stakeholders.'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Access to Resources',
      description: 'Datasets, industrial use cases, networks with private and institutional partners involved in projects.'
    }
  ]

  const commitment = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Plenary Meetings',
      description: '3-4 annual meetings for strategic decisions and scientific validation.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Thematic Commissions',
      description: 'Optional participation in working groups on specific projects.'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Peer Review',
      description: 'Selective review of papers, reports, and policy briefs prior to publication.'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Asynchronous Consultations',
      description: 'Written feedback on proposals via a dedicated platform.'
    }
  ]

  const ethics = [
    'Transparent declaration of relevant roles in companies, entities, or organizations involved in OTI projects.',
    'Abstention from decisions in case of direct conflict of interest.',
    'Written traceability of all relevant Committee decisions.'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Scientific Committee</h1>
            <p className="text-xl text-gray-200">
              The heart of the Observatory&apos;s credibility and scientific direction
            </p>
          </motion.div>
        </div>
      </section>

      {/* Role and Value Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-oti-navy mb-4">Role and Value for Members</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Joining the OTI Scientific Committee means taking an active role in defining
              the Observatory&apos;s scientific agenda, with tangible benefits in terms of visibility,
              impact, and valorization of one&apos;s academic work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-oti-gray rounded-xl p-8 border-l-4 border-oti-navy"
              >
                <div className="text-oti-navy mb-4">{role.icon}</div>
                <h3 className="text-xl font-bold text-oti-navy mb-2">{role.title}</h3>
                <p className="text-gray-600">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-oti-gray">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Gift className="w-8 h-8 text-oti-navy" />
                <h2 className="text-3xl font-bold text-oti-navy">Benefits</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Scientific and institutional visibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Co-authorship on ANVUR publications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Access to data and qualified networks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Impact on policy decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Outputs citable in CVs and usable for academic evaluations</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-oti-navy" />
                <h2 className="text-3xl font-bold text-oti-navy">Commitment</h2>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md mb-4">
                <p className="text-2xl font-bold text-oti-navy mb-2">8-12 hours</p>
                <p className="text-gray-600">per quarter</p>
              </div>
              <p className="text-gray-600 mb-4">
                The estimated commitment includes pre-meeting preparation, participation
                in meetings, and any specific reviews. The goal is to ensure the Committee
                is meaningful but compatible with members&apos; main responsibilities.
              </p>
              <div className="space-y-3">
                {commitment.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-oti-blue">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-oti-navy">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-oti-navy" />
              <h2 className="text-3xl font-bold text-oti-navy">Ethics and Conflict of Interest</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Every Committee member will be required to follow our ethical guidelines to
              protect the Observatory&apos;s credibility and the members&apos; reputation, ensuring
              recommendations produced are perceived as independent and based on scientific
              evidence rather than particular interests.
            </p>
            <div className="bg-oti-gray rounded-xl p-6">
              <ol className="space-y-4">
                {ethics.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-oti-navy text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 pt-1">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="section-padding bg-oti-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Join the Scientific Committee</h2>
            <p className="text-xl text-gray-200 mb-8">
              We invite distinguished academics and professionals to contribute to
              shaping the scientific direction of OTI.
            </p>
            <div className="bg-white/10 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-4">Proposal Details</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <p className="text-gray-300 mb-1">Role</p>
                  <p className="font-semibold">Scientific Committee Member</p>
                </div>
                <div>
                  <p className="text-gray-300 mb-1">Duration</p>
                  <p className="font-semibold">2 years, renewable</p>
                </div>
                <div>
                  <p className="text-gray-300 mb-1">Commitment</p>
                  <p className="font-semibold">8-12 hours per quarter</p>
                </div>
                <div>
                  <p className="text-gray-300 mb-1">Meetings</p>
                  <p className="font-semibold">3-4 plenary per year</p>
                </div>
              </div>
            </div>
            <Link href="/contact" className="btn-secondary inline-block">
              Express Your Interest
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
