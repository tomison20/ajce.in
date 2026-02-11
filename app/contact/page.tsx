"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";

const departmentContacts = [
    { dept: "Principal's Office", phone: "+91 4828 246605", email: "principal@ajce.in" },
    { dept: "Admissions", phone: "+91 4828 246606", email: "admissions@ajce.in" },
    { dept: "Placement Cell", phone: "+91 4828 246607", email: "placements@ajce.in" },
    { dept: "Exam Section", phone: "+91 4828 246608", email: "exams@ajce.in" },
    { dept: "Hostel Office", phone: "+91 4828 246609", email: "hostel@ajce.in" },
    { dept: "Library", phone: "+91 4828 246610", email: "library@ajce.in" },
];

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-4">Get in Touch</motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-xl text-white mb-6">Contact Us</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-lg text-white/60 max-w-2xl mx-auto">
                        We&apos;d love to hear from you. Reach out for admissions, inquiries, or campus visits.
                    </motion.p>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h3 className="heading-sm text-foreground mb-4">Campus Address</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                        <p className="text-sm text-muted-foreground">
                                            Amal Jyothi College of Engineering<br />
                                            Koovappally P.O., Kanjirappally<br />
                                            Kottayam, Kerala — 686 518<br />
                                            India
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                                        <p className="text-sm text-muted-foreground">+91 4828 246605</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                                        <p className="text-sm text-muted-foreground">info@ajce.in</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                                        <p className="text-sm text-muted-foreground">Mon–Sat: 9:00 AM – 5:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy/5 to-gold/5 border border-border flex items-center justify-center">
                                <div className="text-center text-muted-foreground">
                                    <MapPin className="w-12 h-12 mx-auto mb-2 text-gold/40" />
                                    <p className="text-sm">Google Maps<br />Integration</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="p-8 bg-card rounded-2xl border border-border">
                                <h3 className="heading-sm text-foreground mb-6">Send us a Message</h3>
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                                            <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                                            <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                                            <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                                            <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all">
                                                <option value="">Select subject</option>
                                                <option>Admission Inquiry</option>
                                                <option>Placement Inquiry</option>
                                                <option>General Inquiry</option>
                                                <option>Campus Visit</option>
                                                <option>Feedback</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                                        <textarea rows={5} placeholder="Write your message here..." className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none" />
                                    </div>
                                    <button type="submit" className="w-full py-3.5 bg-navy dark:bg-gold text-white dark:text-navy font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                                        <Send className="w-4 h-4" /> Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Department Contacts */}
            <section className="section-padding bg-muted/50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Directory" title="Department Contacts" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {departmentContacts.map((c, i) => (
                            <motion.div key={c.dept} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }} className="p-5 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors">
                                <h4 className="font-semibold text-foreground text-sm mb-3">{c.dept}</h4>
                                <div className="space-y-2 text-xs text-muted-foreground">
                                    <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-gold" /> {c.phone}</div>
                                    <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-gold" /> {c.email}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
