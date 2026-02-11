import Link from "next/link";
import {
    GraduationCap,
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
    ArrowUpRight,
} from "lucide-react";

const footerLinks = {
    quickLinks: [
        { label: "About AJCE", href: "/about" },
        { label: "Academics", href: "/academics" },
        { label: "Admissions", href: "/admissions" },
        { label: "News & Events", href: "/news-events" },
        { label: "Contact Us", href: "/contact" },
    ],
    academics: [
        { label: "B.Tech Programs", href: "/academics#undergraduate" },
        { label: "M.Tech Programs", href: "/academics#postgraduate" },
        { label: "MCA Program", href: "/academics#mca" },
        { label: "Departments", href: "/departments" },
        { label: "Research", href: "/research" },
    ],
    campus: [
        { label: "Placements", href: "/placements" },
        { label: "Campus Life", href: "/campus-life" },
        { label: "Library", href: "/campus-life#library" },
        { label: "Student Clubs", href: "/campus-life#clubs" },
        { label: "Sports", href: "/campus-life#sports" },
    ],
};

const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/ajcekjy", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/ajcekjy", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@ajcekjy", label: "YouTube" },
    { icon: Linkedin, href: "https://linkedin.com/school/ajcekjy", label: "LinkedIn" },
];

export function Footer() {
    return (
        <footer className="bg-navy text-white/80">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-gold" />
                            </div>
                            <div>
                                <h3 className="font-serif font-bold text-xl text-white">AJCE</h3>
                                <p className="text-xs text-white/50">
                                    Amal Jyothi College of Engineering
                                </p>
                            </div>
                        </Link>
                        <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-sm">
                            A premier engineering institution in Kerala, committed to academic
                            excellence, innovation, and holistic development since 2001.
                            Affiliated to KTU & approved by AICTE.
                        </p>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                                <span>
                                    Koovappally P.O., Kanjirappally, Kottayam,
                                    <br />
                                    Kerala — 686 518, India
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                                <span>+91 4828 246605</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                                <span>info@ajce.in</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/60 hover:text-gold transition-colors flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Academics */}
                    <div>
                        <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
                            Academics
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.academics.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/60 hover:text-gold transition-colors flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Campus */}
                    <div>
                        <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
                            Campus
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.campus.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/60 hover:text-gold transition-colors flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/40 text-center sm:text-left">
                        © {new Date().getFullYear()} Amal Jyothi College of Engineering. All
                        rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold/20 flex items-center justify-center transition-colors group"
                                aria-label={social.label}
                            >
                                <social.icon className="w-4 h-4 text-white/60 group-hover:text-gold transition-colors" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
