import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCamera, FiAward, FiCalendar, FiHome } from 'react-icons/fi';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/shared/AnimatedSection';
import { SectionTitle } from '../components/ui/SectionTitle';
import { galleryImages, events } from '../data/siteData';

const categories = ['All', 'Campus', 'Events', 'Infrastructure'];
const milestones = [
    { year: '2000', title: 'College Founded', desc: 'Amal Jyothi College of Engineering established in Kanjirappally' },
    { year: '2005', title: 'NAAC Accreditation', desc: 'Received first NAAC accreditation with A grade' },
    { year: '2010', title: 'Research Excellence', desc: 'Established advanced research centers across departments' },
    { year: '2015', title: 'Placement Milestone', desc: 'Crossed 90% placement rate for the first time' },
    { year: '2020', title: 'Digital Transformation', desc: 'Launched online learning platforms and smart classrooms' },
    { year: '2024', title: 'Innovation Hub', desc: 'Opened state-of-the-art incubation center and AI lab' },
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [lightboxImage, setLightboxImage] = useState(null);

    const filteredImages = activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <main className="pt-24">
            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-secondary/5 via-transparent to-primary/5">
                <div className="max-w-7xl mx-auto text-center">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
                            College <span className="gradient-text">Portfolio</span>
                        </h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                            Explore the vibrant campus, cutting-edge infrastructure, and memorable events that define AJCE.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Gallery */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title="Campus Gallery" subtitle="A visual journey through our beautiful campus" />

                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {categories.map(cat => (
                            <button key={cat} onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-light-surface dark:bg-dark-surface hover:bg-primary/10'}`}>
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Masonry Grid */}
                    <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                        <AnimatePresence>
                            {filteredImages.map((img, i) => (
                                <motion.div key={img.title + i} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }}
                                    className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl"
                                    onClick={() => setLightboxImage(img)}>
                                    <img src={img.src} alt={img.title} className="w-full rounded-2xl transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-6">
                                        <div>
                                            <h4 className="text-white font-heading font-semibold">{img.title}</h4>
                                            <span className="text-white/70 text-sm">{img.category}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
                        onClick={() => setLightboxImage(null)}>
                        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
                            className="max-w-4xl w-full">
                            <button onClick={() => setLightboxImage(null)} className="absolute top-4 right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20">
                                <FiX className="w-6 h-6" />
                            </button>
                            <img src={lightboxImage.src} alt={lightboxImage.title} className="w-full rounded-2xl shadow-2xl" />
                            <p className="text-white text-center mt-4 font-heading">{lightboxImage.title}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Achievement Timeline */}
            <section className="section-padding bg-light-surface-alt dark:bg-dark-surface-alt">
                <div className="max-w-4xl mx-auto">
                    <SectionTitle title="Our Journey" subtitle="Milestones that define AJCE's legacy" />
                    <div className="relative">
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
                        {milestones.map((m, i) => (
                            <AnimatedSection key={m.year} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                                <div className={`flex items-center gap-4 mb-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                        <div className="glass-card p-6 inline-block">
                                            <span className="text-primary font-heading font-bold text-lg">{m.year}</span>
                                            <h4 className="font-heading font-semibold mt-1">{m.title}</h4>
                                            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">{m.desc}</p>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 flex-shrink-0 z-10"></div>
                                    <div className="flex-1"></div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title="Events & Fests" subtitle="The vibrant extracurricular life at AJCE" />
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {events.map((event) => (
                            <StaggerItem key={event.id}>
                                <div className="glass-card overflow-hidden group">
                                    <div className="relative h-56 overflow-hidden">
                                        <img src={event.image} alt={event.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-primary text-white text-xs font-medium">{event.type}</div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">
                                            <FiCalendar className="w-4 h-4" /> {event.date}
                                        </div>
                                        <h3 className="font-heading font-semibold text-xl mb-2">{event.name}</h3>
                                        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{event.description}</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </main>
    );
}
