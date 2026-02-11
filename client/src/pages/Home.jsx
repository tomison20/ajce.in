import { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiChevronRight, FiStar, FiUsers, FiAward, FiBookOpen } from 'react-icons/fi';
import { AnimatedSection, StaggerContainer, StaggerItem, ParallaxSection } from '../components/shared/AnimatedSection';
import { SectionTitle } from '../components/ui/SectionTitle';
import { departments } from '../data/departments';
import { testimonials, news, stats } from '../data/siteData';

/* ─── Floating Particle Background ──────────────────────── */
function ParticleHero() {
    useEffect(() => {
        const canvas = document.getElementById('hero-particles');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationId;
        let particles = [];

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 0.8;
                this.speedY = (Math.random() - 0.5) * 0.8;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.color = ['#6C63FF', '#FF6584', '#00D4AA'][Math.floor(Math.random() * 3)];
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.fill();
            }
        }

        for (let i = 0; i < 80; i++) particles.push(new Particle());

        const connectParticles = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = particles[i].color;
                        ctx.globalAlpha = 0.1 * (1 - dist / 120);
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            connectParticles();
            animationId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas id="hero-particles" className="absolute inset-0 w-full h-full" />;
}

/* ─── Hero Section ───────────────────────────────────────── */
function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-surface-alt dark:from-dark-bg dark:via-dark-surface dark:to-dark-surface-alt bg-light-bg"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-secondary/10"></div>
            <ParticleHero />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(rgba(108,99,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
                        <FiStar className="w-4 h-4" />
                        NAAC Accredited {`|`} Estd. 2000
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 text-white"
                >
                    <span className="block">Amal Jyothi</span>
                    <span className="gradient-text">College of Engineering</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    Where innovation meets tradition. Empowering the next generation of engineers
                    with world-class education in the heart of Kerala&apos;s lush green landscape.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <Link to="/courses" className="btn-primary inline-flex items-center gap-2 text-lg">
                        Explore Courses <FiArrowRight />
                    </Link>
                    <Link to="/admissions" className="btn-secondary inline-flex items-center gap-2 text-lg !text-white !border-white/30 hover:!bg-white/10">
                        Apply Now <FiChevronRight />
                    </Link>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 60L48 52C96 44 192 28 288 24C384 20 480 28 576 40C672 52 768 68 864 72C960 76 1056 68 1152 56C1248 44 1344 28 1392 20L1440 12V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
                        className="fill-light-bg dark:fill-dark-bg" />
                </svg>
            </div>
        </section>
    );
}

