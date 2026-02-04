'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  CheckCircle2
} from 'lucide-react'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to a form handling service like Formspree
    console.log('Form submitted:', formState)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'committee', label: 'Scientific Committee Interest' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'publication', label: 'Publication Submission' },
    { value: 'media', label: 'Media Inquiry' }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Get in touch with the OTI team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-oti-navy mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you&apos;re interested in joining our Scientific Committee,
                exploring partnership opportunities, or simply learning more about
                our work, we&apos;d love to hear from you.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-oti-gray rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-oti-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-oti-navy mb-1">Email</h3>
                    <a href="mailto:info@oti-observatory.org" className="text-gray-600 hover:text-oti-blue">
                      info@oti-observatory.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-oti-gray rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-oti-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-oti-navy mb-1">Location</h3>
                    <p className="text-gray-600">Italy</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="font-semibold text-oti-navy mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-oti-gray rounded-lg flex items-center justify-center text-oti-navy hover:bg-oti-navy hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-oti-gray rounded-lg flex items-center justify-center text-oti-navy hover:bg-oti-navy hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-oti-gray rounded-xl p-6">
                <h3 className="font-semibold text-oti-navy mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/scientific-committee#apply" className="text-gray-600 hover:text-oti-navy">
                      → Join the Scientific Committee
                    </a>
                  </li>
                  <li>
                    <a href="/publications" className="text-gray-600 hover:text-oti-navy">
                      → Submit a Publication
                    </a>
                  </li>
                  <li>
                    <a href="/projects" className="text-gray-600 hover:text-oti-navy">
                      → Explore Our Projects
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {isSubmitted ? (
                <div className="bg-green-50 rounded-xl p-12 text-center h-full flex flex-col items-center justify-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-oti-navy mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been received. We&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormState({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                        type: 'general'
                      })
                    }}
                    className="text-oti-navy hover:text-oti-blue font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-oti-gray rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-oti-navy mb-6">Send a Message</h2>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="type" className="block text-sm font-semibold text-oti-navy mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formState.type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-oti-navy"
                      >
                        {inquiryTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-oti-navy mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-oti-navy"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-oti-navy mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-oti-navy"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-oti-navy mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-oti-navy"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-oti-navy mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-oti-navy resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-oti-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-gray-200 mb-8">
              Stay updated with the latest research, events, and publications from OTI.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button type="submit" className="btn-secondary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
