'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Video,
  ArrowRight,
  Bell
} from 'lucide-react'

export default function EventsPage() {
  const eventTypes = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Annual Conference',
      description: 'Our flagship event bringing together researchers, practitioners, and policy makers.'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Thematic Tables',
      description: 'Focused discussions on specific technology sectors and policy challenges.'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Workshops',
      description: 'Methodological workshops and professional training sessions.'
    }
  ]

  // Placeholder for upcoming events
  const upcomingEvents = [
    {
      title: 'OTI Inaugural Event',
      date: 'Coming 2025',
      location: 'To be announced',
      type: 'Conference',
      description: 'Our inaugural event will mark the official launch of the Observatory for Technology and Innovation. Stay tuned for details.',
      isOnline: false,
      registrationOpen: false
    }
  ]

  // Placeholder for past events
  const pastEvents: typeof upcomingEvents = []

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
            <p className="text-xl text-gray-200">
              Conferences, workshops, and discussions that foster dialogue among stakeholders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-oti-navy mb-4">Our Event Format</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              OTI organizes various types of events to facilitate knowledge exchange
              and stakeholder collaboration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {eventTypes.map((type, index) => (
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

      {/* Upcoming Events */}
      <section className="section-padding bg-oti-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-oti-navy mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us at our upcoming events to engage with the OTI community.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-md mb-6"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/4">
                      <div className="bg-oti-navy text-white rounded-xl p-4 text-center">
                        <Calendar className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-bold">{event.date}</p>
                      </div>
                    </div>
                    <div className="lg:w-3/4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-oti-light-blue/20 text-oti-navy text-xs font-semibold rounded-full">
                          {event.type}
                        </span>
                        {event.isOnline && (
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full flex items-center gap-1">
                            <Video className="w-3 h-3" /> Online
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-oti-navy mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" /> {event.location}
                        </span>
                      </div>
                      {event.registrationOpen ? (
                        <button className="btn-primary">
                          Register Now <ArrowRight className="w-4 h-4 inline ml-2" />
                        </button>
                      ) : (
                        <span className="text-gray-400 italic flex items-center gap-2">
                          <Bell className="w-4 h-4" /> Registration opening soon
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="bg-white rounded-xl p-12 text-center">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-400 mb-2">No Upcoming Events</h3>
                <p className="text-gray-400">Check back soon for new events.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-oti-navy mb-4">Past Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore recordings and materials from our previous events.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {pastEvents.length > 0 ? (
              pastEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-oti-gray rounded-xl p-6 mb-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{event.date}</p>
                      <h3 className="text-lg font-bold text-oti-navy">{event.title}</h3>
                    </div>
                    <a href="#" className="text-oti-navy hover:text-oti-blue font-semibold flex items-center gap-1">
                      View <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="bg-oti-gray rounded-xl p-12 text-center">
                <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-400 mb-2">Archive Coming Soon</h3>
                <p className="text-gray-400">Past event recordings and materials will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-oti-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Bell className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Never Miss an Event</h2>
            <p className="text-xl text-gray-200 mb-8">
              Subscribe to our newsletter to receive notifications about upcoming
              events, registration deadlines, and exclusive content.
            </p>
            <Link href="/contact" className="btn-secondary inline-block">
              Subscribe Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
