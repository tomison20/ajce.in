"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Lightbulb,
  Users,
  Building,
  BookOpen,
  Trophy,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { ProgramCard } from "@/components/shared/ProgramCard";
import { NewsCard, EventCard } from "@/components/shared/NewsEventCards";
import { programs } from "@/data/programs";
import { newsArticles, events } from "@/data/news-events";
import { homeStatistics } from "@/data/placements";

// ============================================================
// HOME PAGE
// ============================================================

export default function HomePage() {
  const featuredPrograms = programs.filter((p) => p.level === "undergraduate").slice(0, 6);
  const featuredNews = newsArticles.filter((n) => n.featured).slice(0, 3);
  const upcomingEvents = events.slice(0, 4);

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 select-none">
          <img
            src="/images/official-campus-1.jpg"
            alt="Amal Jyothi College of Engineering Campus"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                Admissions Open 2026-27
              </div>

              <h1 className="heading-xl text-white mb-6 leading-tight drop-shadow-md">
                Empowering the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold font-serif italic pr-2">
                  Next Generation
                </span>
                of Engineers
              </h1>

              <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light max-w-2xl text-balance">
                Kerala's first new-generation engineering college with valid NBA accreditation for prime departments.
                Experience world-class infrastructure and academic excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/admissions"
                  className="px-8 py-4 bg-gold hover:bg-white text-navy font-semibold text-base rounded-md shadow-lg shadow-gold/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Apply for Admission
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-semibold text-base rounded-md transition-all duration-300"
                >
                  Explore Campus
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* ==================== STATISTICS SECTION ==================== */}
      <section className="relative -mt-16 z-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl shadow-black/5 border border-border p-8 lg:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {homeStatistics.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  icon={stat.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURED PROGRAMS ==================== */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Academics"
            title="Explore Our Programs"
            description="AJCE offers a diverse range of undergraduate, postgraduate, and doctoral programs, each designed to meet global industry standards."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPrograms.map((program, i) => (
              <ProgramCard key={program.id} program={program} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
            >
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== WHY AJCE ==================== */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Why Choose Us"
            title="The AJCE Advantage"
            description="A unique blend of academic rigor, industry exposure, and holistic development."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Academic Excellence",
                desc: "NAAC 'A' grade & NBA accredited programs with a curriculum aligned to industry needs.",
              },
              {
                icon: Trophy,
                title: "Outstanding Placements",
                desc: "95% placement rate with top recruiters like TCS, Infosys, Wipro, and Cognizant visiting campus.",
              },
              {
                icon: Lightbulb,
                title: "Innovation & Research",
                desc: "State-of-the-art IEDC, research centers, and funded projects driving innovation.",
              },
              {
                icon: Users,
                title: "Vibrant Campus Life",
                desc: "62-acre green campus with hostels, sports facilities, clubs, and cultural activities.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-card rounded-2xl border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== NEWS & EVENTS ==================== */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* News */}
            <div className="lg:col-span-2">
              <SectionHeader
                label="Latest"
                title="News & Announcements"
                align="left"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredNews.slice(0, 2).map((article, i) => (
                  <NewsCard key={article.id} article={article} index={i} />
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/news-events"
                  className="inline-flex items-center gap-2 text-sm font-medium text-navy dark:text-gold hover:underline"
                >
                  View all news <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Events */}
            <div>
              <SectionHeader
                label="Upcoming"
                title="Events"
                align="left"
              />
              <div className="space-y-4">
                {upcomingEvents.map((event, i) => (
                  <EventCard key={event.id} event={event} index={i} />
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/news-events"
                  className="inline-flex items-center gap-2 text-sm font-medium text-navy dark:text-gold hover:underline"
                >
                  View all events <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light to-navy" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 50%, rgba(201,168,76,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(139,26,43,0.3) 0%, transparent 50%)`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-white mb-4">
              Begin Your Journey at AJCE
            </h2>
            <p className="body-md text-white/60 mb-8 max-w-2xl mx-auto">
              Join a community of 3000+ students across 8 departments.
              Applications are now open for the 2026-27 academic year.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/admissions#apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-all shadow-lg shadow-gold/25"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Request Information
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
