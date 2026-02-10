import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiArrowRight, FiUsers, FiCalendar, FiBookOpen } from 'react-icons/fi';
import Tilt from 'react-parallax-tilt';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/shared/AnimatedSection';
import { SectionTitle } from '../components/ui/SectionTitle';
import { departments } from '../data/departments';

export default function Courses() {
    const [search, setSearch] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');

    const filtered = departments.filter(d =>
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.shortName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="pt-24">
            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:to-secondary/5">
                <div className="max-w-7xl mx-auto text-center">
                    <AnimatedSection>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                            <FiBookOpen className="w-4 h-4" />
                            7 UG Programs · APJ Abdul Kalam Technological University
                        </span>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
                            Our <span className="gradient-text">Departments</span>
                        </h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto mb-10">
                            Discover our world-class engineering programs designed to prepare you for the challenges of tomorrow.
                        </p>
                    </AnimatedSection>

                    {/* Search */}
                    <AnimatedSection delay={0.2}>
                        <div className="relative max-w-md mx-auto">
                            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />
                            <input
                                type="text"
                                placeholder="Search departments..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-surface-alt dark:border-dark-surface-alt focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm"
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Department Cards */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filtered.map((dept) => (
                                <StaggerItem key={dept.id}>
                                    <Tilt
                                        tiltMaxAngleX={8}
                                        tiltMaxAngleY={8}
                                        glareEnable={true}
                                        glareMaxOpacity={0.15}
                                        glareColor="#6C63FF"
                                        glarePosition="all"
                                        glareBorderRadius="1rem"
                                        scale={1.02}
                                    >
                                        <Link to={`/departments/${dept.slug}`}>
                                            <div className="glass-card p-8 group cursor-pointer h-full relative overflow-hidden">
                                                {/* Accent Bar */}
                                                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ backgroundColor: dept.color }}></div>

                                                {/* Icon */}
                                                <div
                                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                                                    style={{ backgroundColor: `${dept.color}15`, border: `1px solid ${dept.color}30` }}
                                                >
                                                    <span className="text-2xl font-heading font-bold" style={{ color: dept.color }}>
                                                        {dept.shortName}
                                                    </span>
                                                </div>

                                                <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                                                    {dept.name}
                                                </h3>

                                                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed mb-6">
                                                    {dept.description}
                                                </p>

                                                {/* Info Chips */}
                                                <div className="flex flex-wrap gap-3 mb-6">
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-light-surface-alt dark:bg-dark-surface-alt text-xs font-medium">
                                                        <FiUsers className="w-3.5 h-3.5 text-primary" />
                                                        {dept.intake} Seats
                                                    </span>
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-light-surface-alt dark:bg-dark-surface-alt text-xs font-medium">
                                                        <FiCalendar className="w-3.5 h-3.5 text-secondary" />
                                                        Est. {dept.established}
                                                    </span>
                                                </div>

                                                {/* CTA */}
                                                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                                                    Explore Department <FiArrowRight />
                                                </div>
                                            </div>
                                        </Link>
                                    </Tilt>
                                </StaggerItem>
                            ))}
                        </AnimatePresence>
                    </StaggerContainer>

                    {filtered.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg">No departments found matching &ldquo;{search}&rdquo;</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
