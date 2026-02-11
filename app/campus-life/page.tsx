"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Home, BookOpen, Dumbbell, Music, Image, Wifi, Utensils, Bus } from "lucide-react";

const facilities = [
    { icon: Home, title: "Hostels", desc: "Separate hostels for boys and girls with Wi-Fi, mess, and recreation facilities. Capacity for 1000+ students.", items: ["24/7 Security", "Mess with multi-cuisine", "Common rooms with TV", "Laundry service"] },
    { icon: BookOpen, title: "Library", desc: "Central library with 50,000+ books, digital resources, journals, and a quiet study area.", items: ["DELNET membership", "IEEE & Springer access", "E-library portal", "Reading room (200 seats)"] },
    { icon: Dumbbell, title: "Sports", desc: "Comprehensive sports infrastructure for indoor and outdoor activities.", items: ["Cricket ground", "Football field", "Basketball court", "Indoor badminton & TT"] },
    { icon: Music, title: "Clubs & Activities", desc: "30+ student clubs fostering creativity, leadership, and social engagement.", items: ["IEEE Student Chapter", "ACM Chapter", "NSS & NCC", "Arts & Music Club"] },
];

const galleryItems = [
    "Main Building", "Central Library", "Computer Lab", "Auditorium",
    "Sports Complex", "IEDC Hub", "Hostel Block", "Campus Garden",
];

export default function CampusLifePage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-4">Life at AJCE</motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-xl text-white mb-6">Campus Life</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-lg text-white/60 max-w-2xl mx-auto">
                        A vibrant 62-acre campus with world-class facilities, fostering academic excellence and holistic development.
                    </motion.p>
                </div>
            </section>

            {/* Facilities */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Facilities" title="Everything You Need" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {facilities.map((fac, i) => (
                            <motion.div key={fac.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="p-6 lg:p-8 bg-card rounded-2xl border border-border hover:border-gold/30 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                                        <fac.icon className="w-5 h-5 text-gold" />
                                    </div>
                                    <h3 className="font-semibold text-lg text-foreground">{fac.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">{fac.desc}</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {fac.items.map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Campus Highlights */}
            <section className="section-padding bg-muted/50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="At a Glance" title="Campus Highlights" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: Home, label: "62 Acres", sub: "Green Campus" },
                            { icon: Wifi, label: "100%", sub: "Wi-Fi Coverage" },
                            { icon: Utensils, label: "5 Canteens", sub: "& Food Courts" },
                            { icon: Bus, label: "20+ Bus", sub: "Routes Daily" },
                        ].map((h, i) => (
                            <motion.div key={h.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }} className="p-6 bg-card rounded-2xl border border-border text-center">
                                <h.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                                <div className="text-xl font-bold text-foreground">{h.label}</div>
                                <p className="text-xs text-muted-foreground mt-1">{h.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="gallery" className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Gallery" title="Campus in Pictures" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {galleryItems.map((item, i) => (
                            <motion.div key={item} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }} className="aspect-square rounded-2xl bg-gradient-to-br from-navy/5 to-gold/5 dark:from-white/5 dark:to-gold/5 border border-border flex items-center justify-center group cursor-pointer hover:border-gold/30 transition-colors overflow-hidden">
                                <div className="text-center">
                                    <Image className="w-8 h-8 text-muted-foreground/30 group-hover:text-gold/50 mx-auto mb-2 transition-colors" />
                                    <span className="text-xs text-muted-foreground">{item}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
