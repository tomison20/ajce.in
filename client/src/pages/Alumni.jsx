import { FiMapPin, FiLinkedin, FiExternalLink } from 'react-icons/fi';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/shared/AnimatedSection';
import { SectionTitle } from '../components/ui/SectionTitle';
import { alumni } from '../data/siteData';

export default function Alumni() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    const alumniStats = [
        { label: 'Alumni Network', value: 15000, suffix: '+' },
        { label: 'Countries', value: 25, suffix: '+' },
        { label: 'Entrepreneurs', value: 200, suffix: '+' },
        { label: 'Higher Studies', value: 40, suffix: '%' },
    ];

    return (
        <main className="pt-24">
            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
                <div className="max-w-7xl mx-auto text-center">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
                            Our <span className="gradient-text">Alumni</span>
                        </h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                            AJCE alumni are making a difference across the globe — in top tech companies, startups, research labs, and beyond.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Stats */}
            <section ref={ref} className="section-padding bg-light-surface-alt dark:bg-dark-surface-alt">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {alumniStats.map((s, i) => (
                            <AnimatedSection key={s.label} delay={i * 0.1}>
                                <div className="text-center p-6">
                                    <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-1">
                                        {inView ? <CountUp end={s.value} duration={2.5} /> : '0'}{s.suffix}
                                    </div>
                                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{s.label}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Notable Alumni */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title="Notable Alumni" subtitle="Leaders shaping the world" />
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {alumni.map((a) => (
                            <StaggerItem key={a.id}>
                                <div className="glass-card p-6 flex gap-6 group hover:border-primary/30 transition-all duration-500">
                                    <img src={a.image} alt={a.name} className="w-24 h-24 rounded-2xl object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all flex-shrink-0" />
                                    <div>
                                        <h3 className="font-heading font-semibold text-xl mb-1">{a.name}</h3>
                                        <p className="text-primary font-medium text-sm mb-1">{a.role}</p>
                                        <div className="flex items-center gap-1 text-xs text-light-text-secondary dark:text-dark-text-secondary mb-3">
                                            <FiMapPin className="w-3 h-3" /> {a.location} · {a.department} · {a.batch}
                                        </div>
                                        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary italic">&ldquo;{a.quote}&rdquo;</p>
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
                        <h2 className="text-3xl font-heading font-bold mb-4">Are You an AJCE Alumnus?</h2>
                        <p className="opacity-90 mb-8 max-w-xl mx-auto">
                            Stay connected with your alma mater. Join the alumni network, mentor current students, and be part of the AJCE community.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-8 py-3 bg-white text-primary font-heading font-semibold rounded-xl hover:shadow-2xl transition-all duration-300">
                                Register as Alumni
                            </button>
                            <button className="px-8 py-3 border-2 border-white text-white font-heading font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                                Alumni Events
                            </button>
                        </div>
                    </div>
                </AnimatedSection>
            </section>
        </main>
    );
}
