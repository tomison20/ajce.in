"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProgramCard } from "@/components/shared/ProgramCard";
import { programs } from "@/data/programs";
import { Calendar, Download, BookOpen } from "lucide-react";

const tabs = [
    { id: "undergraduate", label: "Undergraduate (B.Tech)" },
    { id: "postgraduate", label: "Postgraduate (M.Tech/MCA)" },
];

export default function AcademicsPage() {
    const [activeTab, setActiveTab] = useState("undergraduate");

    const filteredPrograms =
        activeTab === "undergraduate"
            ? programs.filter((p) => p.level === "undergraduate")
            : programs.filter((p) => p.level === "postgraduate");

    return (
        <>
            {/* Hero */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-4">Programs</motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-xl text-white mb-6">Academic Programs</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-lg text-white/60 max-w-2xl mx-auto">
                        Discover our diverse range of engineering programs designed to prepare you for a successful career.
                    </motion.p>
                </div>
            </section>

            {/* Programs */}
            <section id="undergraduate" className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Our Programs" title="Explore By Level" />
                    {/* Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex items-center gap-1 p-1 bg-muted rounded-xl">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all ${activeTab === tab.id
                                            ? "bg-card text-foreground shadow-sm"
                                            : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPrograms.map((program, i) => (
                            <ProgramCard key={program.id} program={program} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic Calendar */}
            <section id="calendar" className="section-padding bg-muted/50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Schedule" title="Academic Calendar 2025–26" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { period: "Odd Semester", dates: "August 2025 — December 2025", events: ["Classes begin: Aug 4", "Mid-term exams: Oct 6–11", "End-semester exams: Dec 1–20"] },
                            { period: "Even Semester", dates: "January 2026 — May 2026", events: ["Classes begin: Jan 5", "Mid-term exams: Mar 2–7", "End-semester exams: May 4–23"] },
                            { period: "Key Dates", dates: "Year-round", events: ["Onam Break: Sep 1–7", "Christmas Break: Dec 21 – Jan 4", "CIPHER Tech Fest: Mar 15–17", "Annual Day: Apr 18"] },
                        ].map((sem, i) => (
                            <motion.div
                                key={sem.period}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-card rounded-2xl border border-border"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                                        <Calendar className="w-5 h-5 text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">{sem.period}</h3>
                                        <p className="text-xs text-muted-foreground">{sem.dates}</p>
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {sem.events.map((ev) => (
                                        <li key={ev} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                                            {ev}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum Downloads */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Resources" title="Curriculum & Syllabus" description="Download the latest curriculum and syllabus documents for all programs." />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {programs.slice(0, 6).map((prog, i) => (
                            <motion.div
                                key={prog.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors group cursor-pointer"
                            >
                                <div className="w-10 h-10 rounded-lg bg-navy/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                                    <Download className="w-5 h-5 text-navy dark:text-gold" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-medium text-foreground truncate">{prog.name}</h4>
                                    <p className="text-xs text-muted-foreground">KTU Syllabus • PDF</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
