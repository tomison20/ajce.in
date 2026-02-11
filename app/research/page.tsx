"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Lightbulb, BookOpen, Handshake, FileText, Rocket, ExternalLink } from "lucide-react";

const researchCenters = [
    { name: "Center for AI & Machine Learning", dept: "CSE / AI&DS", focus: "Deep learning, NLP, Computer vision, Predictive analytics", projects: 12 },
    { name: "Center for VLSI & Embedded Systems", dept: "ECE", focus: "SoC design, FPGA development, IoT architectures", projects: 8 },
    { name: "Center for Renewable Energy", dept: "EEE", focus: "Solar energy, Wind power, Smart grid technologies", projects: 6 },
    { name: "Center for Sustainable Construction", dept: "CE", focus: "Green building materials, Structural optimization", projects: 5 },
];

const fundedProjects = [
    { title: "AI-Powered Crop Disease Detection", agency: "DST, Govt. of India", amount: "₹25 Lakhs", pi: "Dr. Sunil Kumar S", status: "Ongoing" },
    { title: "IoT-based Water Quality Monitoring", agency: "KSCSTE", amount: "₹12 Lakhs", pi: "Dr. Mary Joseph", status: "Completed" },
    { title: "Solar Micro-Grid for Rural Electrification", agency: "MNRE", amount: "₹18 Lakhs", pi: "Prof. Thomas Mathew", status: "Ongoing" },
    { title: "Smart Traffic Management System", agency: "AICTE", amount: "₹8 Lakhs", pi: "Dr. Priya Mathew", status: "Completed" },
];

export default function ResearchPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-4">Research & Innovation</motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-xl text-white mb-6">Driving Innovation</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-lg text-white/60 max-w-2xl mx-auto">
                        From funded research projects to student startups, AJCE fosters a culture of innovation and inquiry.
                    </motion.p>
                </div>
            </section>

            {/* Research Centers */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Centers of Excellence" title="Research Centers" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {researchCenters.map((center, i) => (
                            <motion.div key={center.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="p-6 bg-card rounded-2xl border border-border hover:border-gold/30 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                                        <BookOpen className="w-5 h-5 text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground text-sm">{center.name}</h3>
                                        <p className="text-xs text-muted-foreground">{center.dept}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">{center.focus}</p>
                                <span className="text-xs text-gold font-medium">{center.projects} Active Projects</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IEDC */}
            <section className="section-padding bg-muted/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionHeader label="Entrepreneurship" title="IEDC — Innovation Hub" align="left" />
                            <div className="space-y-4 text-muted-foreground text-sm">
                                <p>The Innovation & Entrepreneurship Development Centre (IEDC) at AJCE is a vibrant ecosystem that nurtures student entrepreneurship and innovation.</p>
                                <p>With 10,000 sq ft of co-working space, prototyping labs, 3D printing facilities, and mentorship programs, the IEDC has incubated 8 student startups.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                {[
                                    { label: "Startups Incubated", value: "8" },
                                    { label: "Ideas Funded", value: "25+" },
                                    { label: "Mentors", value: "15" },
                                    { label: "Patents Filed", value: "12" },
                                ].map((s) => (
                                    <div key={s.label} className="p-4 bg-card rounded-xl border border-border text-center">
                                        <div className="text-2xl font-bold text-foreground">{s.value}</div>
                                        <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold/10 to-navy/10 border border-border flex items-center justify-center">
                            <Lightbulb className="w-20 h-20 text-gold/30" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Funded Projects */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <SectionHeader label="Funded Research" title="Major Projects" />
                    <div className="space-y-4">
                        {fundedProjects.map((proj, i) => (
                            <motion.div key={proj.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }} className="p-5 bg-card rounded-xl border border-border flex flex-col sm:flex-row sm:items-center gap-4">
                                <div className="flex-1">
                                    <h4 className="font-semibold text-foreground text-sm">{proj.title}</h4>
                                    <p className="text-xs text-muted-foreground mt-1">PI: {proj.pi} • Agency: {proj.agency}</p>
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="font-semibold text-foreground">{proj.amount}</span>
                                    <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${proj.status === "Ongoing" ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300" : "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"}`}>{proj.status}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Collaborations */}
            <section className="section-padding bg-muted/50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Partnerships" title="Industry Collaborations" description="AJCE maintains strong ties with leading companies for curriculum development, internships, and joint research." />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["TCS", "Infosys", "Bosch", "ISRO", "KSCSTE", "DRDO", "NVIDIA", "AWS"].map((company, i) => (
                            <motion.div key={company} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} viewport={{ once: true }} className="p-6 bg-card rounded-xl border border-border text-center hover:border-gold/30 transition-colors">
                                <Handshake className="w-8 h-8 text-gold/40 mx-auto mb-2" />
                                <span className="text-sm font-medium text-foreground">{company}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