/* ─── Stats Section ──────────────────────────────────────── */
function StatsSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section ref={ref} className="section-padding bg-light-bg dark:bg-dark-bg">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {stats.map((stat, i) => (
                        <AnimatedSection key={stat.label} delay={i * 0.1}>
                            <div className="text-center p-6 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-surface-alt dark:border-dark-surface-alt hover:border-primary/30 transition-colors duration-300">
                                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-1">
                                    {inView ? <CountUp end={stat.value} duration={2.5} /> : '0'}
                                    {stat.suffix}
                                </div>
                                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{stat.label}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Featured Departments ───────────────────────────────── */
function FeaturedDepartments() {
    const deptIcons = { cse: FiBookOpen, ece: FiBookOpen, eee: FiBookOpen, me: FiBookOpen, ce: FiBookOpen, it: FiBookOpen, aids: FiBookOpen };

    return (
        <section className="section-padding bg-light-surface-alt dark:bg-dark-surface-alt">
            <div className="max-w-7xl mx-auto">
                <SectionTitle
                    title="Our Departments"
                    subtitle="7 cutting-edge engineering departments shaping the future of technology"
                />
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {departments.slice(0, 4).map((dept) => (
                        <StaggerItem key={dept.id}>
                            <Link to={`/departments/${dept.slug}`}>
                                <div className="glass-card p-6 group cursor-pointer h-full">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                                        style={{ backgroundColor: `${dept.color}20` }}
                                    >
                                        <FiBookOpen className="w-7 h-7" style={{ color: dept.color }} />
                                    </div>
                                    <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{dept.shortName}</h3>
                                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary line-clamp-3">
                                        {dept.description}
                                    </p>
                                    <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Learn More <FiArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
                <AnimatedSection className="text-center mt-10">
                    <Link to="/courses" className="btn-primary inline-flex items-center gap-2">
                        View All Departments <FiArrowRight />
                    </Link>
                </AnimatedSection>
            </div>
        </section>
    );
}

/* ─── Why AJCE (Parallax Section) ────────────────────────── */
function WhyAJCE() {
    const reasons = [
        { icon: FiAward, title: 'NAAC Accredited', desc: 'Recognized institution with top accreditation standards' },
        { icon: FiUsers, title: '92% Placement Rate', desc: 'Industry-leading placements with 120+ top recruiters' },
        { icon: FiBookOpen, title: '25+ Years Legacy', desc: 'Quarter century of engineering excellence in Kerala' },
        { icon: FiStar, title: 'Innovation Hub', desc: 'State-of-the-art labs, incubation center, and research facilities' },
    ];

    return (
        <section className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <SectionTitle title="Why AJCE?" subtitle="Discover what makes us one of Kerala's premier engineering institutions" />
                <ParallaxSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {reasons.map((r, i) => (
                            <AnimatedSection key={r.title} delay={i * 0.15}>
                                <div className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-500">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                        <r.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="font-heading font-semibold text-lg mb-2">{r.title}</h3>
                                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{r.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </ParallaxSection>
            </div>
        </section>
    );
}

/* ─── Testimonials ───────────────────────────────────────── */
function TestimonialsSection() {
    return (
        <section className="section-padding bg-light-surface-alt dark:bg-dark-surface-alt overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="Student Voices" subtitle="Hear from our students and alumni about their AJCE experience" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.slice(0, 3).map((t, i) => (
                        <AnimatedSection key={t.id} delay={i * 0.15}>
                            <div className="glass-card p-6 h-full flex flex-col">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/30"
                                    />
                                    <div>
                                        <h4 className="font-heading font-semibold">{t.name}</h4>
                                        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{t.department} · {t.batch}</p>
                                    </div>
                                </div>
                                <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed flex-1 italic">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                {t.company && (
                                    <div className="mt-4 pt-4 border-t border-light-surface-alt dark:border-dark-surface-alt">
                                        <span className="text-xs font-medium text-primary">Now at {t.company}</span>
                                    </div>
                                )}
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── News Ticker ────────────────────────────────────────── */
function NewsTicker() {
    return (
        <section className="py-6 bg-primary/5 dark:bg-primary/10 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
                {[...news, ...news].map((n, i) => (
                    <span key={i} className="inline-flex items-center gap-3 text-sm">
                        <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></span>
                        <span className="font-medium">{n.title}</span>
                        <span className="text-light-text-secondary dark:text-dark-text-secondary text-xs">{n.date}</span>
                    </span>
                ))}
            </div>
        </section>
    );
}

/* ─── CTA Section ────────────────────────────────────────── */
function CTASection() {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 gradient-bg opacity-90"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.1),_transparent)]"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
                <AnimatedSection>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                        Ready to Shape Your Future?
                    </h2>
                    <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                        Join 3000+ students who chose AJCE as their gateway to engineering excellence.
                        Applications for 2025-26 are now open.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/admissions" className="px-8 py-4 bg-white text-primary font-heading font-semibold rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            Apply Now
                        </Link>
                        <Link to="/contact" className="px-8 py-4 border-2 border-white text-white font-heading font-semibold rounded-xl hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300">
                            Contact Us
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

/* ─── Home Page ──────────────────────────────────────────── */
export default function Home() {
    return (
        <main>
            <HeroSection />
            <StatsSection />
            <FeaturedDepartments />
            <WhyAJCE />
            <TestimonialsSection />
            <NewsTicker />
            <CTASection />
        </main>
    );
}
