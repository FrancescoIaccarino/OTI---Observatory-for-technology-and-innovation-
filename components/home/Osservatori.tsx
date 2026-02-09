'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Coins, Scale, Zap, Heart, ArrowRight } from 'lucide-react'

const Osservatori = () => {
    const observatories = [
        {
            id: 'fintech',
            icon: Coins,
            title: 'Fintech & Digital Finance',
            description: 'Exploring the intersection of finance and technology, from blockchain to digital payments and regulatory frameworks.',
            color: 'border-oti-fintech',
            bgColor: 'bg-blue-50',
            iconColor: 'text-oti-fintech',
            href: '/projects/fintech',
        },
        {
            id: 'legal',
            icon: Scale,
            title: 'Legal Tech & AI Governance',
            description: 'Analyzing the impact of AI on legal systems, regulatory compliance, and the future of governance frameworks.',
            color: 'border-oti-legal',
            bgColor: 'bg-purple-50',
            iconColor: 'text-oti-legal',
            href: '/projects/legal-tech',
        },
        {
            id: 'energy',
            icon: Zap,
            title: 'Energy & Sustainability',
            description: 'Researching sustainable energy solutions, smart grids, and the technological transition to net-zero emissions.',
            color: 'border-oti-energy',
            bgColor: 'bg-green-50',
            iconColor: 'text-oti-energy',
            href: '/projects/energy',
        },
        {
            id: 'health',
            icon: Heart,
            title: 'Digital Health',
            description: 'Investigating digital health innovations, telemedicine, AI diagnostics, and healthcare data management.',
            color: 'border-oti-health',
            bgColor: 'bg-red-50',
            iconColor: 'text-oti-health',
            href: '/projects/digital-health',
        },
    ]

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-oti-navy mb-4"
                    >
                        I Nostri Osservatori
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lead"
                    >
                        Focused research areas where we analyze technological trends and their impact on society, business, and policy.
                    </motion.p>
                </div>

                {/* Observatory Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {observatories.map((obs, index) => {
                        const Icon = obs.icon
                        return (
                            <motion.div
                                key={obs.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link href={obs.href}>
                                    <div className={`card-category ${obs.color} group cursor-pointer h-full`}>
                                        {/* Icon */}
                                        <div className={`w-14 h-14 rounded-lg ${obs.bgColor} flex items-center justify-center mb-6`}>
                                            <Icon className={`${obs.iconColor}`} size={28} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-oti-navy mb-4 group-hover:text-oti-accent transition-colors">
                                            {obs.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-oti-text-secondary mb-6 leading-relaxed">
                                            {obs.description}
                                        </p>

                                        {/* Link */}
                                        <div className="link-arrow">
                                            Explore
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Osservatori
