import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiYoutube, FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Placements', path: '/placements' },
    { name: 'Contact', path: '/contact' },
];

const departmentLinks = [
    { name: 'Computer Science', path: '/departments/computer-science-engineering' },
    { name: 'Electronics & Communication', path: '/departments/electronics-communication-engineering' },
    { name: 'Electrical & Electronics', path: '/departments/electrical-electronics-engineering' },
    { name: 'Mechanical', path: '/departments/mechanical-engineering' },
    { name: 'Civil', path: '/departments/civil-engineering' },
    { name: 'Information Technology', path: '/departments/information-technology' },
    { name: 'AI & Data Science', path: '/departments/artificial-intelligence-data-science' },
];

const socialLinks = [
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiYoutube, href: '#', label: 'YouTube' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiGithub, href: '#', label: 'GitHub' },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-light-surface dark:bg-dark-surface border-t border-light-surface-alt dark:border-dark-surface-alt">
            {/* Gradient Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-heading font-bold text-lg">
                                A
                            </div>
                            <div>
                                <span className="text-xl font-heading font-bold gradient-text">AJCE</span>
                                <span className="block text-[10px] text-light-text-secondary dark:text-dark-text-secondary -mt-1 tracking-wider">AMAL JYOTHI COLLEGE OF ENGINEERING</span>
                            </div>
                        </Link>
                        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed mb-6">
                            Empowering future engineers with world-class education, innovation, and values since 2000.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-2.5 rounded-xl bg-light-surface-alt dark:bg-dark-surface-alt hover:bg-primary hover:text-white transition-all duration-300 text-light-text-secondary dark:text-dark-text-secondary"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Departments */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-4">Departments</h3>
                        <ul className="space-y-3">
                            {departmentLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <FiMapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                                    Koovappally P.O, Kanjirappally,<br />
                                    Kottayam, Kerala - 686518
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiPhone className="w-5 h-5 text-primary flex-shrink-0" />
                                <a href="tel:+914828-2730100" className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-primary transition-colors">
                                    +91 4828-2730100
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiMail className="w-5 h-5 text-primary flex-shrink-0" />
                                <a href="mailto:info@ajce.in" className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-primary transition-colors">
                                    info@ajce.in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-light-surface-alt dark:border-dark-surface-alt pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                        © {new Date().getFullYear()} Amal Jyothi College of Engineering. All rights reserved.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="p-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow duration-300"
                        aria-label="Scroll to top"
                    >
                        <FiArrowUp className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
