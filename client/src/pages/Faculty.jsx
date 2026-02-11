import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMail, FiX } from 'react-icons/fi';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/shared/AnimatedSection';
import { SectionTitle } from '../components/ui/SectionTitle';
import { departments } from '../data/departments';

export default function Faculty() {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [selectedFaculty, setSelectedFaculty] = useState(null);

    const allFaculty = departments.flatMap(dept =>
        dept.faculty.map(f => ({ ...f, department: dept.shortName, deptColor: dept.color, deptId: dept.id }))
    );

    const filtered = allFaculty.filter(f => {
        const matchesDept = filter === 'all' || f.deptId === filter;
        const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase());
        return matchesDept && matchesSearch;
    });

    return (
        <main className="pt-24">
            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
                <div className="max-w-7xl mx-auto text-center">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
                            Our <span className="gradient-text">Faculty</span>
                        </h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto mb-10">
                            Meet the brilliant minds shaping the next generation of engineers at AJCE.
                        </p>
                    </AnimatedSection>

                    {/* Filters */}
                    <AnimatedSection delay={0.2}>
                        <div className="flex flex-wrap justify-center gap-2 mb-8">
                            <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${filter === 'all' ? 'bg-primary text-white' : 'bg-light-surface dark:bg-dark-surface hover:bg-primary/10'}`}>
                                All Departments
                            </button>
                            {departments.map(d => (
                                <button key={d.id} onClick={() => setFilter(d.id)} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${filter === d.id ? 'text-white' : 'bg-light-surface dark:bg-dark-surface hover:bg-primary/10'}`}
                                    style={filter === d.id ? { backgroundColor: d.color } : {}}>
                                    {d.shortName}
                                </button>
                            ))}
                        </div>
                        <div className="relative max-w-md mx-auto">
                            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-light-text-secondary" />
                            <input type="text" placeholder="Search faculty..." value={search} onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-surface-alt dark:border-dark-surface-alt focus:border-primary outline-none transition-all text-sm" />
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Faculty Grid */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filtered.map((f, i) => (
                            <StaggerItem key={`${f.name}-${f.deptId}`}>
                                <motion.div whileHover={{ y: -5 }} onClick={() => setSelectedFaculty(f)}
                                    className="glass-card p-6 text-center cursor-pointer group">
                                    <img src={f.image} alt={f.name} className="w-28 h-28 rounded-full mx-auto mb-4 object-cover ring-2 ring-transparent group-hover:ring-primary/50 transition-all duration-300" />
                                    <h3 className="font-heading font-semibold text-lg mb-1">{f.name}</h3>
                                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">{f.designation}</p>
                                    <span className="inline-block px-3 py-1 rounded-lg text-xs font-medium text-white" style={{ backgroundColor: f.deptColor }}>
                                        {f.department}
                                    </span>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                    {filtered.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg">No faculty found.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Faculty Modal */}
            <AnimatePresence>
                {selectedFaculty && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedFaculty(null)}>
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-light-surface dark:bg-dark-surface rounded-2xl p-8 max-w-md w-full shadow-2xl" onClick={e => e.stopPropagation()}>
                            <div className="flex justify-end mb-4">
                                <button onClick={() => setSelectedFaculty(null)} className="p-2 rounded-lg hover:bg-light-surface-alt dark:hover:bg-dark-surface-alt">
                                    <FiX className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="text-center">
                                <img src={selectedFaculty.image} alt={selectedFaculty.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-primary/20" />
                                <h3 className="text-2xl font-heading font-bold mb-1">{selectedFaculty.name}</h3>
                                <p className="text-primary font-medium mb-2">{selectedFaculty.designation}</p>
                                <span className="inline-block px-3 py-1 rounded-lg text-xs font-medium text-white mb-4" style={{ backgroundColor: selectedFaculty.deptColor }}>
                                    {selectedFaculty.department}
                                </span>
                                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-4">
                                    Dedicated faculty member at AJCE, contributing to excellence in education and research.
                                </p>
                                <a href={`mailto:faculty@ajce.in`} className="inline-flex items-center gap-2 mt-4 text-primary hover:underline text-sm">
                                    <FiMail /> Contact Faculty
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
