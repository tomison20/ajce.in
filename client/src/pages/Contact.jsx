import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/shared/AnimatedSection';
import { SectionTitle } from '../components/ui/SectionTitle';

const contactInfo = [
    { icon: FiMapPin, title: 'Address', value: 'Koovappally P.O, Kanjirappally, Kottayam, Kerala - 686518', color: '#6C63FF' },
    { icon: FiPhone, title: 'Phone', value: '+91 4828-2730100', link: 'tel:+914828-2730100', color: '#FF6584' },
    { icon: FiMail, title: 'Email', value: 'info@ajce.in', link: 'mailto:info@ajce.in', color: '#00D4AA' },
    { icon: FiClock, title: 'Office Hours', value: 'Mon - Sat: 9:00 AM - 5:00 PM', color: '#FF9F43' },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sending, setSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        setTimeout(() => {
            toast.success('Message sent successfully! We will get back to you soon.', { duration: 4000, style: { borderRadius: '12px', background: '#1A1A2E', color: '#E8E8F0' } });
            setForm({ name: '', email: '', subject: '', message: '' });
            setSending(false);
        }, 1500);
    };

    return (
        <main className="pt-24">
            <Toaster position="top-center" />

            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
                <div className="max-w-7xl mx-auto text-center">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
                            Get in <span className="gradient-text">Touch</span>
                        </h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                            Have questions about admissions, courses, or campus life? We&apos;d love to hear from you.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="section-padding pb-10">
                <div className="max-w-7xl mx-auto">
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info) => (
                            <StaggerItem key={info.title}>
                                <div className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-500 h-full">
                                    <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${info.color}15` }}>
                                        <info.icon className="w-7 h-7" style={{ color: info.color }} />
                                    </div>
                                    <h3 className="font-heading font-semibold mb-2">{info.title}</h3>
                                    {info.link ? (
                                        <a href={info.link} className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-primary transition-colors">{info.value}</a>
                                    ) : (
                                        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{info.value}</p>
                                    )}
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Form + Map */}
            <section className="section-padding pt-0">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <AnimatedSection>
                        <div className="glass-card p-8">
                            <h2 className="text-2xl font-heading font-bold mb-6">Send a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Name</label>
                                        <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-light-surface-alt dark:bg-dark-surface-alt border border-light-surface-alt dark:border-dark-surface-alt focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                            placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email</label>
                                        <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-light-surface-alt dark:bg-dark-surface-alt border border-light-surface-alt dark:border-dark-surface-alt focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                            placeholder="your@email.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Subject</label>
                                    <input type="text" required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-light-surface-alt dark:bg-dark-surface-alt border border-light-surface-alt dark:border-dark-surface-alt focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                                        placeholder="How can we help?" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-light-surface-alt dark:bg-dark-surface-alt border border-light-surface-alt dark:border-dark-surface-alt focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                                        placeholder="Tell us more..." />
                                </div>
                                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={sending}
                                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50">
                                    {sending ? 'Sending...' : <><FiSend /> Send Message</>}
                                </motion.button>
                            </form>
                        </div>
                    </AnimatedSection>

                    {/* Map */}
                    <AnimatedSection delay={0.2}>
                        <div className="glass-card overflow-hidden h-full min-h-[400px]">
                            <iframe
                                title="AJCE Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.517!2d76.7877!3d9.548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063a4e7e0e8cf9%3A0x63f6b17e5e1b2ea!2sAmal%20Jyothi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '500px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </main>
    );
}
