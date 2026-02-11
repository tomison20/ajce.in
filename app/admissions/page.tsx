"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
    FileText, GraduationCap, CreditCard, Gift, Globe, ArrowRight, CheckCircle,
} from "lucide-react";

const admissionSteps = [
    { step: 1, title: "Check Eligibility", desc: "Verify you meet the admission criteria for your desired program." },
    { step: 2, title: "Entrance Exam", desc: "Appear for KEAM / JEE Main (B.Tech) or GATE / Entrance (PG)." },
    { step: 3, title: "Apply Online", desc: "Complete the online application form with required documents." },
    { step: 4, title: "Document Verification", desc: "Submit original documents for verification at campus." },
    { step: 5, title: "Fee Payment", desc: "Pay the admission fee to confirm your seat." },
    { step: 6, title: "Welcome to AJCE!", desc: "Attend orientation and begin your academic journey." },
];

const feeStructure = [
    { program: "B.Tech (All Branches)", tuition: "₹75,000", totalPerYear: "₹1,05,000", duration: "4 Years" },
    { program: "M.Tech (All Branches)", tuition: "₹60,000", totalPerYear: "₹85,000", duration: "2 Years" },
    { program: "MCA", tuition: "₹50,000", totalPerYear: "₹75,000", duration: "2 Years" },
];

const scholarships = [
    { name: "Merit Scholarship", detail: "Top 10 KEAM/JEE rank holders get 50% tuition waiver" },
    { name: "SC/ST Scholarship", detail: "Full fee waiver through government scheme" },
    { name: "Economically Weaker Section", detail: "Up to 75% fee waiver based on family income" },
    { name: "Sports Excellence", detail: "Special scholarships for national/state level sports achievers" },
    { name: "Alumni Scholarship Fund", detail: "Need-based scholarships funded by AJCE alumni" },
];

export default function AdmissionsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-4">Admissions 2026-27</motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-xl text-white mb-6">Start Your Journey</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-lg text-white/60 max-w-2xl mx-auto">
                        Applications are open for B.Tech, M.Tech, and MCA programs. Join a community of 3000+ students.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8">
                        <a href="#apply" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-all shadow-lg shadow-gold/25">
                            Apply Now <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Admission Process */}
            <section id="process" className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="How to Apply" title="Admission Process" description="A simple 6-step process to secure your seat at AJCE." />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {admissionSteps.map((s, i) => (
                            <motion.div
                                key={s.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="relative p-6 bg-card rounded-2xl border border-border hover:border-gold/30 transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-sm">{s.step}</div>
                                    <h3 className="font-semibold text-foreground">{s.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility */}
            <section id="eligibility" className="section-padding bg-muted/50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Requirements" title="Eligibility Criteria" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { prog: "B.Tech", items: ["10+2 with Physics, Chemistry & Mathematics", "Minimum 50% aggregate (45% for reserved categories)", "Valid KEAM or JEE Main score", "Age: Below 25 years as of admission year"] },
                            { prog: "M.Tech", items: ["B.Tech / B.E. in relevant discipline", "Minimum 60% aggregate or 6.5 CGPA", "Valid GATE score preferred", "Exemption for sponsored candidates"] },
                            { prog: "MCA", items: ["Bachelor's degree with Mathematics/Statistics", "Minimum 50% aggregate", "Valid entrance examination score", "Computer Science background preferred"] },
                        ].map((item, i) => (
                            <motion.div
                                key={item.prog}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-card rounded-2xl border border-border"
                            >
                                <h3 className="heading-sm text-foreground mb-4 flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5 text-gold" />
                                    {item.prog}
                                </h3>
                                <ul className="space-y-3">
                                    {item.items.map((it) => (
                                        <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            {it}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fee Structure */}
            <section id="fees" className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <SectionHeader label="Transparency" title="Fee Structure" description="Affordable, transparent fee structure with no hidden costs." />
                    <div className="overflow-x-auto rounded-2xl border border-border">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-navy text-white">
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Program</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Tuition Fee</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Total / Year</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {feeStructure.map((row, i) => (
                                    <tr key={row.program} className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                                        <td className="px-6 py-4 text-sm font-medium text-foreground">{row.program}</td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground">{row.tuition}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-foreground">{row.totalPerYear}</td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground">{row.duration}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 text-center">
                        * Fees are subject to revision by the Fee Regulatory Committee, Govt. of Kerala. Hostel and transport fees are additional.
                    </p>
                </div>
            </section>

            {/* Scholarships */}
            <section id="scholarships" className="section-padding bg-muted/50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Financial Aid" title="Scholarships & Assistance" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {scholarships.map((s, i) => (
                            <motion.div
                                key={s.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                                    <Gift className="w-5 h-5 text-gold" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground text-sm">{s.name}</h4>
                                    <p className="text-xs text-muted-foreground mt-1">{s.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form Placeholder */}
            <section id="apply" className="section-padding">
                <div className="max-w-3xl mx-auto">
                    <SectionHeader label="Apply" title="Admission Inquiry Form" description="Fill in your details below. Our admissions team will contact you within 48 hours." />
                    <div className="p-8 bg-card rounded-2xl border border-border">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                                    <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                                    <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                                    <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Program *</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all">
                                        <option value="">Select a program</option>
                                        <option>B.Tech CSE</option>
                                        <option>B.Tech ECE</option>
                                        <option>B.Tech EEE</option>
                                        <option>B.Tech ME</option>
                                        <option>B.Tech CE</option>
                                        <option>B.Tech AI&DS</option>
                                        <option>M.Tech</option>
                                        <option>MCA</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">Message (Optional)</label>
                                <textarea rows={4} placeholder="Any specific queries..." className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none" />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3.5 bg-navy dark:bg-gold text-white dark:text-navy font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                Submit Inquiry
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
