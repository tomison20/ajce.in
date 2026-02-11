"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { placementStats, topRecruiters, alumniStories } from "@/data/placements";
import { TrendingUp, Building, Users, Quote, Briefcase, ArrowUpRight } from "lucide-react";

export default function PlacementsPage() {
    const latest = placementStats[0];

    return (
        <>
            {/* Hero */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-4">Career Outcomes</motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-xl text-white mb-6">Placements & Careers</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-lg text-white/60 max-w-2xl mx-auto">
                        95% placement rate. 85+ companies. Industry-ready graduates across all disciplines.
                    </motion.p>
                </div>
            </section>

            {/* Stats */}
            <section className="relative -mt-16 z-10 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-card rounded-2xl shadow-xl shadow-black/5 border border-border p-8 lg:p-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <AnimatedCounter value={latest.studentsPlaced} label="Students Placed" icon="Users" />
                            <AnimatedCounter value={latest.companiesVisited} label="Companies Visited" icon="Building2" />
                            <AnimatedCounter value={95} suffix="%" label="Placement Rate" icon="TrendingUp" />
                            <AnimatedCounter value={18} suffix=" LPA" label="Highest Package" icon="Award" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Placement Trends */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <SectionHeader label="Year-wise" title="Placement Statistics" />
                    <div className="overflow-x-auto rounded-2xl border border-border">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-navy text-white">
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Year</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Placed</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Companies</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Highest</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Average</th>
                                </tr>
                            </thead>
                            <tbody>
                                {placementStats.map((row, i) => (
                                    <tr key={row.year} className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                                        <td className="px-6 py-4 text-sm font-semibold text-foreground">{row.year}</td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground">{row.studentsPlaced}/{row.totalStudents}</td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground">{row.companiesVisited}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gold">{row.highestPackage}</td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground">{row.averagePackage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Top Recruiters */}
            <section className="section-padding bg-muted/50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Our Partners" title="Top Recruiters" />
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                        {topRecruiters.map((r, i) => (
                            <motion.div key={r.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.03 }} viewport={{ once: true }} className="p-4 bg-card rounded-xl border border-border text-center hover:border-gold/30 transition-colors group">
                                <Briefcase className="w-8 h-8 text-muted-foreground/30 group-hover:text-gold/40 mx-auto mb-2 transition-colors" />
                                <span className="text-xs font-medium text-foreground">{r.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alumni Stories */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Success Stories" title="Our Alumni" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {alumniStories.map((story, i) => (
                            <motion.div key={story.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="p-6 bg-card rounded-2xl border border-border">
                                <Quote className="w-8 h-8 text-gold/30 mb-4" />
                                <p className="text-sm text-muted-foreground italic mb-6">&ldquo;{story.testimonial}&rdquo;</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/20 to-navy/10 flex items-center justify-center">
                                        <Users className="w-5 h-5 text-gold/60" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground text-sm">{story.name}</h4>
                                        <p className="text-xs text-muted-foreground">{story.designation}, {story.company} • {story.department} '{story.batch.slice(2)}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
