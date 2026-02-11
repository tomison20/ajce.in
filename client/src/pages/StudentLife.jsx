import { FiUsers, FiMusic, FiCamera, FiCode, FiHeart, FiStar, FiActivity } from 'react-icons/fi';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/shared/AnimatedSection';
import { SectionTitle } from '../components/ui/SectionTitle';
import { clubs, events } from '../data/siteData';

const facilities = [
    { icon: FiActivity, title: 'Sports Complex', desc: 'Football ground, basketball court, volleyball court, indoor badminton, and athletics track.' },
    { icon: FiHeart, title: 'Hostel Life', desc: 'Separate hostels for boys and girls with modern amenities, mess facility, and 24/7 security.' },
    { icon: FiMusic, title: 'Cultural Center', desc: 'Auditorium, music rooms, dance studios, and art galleries for creative expression.' },
    { icon: FiCode, title: 'Innovation Lab', desc: '24/7 maker space with 3D printers, IoT kits, and prototyping equipment.' },
];

const clubCategories = ['All', 'Technical', 'Cultural', 'Business', 'Social', 'Sports'];

export default function StudentLife() {
    return (
        <main className="pt-24">
            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-secondary/5 via-transparent to-accent/5">
                <div className="max-w-7xl mx-auto text-center">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
                            Student <span className="gradient-text">Life</span>
                        </h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                            Life at AJCE goes far beyond the classroom. Discover clubs, sports, cultural fests, and more.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Clubs */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title="Clubs & Organizations" subtitle="Join a community that matches your passion" />
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {clubs.map((club) => {
                            const categoryColors = {
                                Technical: '#6C63FF', Cultural: '#FF6584', Business: '#FF9F43', Social: '#00D4AA', Sports: '#54A0FF',
                            };
                            const color = categoryColors[club.category] || '#6C63FF';
                            return (
                                <StaggerItem key={club.name}>
                                    <div className="glass-card p-5 group hover:border-primary/30 transition-all duration-300 text-center">
                                        <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
                                            <FiUsers className="w-6 h-6" style={{ color }} />
                                        </div>
                                        <h4 className="font-heading font-semibold text-sm mb-1">{club.name}</h4>
                                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: `${color}15`, color }}>{club.category}</span>
                                        <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary mt-2">{club.members} members</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </div>
            </section>

            {/* Events Gallery */}
            <section className="section-padding bg-light-surface-alt dark:bg-dark-surface-alt">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title="Fests & Events" subtitle="Where memories are made" />
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {events.map((event) => (
                            <StaggerItem key={event.id}>
                                <div className="glass-card overflow-hidden group">
                                    <div className="relative h-56 overflow-hidden">
                                        <img src={event.image} alt={event.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <span className="px-3 py-1 rounded-lg bg-primary text-white text-xs font-medium">{event.type}</span>
                                            <h3 className="text-white font-heading font-semibold text-xl mt-2">{event.name}</h3>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{event.description}</p>
                                        <p className="text-xs text-primary mt-3 font-medium">{event.date}</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Facilities */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title="Campus Facilities" subtitle="Everything you need for a complete college experience" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {facilities.map((f, i) => (
                            <AnimatedSection key={f.title} delay={i * 0.1}>
                                <div className="glass-card p-8 group hover:border-primary/30 transition-all duration-500">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <f.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="font-heading font-semibold text-xl mb-2">{f.title}</h3>
                                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{f.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
