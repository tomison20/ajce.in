import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiArrowRight, FiTag } from 'react-icons/fi';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/shared/AnimatedSection';
import { SectionTitle } from '../components/ui/SectionTitle';
import { news } from '../data/siteData';

const categories = ['All', 'Achievements', 'Academic', 'Events', 'Sports', 'Placements'];

export default function News() {
    const [activeCategory, setActiveCategory] = useState('All');
    const featured = news.find(n => n.featured);
    const filtered = activeCategory === 'All' ? news : news.filter(n => n.category === activeCategory);

    const categoryColors = {
        Achievements: '#FF6584', Academic: '#6C63FF', Events: '#00D4AA', Sports: '#54A0FF', Placements: '#FF9F43',
    };

    return (
        <main className="pt-24">
            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
                <div className="max-w-7xl mx-auto text-center">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
                            News & <span className="gradient-text">Announcements</span>
                        </h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                            Stay updated with the latest happenings, achievements, and announcements from AJCE.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Featured Article */}
            {featured && (
                <section className="section-padding pb-10">
                    <div className="max-w-7xl mx-auto">
                        <AnimatedSection>
                            <div className="glass-card overflow-hidden group">
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="relative h-64 lg:h-auto overflow-hidden">
                                        <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-lg text-white text-xs font-medium" style={{ backgroundColor: categoryColors[featured.category] || '#6C63FF' }}>
                                                {featured.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                                        <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2">Featured</span>
                                        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">{featured.title}</h2>
                                        <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">{featured.excerpt}</p>
                                        <div className="flex items-center gap-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                                            <FiCalendar className="w-4 h-4" /> {featured.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            )}

            {/* Category Filters */}
            <section className="px-4">
                <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-light-surface dark:bg-dark-surface hover:bg-primary/10'}`}>
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* News Grid */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filtered.map((article) => (
                                <StaggerItem key={article.id}>
                                    <motion.div layout className="glass-card overflow-hidden group h-full flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                                            <div className="absolute top-3 right-3">
                                                <span className="px-2 py-1 rounded-lg text-white text-xs font-medium" style={{ backgroundColor: categoryColors[article.category] || '#6C63FF' }}>
                                                    {article.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center gap-2 text-xs text-light-text-secondary dark:text-dark-text-secondary mb-3">
                                                <FiCalendar className="w-3.5 h-3.5" /> {article.date}
                                            </div>
                                            <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                                            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary flex-1">{article.excerpt}</p>
                                            <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium">
                                                Read More <FiArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </AnimatePresence>
                    </StaggerContainer>
                </div>
            </section>
        </main>
    );
}
