import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiMail, FiBookOpen, FiAward, FiUsers, FiCpu } from 'react-icons/fi';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/shared/AnimatedSection';
import { SectionTitle } from '../components/ui/SectionTitle';
import { getDepartmentBySlug } from '../data/departments';

export default function DepartmentDetail() {
    const { slug } = useParams();
    const dept = getDepartmentBySlug(slug);

    if (!dept) {
        return (
            <main className="pt-24 section-padding text-center">
                <h1 className="text-3xl font-heading font-bold mb-4">Department Not Found</h1>
                <Link to="/courses" className="btn-primary inline-flex items-center gap-2">
                    <FiArrowLeft /> Back to Courses
                </Link>
            </main>
        );
    }

    return (
        <main className="pt-24">
            {/* Hero Banner */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5"></div>
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: dept.color }}></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <AnimatedSection>
                        <Link to="/courses" className="inline-flex items-center gap-2 text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-primary mb-6">
                            <FiArrowLeft /> Back to All Departments
                        </Link>
                        <div className="flex items-start gap-6">
                            <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${dept.color}20`, border: `2px solid ${dept.color}40` }}>
                                <span className="text-2xl font-heading font-bold" style={{ color: dept.color }}>{dept.shortName}</span>
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-3">{dept.name}</h1>
                                <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl">{dept.description}</p>
                                <div className="flex flex-wrap gap-4 mt-6">
                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-light-surface dark:bg-dark-surface text-sm font-medium">
                                        <FiUsers className="text-primary" /> Intake: {dept.intake}
                                    </span>
                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-light-surface dark:bg-dark-surface text-sm font-medium">
                                        <FiBookOpen className="text-secondary" /> Est. {dept.established}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* HOD Section */}
            <section className="section-padding bg-light-surface-alt dark:bg-dark-surface-alt">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title="Head of Department" />
                    <AnimatedSection>
                        <div className="glass-card p-8 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
                            <img src={dept.hod.image} alt={dept.hod.name} className="w-32 h-32 rounded-2xl object-cover ring-4 ring-primary/20" />
                            <div>
                                <h3 className="text-2xl font-heading font-bold mb-1">{dept.hod.name}</h3>
                                <p className="text-primary font-medium mb-3">{dept.hod.specialization}</p>
                                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-1">{dept.hod.qualification}</p>
                                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-3">Experience: {dept.hod.experience}</p>
                                <a href={`mailto:${dept.hod.email}`} className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                                    <FiMail /> {dept.hod.email}
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Curriculum */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title="Curriculum" subtitle="Core subjects and specializations" />
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {dept.curriculum.map((subject, i) => (
                            <StaggerItem key={subject}>
                                <div className="glass-card p-4 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: dept.color }}>
                                        {i + 1}
                                    </div>
                                    <span className="text-sm font-medium">{subject}</span>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Labs */}
            <section className="section-padding bg-light-surface-alt dark:bg-dark-surface-alt">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title="Laboratories" subtitle="State-of-the-art facilities" />
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {dept.labs.map((lab) => (
                            <StaggerItem key={lab}>
                                <div className="glass-card p-6 text-center">
                                    <FiCpu className="w-8 h-8 mx-auto mb-3" style={{ color: dept.color }} />
                                    <h4 className="font-heading font-semibold">{lab}</h4>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Achievements */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title="Achievements" />
                    <StaggerContainer className="max-w-3xl mx-auto space-y-4">
                        {dept.achievements.map((a, i) => (
                            <StaggerItem key={i}>
                                <div className="glass-card p-5 flex items-center gap-4">
                                    <FiAward className="w-6 h-6 text-secondary flex-shrink-0" />
                                    <span className="font-medium">{a}</span>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Faculty */}
            <section className="section-padding bg-light-surface-alt dark:bg-dark-surface-alt">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title="Faculty" />
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {dept.faculty.map((f) => (
                            <StaggerItem key={f.name}>
                                <div className="glass-card p-6 text-center group">
                                    <img src={f.image} alt={f.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300" />
                                    <h4 className="font-heading font-semibold">{f.name}</h4>
                                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{f.designation}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </main>
    );
}
