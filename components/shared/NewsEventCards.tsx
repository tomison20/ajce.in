"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import { NewsArticle, Event } from "@/types";

interface NewsCardProps {
    article: NewsArticle;
    index?: number;
}

export function NewsCard({ article, index = 0 }: NewsCardProps) {
    const categoryColors: Record<string, string> = {
        academic: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
        achievement: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
        event: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
        announcement: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
        general: "bg-gray-50 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300",
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Link
                href={`/news-events/${article.slug}`}
                className="block group"
            >
                <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300">
                    {/* Image placeholder */}
                    <div className="aspect-[16/9] bg-gradient-to-br from-navy/10 to-navy/5 dark:from-white/5 dark:to-white/2 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
                            <span className="text-5xl">📰</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <span className={cn("px-2.5 py-0.5 text-xs font-medium rounded-full", categoryColors[article.category])}>
                                {article.category}
                            </span>
                            <span className="text-xs text-muted-foreground">
                                {formatDate(article.date)}
                            </span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-navy dark:group-hover:text-gold transition-colors line-clamp-2">
                            {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                            {article.excerpt}
                        </p>
                        <span className="flex items-center gap-1 text-sm text-navy dark:text-gold font-medium">
                            Read more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}

interface EventCardProps {
    event: Event;
    index?: number;
}

export function EventCard({ event, index = 0 }: EventCardProps) {
    const date = new Date(event.date);
    const month = date.toLocaleString("en-IN", { month: "short" }).toUpperCase();
    const day = date.getDate();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Link
                href={`/news-events/${event.slug}`}
                className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
            >
                {/* Date Badge */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-navy dark:bg-gold/10 flex flex-col items-center justify-center text-white dark:text-gold">
                    <span className="text-xs font-bold uppercase">{month}</span>
                    <span className="text-xl font-bold leading-tight">{day}</span>
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground group-hover:text-navy dark:group-hover:text-gold transition-colors text-sm line-clamp-1">
                        {event.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {event.description}
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {event.time}
                        </span>
                        <span>📍 {event.venue}</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
