import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FiTrendingUp, FiUsers, FiDollarSign, FiAward } from 'react-icons/fi';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/shared/AnimatedSection';
import { SectionTitle } from '../components/ui/SectionTitle';
import { placementStats, testimonials } from '../data/siteData';

export default function Placements() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    const statCards = [
        { icon: FiUsers, label: 'Students Placed', value: placementStats.totalPlaced, suffix: '+', color: '#6C63FF' },
        { icon: FiTrendingUp, label: 'Placement Rate', value: 92, suffix: '%', color: '#00D4AA' },
        { icon: FiDollarSign, label: 'Highest Package', value: 42, suffix: ' LPA', color: '#FF6584' },
        { icon: FiAward, label: 'Recruiters', value: placementStats.recruiters, suffix: '+', color: '#FF9F43' },
    ];

    return (
        <main className="pt-24">
            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-accent/5 via-transparent to-secondary/5">
                <div className="max-w-7xl mx-auto text-center">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
                            <span className="gradient-text">Placements</span> & Careers
                        </h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                            92% placement rate with 120+ top recruiters. Your dream career starts at AJCE.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Stats */}
            <section ref={ref} className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {statCards.map((s, i) => (
                            <AnimatedSection key={s.label} delay={i * 0.1}>
                                <div className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-500">
                                    <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${s.color}15` }}>
                                        <s.icon className="w-7 h-7" style={{ color: s.color }} />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-heading font-bold mb-1" style={{ color: s.color }}>
                                        {inView ? <CountUp end={s.value} duration={2.5} /> : '0'}{s.suffix}
                                    </div>
                                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{s.label}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recruiter Logos - Infinite Scroll */}
            <section className="py-16 bg-light-surface-alt dark:bg-dark-surface-alt overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 mb-10">
                    <SectionTitle title="Our Recruiters" subtitle="Top companies that trust AJCE graduates" />
                </div>
                <div className="relative">
                    <div className="flex animate-marquee gap-12 items-center">
                        {[...placementStats.topRecruiters, ...placementStats.topRecruiters, ...placementStats.topRecruiters].map((r, i) => (
                            <div key={i} className="flex-shrink-0 flex flex-col items-center gap-2 px-6">
                                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-dark-surface flex items-center justify-center p-3 shadow-md">
                                    <img src={r.logo} alt={r.name} className="w-full h-full object-contain"
                                        onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = `<span class="text-sm font-heading font-bold text-light-text-secondary">${r.name}</span>`; }} />
                                </div>
                                <span className="text-xs font-medium text-light-text-secondary dark:text-dark-text-secondary">{r.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Placement Highlights */}
            <section className="section-padding">
                <div className="max-w-5xl mx-auto">
                    <SectionTitle title="Success Stories" subtitle="Our students are making their mark worldwide" />
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.filter(t => t.company).slice(0, 4).map((t) => (
                            <StaggerItem key={t.id}>
                                <div className="glass-card p-6 flex gap-4">
                                    <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-heading font-semibold">{t.name}</h4>
                                        <p className="text-sm text-primary font-medium">{t.company} · {t.department}</p>
                                        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-2 italic">&ldquo;{t.quote}&rdquo;</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-light-surface-alt dark:bg-dark-surface-alt">
                <AnimatedSection>
                    <div className="max-w-4xl mx-auto gradient-bg rounded-2xl p-12 text-center text-white">
                        <h2 className="text-3xl font-heading font-bold mb-4">Training & Placement Cell</h2>
                        <p className="opacity-90 mb-6">Our dedicated T&P cell provides resume building, mock interviews, aptitude training, and industry connections.</p>
                        <a href="mailto:placements@ajce.in" className="px-8 py-3 bg-white text-primary font-heading font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 inline-block">
                            Contact T&P Cell
                        </a>
                    </div>
                </AnimatedSection>
            </section>
        </main>
    );
}
