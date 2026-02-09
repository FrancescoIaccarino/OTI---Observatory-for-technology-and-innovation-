'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, Building2 } from 'lucide-react'

const GovernanceNetwork = () => {
    const committeeMembers = [
        {
            name: 'Prof. Maria Rossi',
            title: 'Chair',
            institution: 'Politecnico di Milano',
            image: '/images/team/placeholder.jpg',
        },
        {
            name: 'Dr. Giovanni Bianchi',
            title: 'Vice Chair',
            institution: 'Università Bocconi',
            image: '/images/team/placeholder.jpg',
        },
        {
            name: 'Prof. Laura Verdi',
            title: 'Member',
            institution: 'Università di Roma',
            image: '/images/team/placeholder.jpg',
        },
        {
            name: 'Dr. Marco Neri',
            title: 'Member',
            institution: 'European Central Bank',
            image: '/images/team/placeholder.jpg',
        },
    ]

    const partners = [
        'Assofintech',
        'Istituto M&C Militerni',
        'Politecnico di Milano',
        'Università Bocconi',
        'European Research Council',
        'Italian Ministry of Innovation',
    ]

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                {/* Scientific Committee */}
                <div className="mb-20">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex justify-center mb-4"
                        >
                            <div className="w-14 h-14 rounded-full bg-oti-navy/10 flex items-center justify-center">
                                <Users className="text-oti-navy" size={28} />
                            </div>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-oti-navy mb-4"
                        >
                            Scientific Committee
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lead"
                        >
                            Leading experts from academia, industry, and policy institutions.
                        </motion.p>
                    </div>

                    {/* Committee Members Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                        {committeeMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="mb-4 relative w-32 h-32 mx-auto rounded-full overflow-hidden bg-oti-gray-200">
                                    {/* Placeholder for member photo */}
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-oti-navy to-oti-blue">
                                        <Users className="text-white/30" size={48} />
                                    </div>
                                </div>
                                <h3 className="font-semibold text-oti-navy mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-oti-accent font-medium mb-1">
                                    {member.title}
                                </p>
                                <p className="text-sm text-oti-text-secondary">
                                    {member.institution}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* View All Link */}
                    <div className="text-center">
                        <Link href="/scientific-committee" className="link-arrow">
                            View Full Committee
                        </Link>
                    </div>
                </div>

                {/* Partners */}
                <div>
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex justify-center mb-4"
                        >
                            <div className="w-14 h-14 rounded-full bg-oti-navy/10 flex items-center justify-center">
                                <Building2 className="text-oti-navy" size={28} />
                            </div>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-oti-navy mb-4"
                        >
                            Our Partners
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lead"
                        >
                            Collaborating with leading institutions to drive innovation.
                        </motion.p>
                    </div>

                    {/* Partners Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
                    >
                        {partners.map((partner, index) => (
                            <div
                                key={partner}
                                className="flex items-center justify-center p-6 bg-white border border-oti-gray-200 rounded-md hover:border-oti-accent transition-colors group"
                            >
                                <span className="text-sm text-oti-text-secondary group-hover:text-oti-navy font-medium text-center">
                                    {partner}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default GovernanceNetwork
