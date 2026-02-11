"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
    Menu,
    X,
    Sun,
    Moon,
    ChevronDown,
    GraduationCap,
    ArrowRight,
} from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileOpen(false);
        setActiveDropdown(null);
    }, [pathname]);

    return (
        <>
            {/* Top Bar */}
            <div className="hidden lg:block bg-navy text-white/80 text-sm">
                <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <span>📞 +91 4828 246605</span>
                        <span>✉️ info@ajce.in</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/auth/student" className="hover:text-gold transition-colors">
                            Student Portal
                        </Link>
                        <span className="text-white/30">|</span>
                        <Link href="/auth/faculty" className="hover:text-gold transition-colors">
                            Faculty Login
                        </Link>
                        <span className="text-white/30">|</span>
                        <Link href="/auth/admin" className="hover:text-gold transition-colors">
                            Admin
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <header
                className={cn(
                    "sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
                    isScrolled
                        ? "bg-white/90 dark:bg-navy/90 backdrop-blur-md shadow-sm border-gray-200/50 dark:border-white/10 py-2"
                        : "bg-transparent py-4 text-white"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20 lg:h-24">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden flex items-center justify-center">
                                <Image 
                                    src="/images/official-logo.png" 
                                    alt="AJCE Logo" 
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="font-serif font-bold text-lg lg:text-xl leading-tight text-foreground">
                                    AJCE
                                </h1>
                                <p className="text-[10px] lg:text-xs text-muted-foreground leading-tight">
                                    Amal Jyothi College of Engineering
                                </p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {mainNavigation.map((item) => (
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() =>
                                        item.children && setActiveDropdown(item.label)
                                    }
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                                            pathname === item.href
                                                ? "text-navy dark:text-gold bg-muted"
                                                : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                                        )}
                                    >
                                        {item.label}
                                        {item.children && (
                                            <ChevronDown
                                                className={cn(
                                                    "w-3.5 h-3.5 transition-transform",
                                                    activeDropdown === item.label && "rotate-180"
                                                )}
                                            />
                                        )}
                                    </Link>

                                    {/* Dropdown Mega Menu */}
                                    <AnimatePresence>
                                        {item.children && activeDropdown === item.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-1 w-80 bg-card border border-border rounded-xl shadow-xl shadow-black/10 p-2 z-50"
                                            >
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                                                    >
                                                        <div className="flex-1">
                                                            <span className="text-sm font-medium text-foreground group-hover:text-navy dark:group-hover:text-gold transition-colors">
                                                                {child.label}
                                                            </span>
                                                            {child.description && (
                                                                <p className="text-xs text-muted-foreground mt-0.5">
                                                                    {child.description}
                                                                </p>
                                                            )}
                                                        </div>
                                                        <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </nav>

                        {/* Right Actions */}
                        <div className="flex items-center gap-2">
                            {/* Theme Toggle */}
                            {mounted && (
                                <button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                                    aria-label="Toggle theme"
                                >
                                    {theme === "dark" ? (
                                        <Sun className="w-5 h-5 text-gold" />
                                    ) : (
                                        <Moon className="w-5 h-5 text-navy" />
                                    )}
                                </button>
                            )}

                            {/* CTA */}
                            <Link
                                href="/admissions#apply"
                                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-navy dark:bg-gold text-white dark:text-navy text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Apply Now
                            </Link>

                            {/* Mobile Toggle */}
                            <button
                                onClick={() => setIsMobileOpen(!isMobileOpen)}
                                className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden border-t border-border bg-card overflow-hidden"
                        >
                            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                                {mainNavigation.map((item) => (
                                    <div key={item.label}>
                                        <div className="flex items-center justify-between">
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "flex-1 py-3 px-3 text-sm font-medium rounded-lg transition-colors",
                                                    pathname === item.href
                                                        ? "text-navy dark:text-gold bg-muted"
                                                        : "text-foreground/80 hover:bg-muted"
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                            {item.children && (
                                                <button
                                                    onClick={() =>
                                                        setActiveDropdown(
                                                            activeDropdown === item.label
                                                                ? null
                                                                : item.label
                                                        )
                                                    }
                                                    className="p-3"
                                                    aria-label={`Expand ${item.label}`}
                                                >
                                                    <ChevronDown
                                                        className={cn(
                                                            "w-4 h-4 transition-transform",
                                                            activeDropdown === item.label && "rotate-180"
                                                        )}
                                                    />
                                                </button>
                                            )}
                                        </div>
                                        <AnimatePresence>
                                            {item.children && activeDropdown === item.label && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="pl-4 space-y-1 overflow-hidden"
                                                >
                                                    {item.children.map((child) => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                                <div className="pt-4 border-t border-border">
                                    <Link
                                        href="/admissions#apply"
                                        className="flex items-center justify-center gap-2 w-full py-3 bg-navy dark:bg-gold text-white dark:text-navy text-sm font-semibold rounded-lg"
                                    >
                                        Apply Now
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center gap-4 pt-3 text-sm text-muted-foreground">
                                    <Link href="/auth/student" className="hover:text-foreground">Student Portal</Link>
                                    <span>•</span>
                                    <Link href="/auth/faculty" className="hover:text-foreground">Faculty</Link>
                                    <span>•</span>
                                    <Link href="/auth/admin" className="hover:text-foreground">Admin</Link>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}
