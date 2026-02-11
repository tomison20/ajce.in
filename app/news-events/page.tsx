"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { NewsCard, EventCard } from "@/components/shared/NewsEventCards";
import { newsArticles, events } from "@/data/news-events";

const categories = ["all", "academic", "achievement", "event", "announcement"];

export default function NewsEventsPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredNews =
        activeCategory === "all"
            ? newsArticles
            : newsArticles.filter((n) => n.category === activeCategory);

    return (
        <>
            {/* Hero */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-4">Stay Updated</motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-xl text-white mb-6">News & Events</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-lg text-white/60 max-w-2xl mx-auto">
                        Latest news, achievements, and upcoming events from the AJCE campus.
                    </motion.p>
                </div>
            </section>

            {/* News */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Latest News" title="Announcements & Updates" />
                    {/* Category Filter */}
                    <div className="flex justify-center mb-10">
                        <div className="inline-flex flex-wrap items-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all capitalize ${activeCategory === cat
                                            ? "bg-navy text-white dark:bg-gold dark:text-navy"
                                            : "bg-muted text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredNews.map((article, i) => (
                            <NewsCard key={article.id} article={article} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Events */}
            <section className="section-padding bg-muted/50">
                <div className="max-w-4xl mx-auto">
                    <SectionHeader label="Calendar" title="Upcoming Events" />
                    <div className="space-y-4">
                        {events.map((event, i) => (
                            <EventCard key={event.id} event={event} index={i} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
