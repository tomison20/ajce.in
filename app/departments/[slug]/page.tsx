"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { use } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { departments } from "@/data/departments";
import {
    Users, FlaskConical, Trophy, BookOpen, Target, Eye, Mail, ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function DepartmentDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const dept = departments.find((d) => d.slug === slug);
    if (!dept) return notFound();

    return (
        <>
            {/* Hero */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
                    <Link href="/departments" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> All Departments
                    </Link>
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-4">Department of</motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-xl text-white mb-6">{dept.name}</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-lg text-white/60 max-w-2xl">{dept.description}</motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-6 mt-8 text-sm text-white/60">
                        <span>Est. {dept.established}</span>
                        <span>•</span>
                        <span>{dept.studentCount}+ Students</span>
                        <span>•</span>
                        <span>{dept.labs.length} Laboratories</span>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="p-8 bg-card rounded-2xl border border-border">
                            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                                <Eye className="w-5 h-5 text-gold" />
                            </div>
                            <h3 className="heading-sm mb-3">Vision</h3>
                            <p className="text-muted-foreground text-sm">{dept.vision}</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="p-8 bg-card rounded-2xl border border-border">
                            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                                <Target className="w-5 h-5 text-gold" />
                            </div>
                            <h3 className="heading-sm mb-3">Mission</h3>
                            <ul className="space-y-2">
                                {dept.mission.map((m) => (
                                    <li key={m} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                                        {m}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* HOD */}
            <section className="section-padding bg-muted/50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Head of Department" title={dept.hod.name} />
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold/20 to-navy/10 flex items-center justify-center">
                            <Users className="w-10 h-10 text-gold/60" />
                        </div>
                        <p className="text-gold font-medium">{dept.hod.designation}</p>
                        <p className="text-sm text-muted-foreground mt-1">{dept.hod.qualification}</p>
                        <div className="flex flex-wrap justify-center gap-2 mt-3">
                            {dept.hod.specialization.map((s) => (
                                <span key={s} className="px-3 py-1 text-xs bg-gold/10 text-gold rounded-full">{s}</span>
                            ))}
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                            <Mail className="w-4 h-4" />
                            {dept.hod.email}
                        </div>
                        {dept.hod.publications && (
                            <p className="text-xs text-muted-foreground mt-2">{dept.hod.publications} Publications • {dept.hod.experience} Experience</p>
                        )}
                    </div>
                </div>
            </section>

            {/* Labs */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Infrastructure" title="Laboratories & Facilities" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {dept.labs.map((lab, i) => (
                            <motion.div
                                key={lab.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-card rounded-2xl border border-border hover:border-gold/30 transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                                        <FlaskConical className="w-5 h-5 text-gold" />
                                    </div>
                                    <h3 className="font-semibold text-foreground">{lab.name}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">{lab.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {lab.equipment.map((eq) => (
                                        <span key={eq} className="px-2.5 py-1 text-xs bg-muted rounded-md text-muted-foreground">{eq}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="section-padding bg-muted/50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Highlights" title="Achievements" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        {dept.achievements.map((ach, i) => (
                            <motion.div
                                key={ach}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
                            >
                                <Trophy className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-foreground">{ach}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
