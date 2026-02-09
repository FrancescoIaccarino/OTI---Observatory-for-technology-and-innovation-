'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const LatestInsights = () => {
    const insights = [
        {
            id: 1,
            category: 'Fintech',
            categoryColor: 'tag-fintech',
            title: 'The Future of Digital Payments in Europe',
            date: '2026-02-05',
            excerpt: 'An analysis of emerging payment technologies and regulatory frameworks shaping the European financial landscape.',
            href: '/publications/digital-payments-europe',
        },
        {
            id: 2,
            category: 'Legal Tech',
            categoryColor: 'tag-legal',
            title: 'AI Governance: Balancing Innovation and Regulation',
            date: '2026-01-28',
            excerpt: 'Exploring the challenges and opportunities in creating effective governance frameworks for artificial intelligence.',
            href: '/publications/ai-governance',
        },
        {
            id: 3,
            category: 'Energy',
            categoryColor: 'tag-energy',
            title: 'Smart Grids and the Energy Transition',
            date: '2026-01-15',
            excerpt: 'How intelligent energy networks are enabling the shift towards renewable energy sources and sustainability.',
            href: '/publications/smart-grids',
        },
    ]

    return (
        <section className="section-padding bg-oti-gray-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="flex justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-oti-navy mb-4"
                        >
                            Latest Insights
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lead"
                        >
                            Recent research, publications, and analysis from our observatories.
                        </motion.p>
                    </div>
                    <Link href="/publications" className="hidden md:flex link-arrow">
                        View All
                    </Link>
                </div>

                {/* Insights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {insights.map((insight, index) => (
                        <motion.div
                            key={insight.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link href={insight.href}>
                                <div className="card group cursor-pointer h-full flex flex-col">
                                    {/* Category Tag */}
                                    <span className={`tag ${insight.categoryColor} mb-4`}>
                                        {insight.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-oti-navy mb-3 group-hover:text-oti-accent transition-colors">
                                        {insight.title}
                                    </h3>

                                    {/* Date */}
                                    <div className="flex items-center gap-2 text-sm text-oti-text-secondary mb-4">
                                        <Calendar size={16} />
                                        <time dateTime={insight.date}>
                                            {new Date(insight.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </time>
                                    </div>

                                    {/* Excerpt */}
                                    <p className="text-oti-text-secondary mb-6 flex-grow">
                                        {insight.excerpt}
                                    </p>

                                    {/* Read More Link */}
                                    <div className="link-arrow">
                                        Read More
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View All Link */}
                <div className="mt-8 text-center md:hidden">
                    <Link href="/publications" className="link-arrow">
                        View All Publications
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default LatestInsights
