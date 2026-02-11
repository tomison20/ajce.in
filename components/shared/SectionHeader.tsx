"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    label?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeader({
    label,
    title,
    description,
    align = "center",
    className,
}: SectionHeaderProps) {
    const { ref, isInView } = useScrollAnimation();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                "mb-12 lg:mb-16",
                align === "center" && "text-center",
                className
            )}
        >
            {label && (
                <span className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-3">
                    {label}
                </span>
            )}
            <h2 className="heading-lg text-foreground">{title}</h2>
            <div
                className={cn(
                    "gold-accent mt-4",
                    align === "center" && "mx-auto"
                )}
            />
            {description && (
                <p className="body-md text-muted-foreground mt-4 max-w-2xl mx-auto">
                    {description}
                </p>
            )}
        </motion.div>
    );
}
