"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { departments } from "@/data/departments";
import { ArrowRight, Monitor, Radio, Zap, Cog, Building2, Brain, Code2, FlaskConical } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Monitor, Radio, Zap, Cog, Building2, Brain, Code2, FlaskConical,
};

export default function DepartmentsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-4">8 Departments</motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-xl text-white mb-6">Our Departments</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-lg text-white/60 max-w-2xl mx-auto">
                        Explore our diverse departments, each with dedicated faculty, modern labs, and a tradition of excellence.
                    </motion.p>
                </div>
            </section>

            {/* Departments Grid */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {departments.map((dept, i) => {
                            const Icon = iconMap[dept.icon] || Monitor;
                            return (
                                <motion.div
                                    key={dept.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    viewport={{ once: true }}
                                >
                                    <Link href={`/departments/${dept.slug}`} className="block group">
                                        <div className="p-6 lg:p-8 bg-card rounded-2xl border border-border hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300">
                                            <div className="flex items-start gap-5">
                                                <div className="w-14 h-14 rounded-2xl bg-navy/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors flex-shrink-0">
                                                    <Icon className="w-6 h-6 text-navy dark:text-gold" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h3 className="font-semibold text-lg text-foreground group-hover:text-navy dark:group-hover:text-gold transition-colors">
                                                            {dept.name}
                                                        </h3>
                                                        <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                                    </div>
                                                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{dept.description}</p>
                                                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                                                        <span>Est. {dept.established}</span>
                                                        <span>•</span>
                                                        <span>{dept.studentCount}+ Students</span>
                                                        <span>•</span>
                                                        <span>{dept.labs.length} Labs</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
