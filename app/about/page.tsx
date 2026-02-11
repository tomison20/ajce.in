"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { timeline, accreditations } from "@/data/placements";
import {
    Target,
    Eye,
    Award,
    Users,
    Building,
    ArrowRight,
} from "lucide-react";

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-4"
                    >
                        About Us
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-xl text-white mb-6"
                    >
                        A Legacy of<br />Academic Excellence
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="body-lg text-white/60 max-w-2xl mx-auto"
                    >
                        Since 2001, Amal Jyothi College of Engineering has been shaping
                        engineers and leaders who make a difference in the world.
                    </motion.p>
                </div>
            </section>

            {/* Overview */}
            <section id="overview" className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionHeader label="Overview" title="About AJCE" align="left" />
                            <div className="space-y-4 text-muted-foreground body-md">
                                <p>
                                    Amal Jyothi College of Engineering (AJCE) is a premier
                                    engineering institution located in the serene hills of
                                    Kanjirappally, Kottayam, Kerala. Established in 2001 under the
                                    aegis of the Archdiocese of Kottayam, the college is approved by
                                    AICTE, affiliated to APJ Abdul Kalam Technological University
                                    (KTU), and accredited with &apos;A&apos; grade by NAAC.
                                </p>
                                <p>
                                    Spread across a lush 62-acre campus, AJCE offers undergraduate,
                                    postgraduate, and doctoral programs across 8 departments. The
                                    institution is known for its excellent infrastructure, dedicated
                                    faculty, strong placement record, and vibrant campus life.
                                </p>
                                <p>
                                    AJCE is committed to providing holistic education that combines
                                    technical excellence with ethical values, preparing students to
                                    become responsible engineers and leaders of tomorrow.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gold/10 to-navy/10 border border-border flex items-center justify-center">
                                <div className="text-center text-muted-foreground">
                                    <Building className="w-16 h-16 mx-auto mb-4 text-gold/50" />
                                    <span className="text-sm">Campus Aerial View</span>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-2xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section id="vision-mission" className="section-padding bg-muted/50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Our Purpose" title="Vision & Mission" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="p-8 bg-card rounded-2xl border border-border"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                                <Eye className="w-6 h-6 text-gold" />
                            </div>
                            <h3 className="heading-md mb-4">Vision</h3>
                            <p className="text-muted-foreground body-md">
                                To be a globally recognized institution of academic excellence in
                                engineering and technology, nurturing innovation, ethical
                                leadership, and societal responsibility.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="p-8 bg-card rounded-2xl border border-border"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                                <Target className="w-6 h-6 text-gold" />
                            </div>
                            <h3 className="heading-md mb-4">Mission</h3>
                            <ul className="space-y-3 text-muted-foreground body-md">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                                    Provide quality technical education with state-of-the-art infrastructure
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                                    Foster research, innovation, and entrepreneurial thinking
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                                    Develop industry-ready professionals with strong ethical values
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                                    Create a conducive environment for holistic development
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section id="history" className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <SectionHeader
                        label="Our Journey"
                        title="History & Milestones"
                        description="Key milestones in AJCE's journey of academic excellence."
                    />
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
                        <div className="space-y-12">
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-gold -translate-x-1.5 mt-2 z-10" />
                                    <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                                        <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-sm font-bold rounded-full mb-2">
                                            {item.year}
                                        </span>
                                        <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Accreditations */}
            <section id="accreditations" className="section-padding bg-muted/50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        label="Quality Assurance"
                        title="Accreditations & Recognitions"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {accreditations.map((acc, i) => (
                            <motion.div
                                key={acc.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-card rounded-2xl border border-border text-center hover:border-gold/30 hover:shadow-lg transition-all"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                                    <Award className="w-7 h-7 text-gold" />
                                </div>
                                <h3 className="font-bold text-lg text-foreground">{acc.name}</h3>
                                {acc.grade && (
                                    <span className="inline-block mt-1 px-3 py-0.5 bg-gold/10 text-gold text-sm font-bold rounded-full">
                                        Grade: {acc.grade}
                                    </span>
                                )}
                                <p className="text-sm text-muted-foreground mt-3">{acc.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section id="leadership" className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        label="Administration"
                        title="Our Leadership"
                        description="Meet the visionaries guiding AJCE towards excellence."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Rev. Fr. Dr. Lijo P Thomas", role: "Manager", desc: "Providing visionary leadership to AJCE since its inception." },
                            { name: "Dr. Biju Mathew", role: "Principal", desc: "Leading academics with a focus on research and innovation." },
                            { name: "Prof. John K Abraham", role: "Vice Principal", desc: "Overseeing administrative excellence and student welfare." },
                        ].map((leader, i) => (
                            <motion.div
                                key={leader.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-8 bg-card rounded-2xl border border-border hover:border-gold/30 transition-colors"
                            >
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold/20 to-navy/10 flex items-center justify-center">
                                    <Users className="w-10 h-10 text-gold/60" />
                                </div>
                                <h3 className="font-semibold text-foreground text-lg">{leader.name}</h3>
                                <p className="text-sm text-gold font-medium mt-1">{leader.role}</p>
                                <p className="text-sm text-muted-foreground mt-3">{leader.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
