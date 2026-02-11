"use client";

import { useScrollAnimation, useAnimatedCounter } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import {
    GraduationCap,
    Building2,
    TrendingUp,
    MapPin,
    Users,
    Award,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    GraduationCap,
    Building2,
    TrendingUp,
    MapPin,
    Users,
    Award,
};

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    icon: string;
    className?: string;
}

export function AnimatedCounter({
    value,
    suffix = "",
    prefix = "",
    label,
    icon,
    className,
}: AnimatedCounterProps) {
    const { ref, isInView } = useScrollAnimation();
    const count = useAnimatedCounter(value, 2000, isInView);
    const Icon = iconMap[icon] || Award;

    return (
        <div ref={ref} className={cn("text-center group", className)}>
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gold/10 dark:bg-gold/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Icon className="w-6 h-6 text-gold" />
            </div>
            <div className="heading-lg text-foreground tabular-nums">
                {prefix}
                {count}
                {suffix}
            </div>
            <p className="text-sm text-muted-foreground mt-1 font-medium">{label}</p>
        </div>
    );
}
