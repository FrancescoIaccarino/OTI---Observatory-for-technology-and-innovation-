'use client'

import { motion } from 'framer-motion'
import { Users, FileText, Building2, Target } from 'lucide-react'

const TrustBar = () => {
    const stats = [
        {
            icon: Target,
            number: '4',
            label: 'Research Areas',
        },
        {
            icon: Building2,
            number: '20+',
            label: 'Partner Organizations',
        },
        {
            icon: FileText,
            number: '50+',
            label: 'Publications',
        },
        {
            icon: Users,
            number: '15+',
            label: 'Scientific Committee Members',
        },
    ]

    return (
        <section className="bg-oti-gray-50 border-y border-oti-gray-200">
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-oti-navy/10 flex items-center justify-center">
                                        <Icon className="text-oti-navy" size={24} />
                                    </div>
                                </div>
                                <div className="text-4xl font-bold text-oti-navy mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-oti-text-secondary font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default TrustBar
