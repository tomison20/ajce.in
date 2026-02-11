"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
    Monitor,
    Radio,
    Zap,
    Cog,
    Building2,
    Brain,
    Code2,
    FlaskConical,
    GraduationCap,
    Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Program } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Monitor, Radio, Zap, Cog, Building2, Brain, Code2, FlaskConical, GraduationCap, Cpu,
};

interface ProgramCardProps {
    program: Program;
    index?: number;
}

export function ProgramCard({ program, index = 0 }: ProgramCardProps) {
    const Icon = iconMap[program.icon] || GraduationCap;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Link
                href={`/departments/${program.department.toLowerCase()}`}
                className="block group"
            >
                <div className="relative p-6 bg-card rounded-2xl border border-border hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-navy/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                            <Icon className="w-5 h-5 text-navy dark:text-gold" />
                        </div>
                        <span className={cn(
                            "px-3 py-1 text-xs font-medium rounded-full",
                            program.level === "undergraduate"
                                ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                : program.level === "postgraduate"
                                    ? "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                                    : "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                        )}>
                            {program.level === "undergraduate" ? "B.Tech" : program.level === "postgraduate" ? "PG" : "Ph.D."}
                        </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-navy dark:group-hover:text-gold transition-colors">
                        {program.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {program.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{program.duration}</span>
                        <span className="flex items-center gap-1 text-navy dark:text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            Learn more <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
