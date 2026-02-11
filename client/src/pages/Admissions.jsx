import { Link } from 'react-router-dom';
import { FiCheck, FiCalendar, FiDollarSign, FiFileText, FiArrowRight } from 'react-icons/fi';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/shared/AnimatedSection';
import { SectionTitle } from '../components/ui/SectionTitle';

const steps = [
    { step: 1, title: 'Check Eligibility', desc: 'Verify your qualification requirements and entrance exam scores.', icon: FiCheck },
    { step: 2, title: 'Apply Online', desc: 'Fill out the online application form with required documents.', icon: FiFileText },
    { step: 3, title: 'Entrance Exam', desc: 'KEAM / JEE Main scores are accepted for admission.', icon: FiCalendar },
    { step: 4, title: 'Counseling', desc: 'Attend the centralized allotment process (CAP) for seat allocation.', icon: FiCheck },
    { step: 5, title: 'Fee Payment', desc: 'Complete fee payment and document verification.', icon: FiDollarSign },
    { step: 6, title: 'Welcome!', desc: 'Join the AJCE family and begin your engineering journey.', icon: FiCheck },
];

const eligibility = [
    { program: 'B.Tech', criteria: 'Pass in 10+2 with Physics, Mathematics, and Chemistry/CS with minimum 45% marks', exam: 'KEAM / JEE Main' },
    { program: 'M.Tech', criteria: 'B.Tech/B.E. degree in relevant branch with valid GATE score', exam: 'GATE' },
    { program: 'MBA', criteria: 'Graduation in any discipline with minimum 50% marks', exam: 'KMAT / CAT / MAT' },
    { program: 'MCA', criteria: 'Graduation with Mathematics as one of the subjects', exam: 'KMAT' },
];

const fees = [
    { program: 'B.Tech (Merit)', annual: '₹52,500', total: '₹2,10,000' },
    { program: 'B.Tech (Management)', annual: '₹1,30,000', total: '₹5,20,000' },
    { program: 'M.Tech', annual: '₹60,000', total: '₹1,20,000' },
    { program: 'MBA', annual: '₹75,000', total: '₹1,50,000' },
];

const importantDates = [
    { event: 'Application Opens', date: 'March 2025' },
    { event: 'KEAM Exam', date: 'April 2025' },
    { event: 'JEE Main Result', date: 'April 2025' },
    { event: 'Counseling Starts', date: 'June 2025' },
    { event: 'Classes Begin', date: 'August 2025' },
];

export default function Admissions() {
    return (
        <main className="pt-24">
            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-accent/5 via-transparent to-primary/5">
                <div className="max-w-7xl mx-auto text-center">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
                            <span className="gradient-text">Admissions</span> 2025-26
                        </h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto mb-8">
                            Your journey to becoming an engineer starts here. Applications are now open for the 2025-26 academic year.
                        </p>
                        <a href="#apply" className="btn-primary inline-flex items-center gap-2 text-lg">
                            Apply Now <FiArrowRight />
                        </a>
                    </AnimatedSection>
                </div>
            </section>

            {/* Admission Process */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title="Admission Process" subtitle="Follow these steps to secure your seat at AJCE" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {steps.map((s, i) => (
                            <AnimatedSection key={s.step} delay={i * 0.1}>
                                <div className="glass-card p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
                                    <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-heading font-bold">
                                            {s.step}
                                        </div>
                                        <h3 className="font-heading font-semibold text-lg">{s.title}</h3>
                                    </div>
                                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{s.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility */}
            <section className="section-padding bg-light-surface-alt dark:bg-dark-surface-alt">
                <div className="max-w-5xl mx-auto">
                    <SectionTitle title="Eligibility Criteria" />
                    <StaggerContainer className="space-y-4">
                        {eligibility.map((e) => (
                            <StaggerItem key={e.program}>
                                <div className="glass-card p-6">
                                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                                        <div className="md:w-32">
                                            <span className="px-4 py-2 rounded-xl bg-primary text-white font-heading font-semibold text-sm">{e.program}</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm">{e.criteria}</p>
                                            <p className="text-xs text-primary mt-1">Entrance: {e.exam}</p>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Fee Structure */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <SectionTitle title="Fee Structure" subtitle="Transparent fee details for all programs" />
                    <AnimatedSection>
                        <div className="glass-card overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-primary/5 dark:bg-primary/10">
                                        <th className="text-left px-6 py-4 font-heading font-semibold text-sm">Program</th>
                                        <th className="text-left px-6 py-4 font-heading font-semibold text-sm">Annual Fee</th>
                                        <th className="text-left px-6 py-4 font-heading font-semibold text-sm">Total (Est.)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fees.map((f, i) => (
                                        <tr key={f.program} className="border-t border-light-surface-alt dark:border-dark-surface-alt hover:bg-primary/5 transition-colors">
                                            <td className="px-6 py-4 font-medium text-sm">{f.program}</td>
                                            <td className="px-6 py-4 text-sm text-primary font-mono font-semibold">{f.annual}</td>
                                            <td className="px-6 py-4 text-sm font-mono">{f.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Important Dates */}
            <section className="section-padding bg-light-surface-alt dark:bg-dark-surface-alt">
                <div className="max-w-3xl mx-auto">
                    <SectionTitle title="Important Dates" />
                    <StaggerContainer className="space-y-4">
                        {importantDates.map((d, i) => (
                            <StaggerItem key={d.event}>
                                <div className="glass-card p-5 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <FiCalendar className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-heading font-semibold">{d.event}</h4>
                                    </div>
                                    <span className="text-primary font-mono font-semibold text-sm">{d.date}</span>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA */}
            <section id="apply" className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <div className="gradient-bg rounded-2xl p-12 text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Join AJCE?</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
                            Take the first step toward your engineering career. Our admissions team is here to help.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact" className="px-8 py-4 bg-white text-primary font-heading font-semibold rounded-xl hover:shadow-2xl transition-all duration-300">
                                Contact Admissions
                            </Link>
                            <a href="https://www.ajce.in" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-white text-white font-heading font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                                Download Brochure
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
