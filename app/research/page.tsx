"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Image from "next/image";
import {
    Lightbulb, BookOpen, Handshake, FileText, Rocket,
    FlaskConical, Cpu, Zap, Leaf, Globe, Award,
    TrendingUp, Users, Microscope, ChevronRight, Star,
    BadgeCheck, BarChart3, BookMarked, Building2, GraduationCap,
    Trophy, CalendarDays, Briefcase, Map, Quote, ArrowRight,
    Mail, Phone, ClipboardList, Layers, HeartHandshake,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────── */

const stats = [
    { label: "Funded Projects", value: "60+", icon: FileText },
    { label: "Research Publications", value: "340+", icon: BookMarked },
    { label: "Patents Filed", value: "28", icon: BadgeCheck },
    { label: "Industry Partners", value: "40+", icon: Handshake },
    { label: "Research Scholars", value: "75+", icon: GraduationCap },
    { label: "Total Funding (Cr)", value: "₹4.2", icon: TrendingUp },
];

const researchCenters = [
    {
        name: "Center for AI & Machine Learning",
        dept: "CSE / AI&DS",
        focus: "Deep learning, NLP, Computer vision, Predictive analytics, Generative AI",
        projects: 12,
        icon: Cpu,
        color: "from-blue-500/20 to-indigo-500/10",
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
        desc: "Pioneering AI-driven solutions from medical diagnosis to autonomous systems. Our researchers publish regularly in top-tier IEEE and ACM venues.",
        highlights: ["GPU Cluster with 8x A100", "Kaggle Grandmaster mentors", "Industry-sponsored PhD seats"],
    },
    {
        name: "Center for VLSI & Embedded Systems",
        dept: "ECE",
        focus: "SoC design, FPGA development, IoT architectures, RF communication",
        projects: 8,
        icon: Cpu,
        color: "from-purple-500/20 to-pink-500/10",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
        desc: "State-of-the-art chip design and embedded systems lab equipped with Cadence, Synopsys and MATLAB toolchains — one of the best in Kerala.",
        highlights: ["Cadence & Synopsys licensed EDA", "ISRO collaborative projects", "48-node FPGA cluster"],
    },
    {
        name: "Center for Renewable Energy",
        dept: "EEE",
        focus: "Solar energy, Wind power, Smart grid, Battery storage, Hydrogen cells",
        projects: 6,
        icon: Zap,
        color: "from-yellow-500/20 to-orange-500/10",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
        desc: "Advancing Kerala's transition to clean energy. Active collaboration with MNRE and KSEB on smart grid deployment and micro-grid solutions for rural areas.",
        highlights: ["500 kWp on-campus solar plant", "MNRE nodal center", "Smart grid testbed lab"],
    },
    {
        name: "Center for Sustainable Construction",
        dept: "Civil Engineering",
        focus: "Green building materials, Structural optimization, Waste-to-resource, Geo-tech",
        projects: 5,
        icon: Leaf,
        color: "from-green-500/20 to-teal-500/10",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        desc: "Developing eco-friendly alternatives to conventional materials — from fly-ash bricks to self-healing concrete — driving sustainable building practices in India.",
        highlights: ["Material Testing NABL lab", "3D concrete printing rig", "DST NM-ICPS partnership"],
    },
    {
        name: "Biomedical Engineering & Healthcare Tech",
        dept: "Applied Sciences / ECE",
        focus: "Wearable health monitoring, Medical imaging, Biosensors, Telemedicine",
        projects: 4,
        icon: Microscope,
        color: "from-red-500/20 to-pink-500/10",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
        desc: "Cross-disciplinary research merging electronics and biology. Projects include low-cost ECG wearables and AI-assisted retinal disease screening for rural clinics.",
        highlights: ["Collaboration with AIMS Kochi", "DBT-funded PhDs", "4 patents in healthcare tech"],
    },
    {
        name: "Center for Data Science & Analytics",
        dept: "MCA / CSE",
        focus: "Big data, Predictive modelling, Cloud analytics, Geospatial intelligence",
        projects: 7,
        icon: BarChart3,
        color: "from-cyan-500/20 to-sky-500/10",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        desc: "Leveraging petabyte-scale data for societal impact — from flood prediction models for Kerala to price forecasting systems for agricultural markets.",
        highlights: ["AWS & Azure research credits", "Partnered with Kerala govt. agencies", "Real-time dashboards for flood mgmt"],
    },
];

const fundedProjects = [
    { title: "AI-Powered Crop Disease Detection using Hyperspectral Imaging", agency: "DST, Govt. of India", amount: "₹25 Lakhs", pi: "Dr. Sunil Kumar S", dept: "CSE", status: "Ongoing", year: "2023–2025" },
    { title: "IoT-based Real-time Water Quality Monitoring & Alert System", agency: "KSCSTE", amount: "₹12 Lakhs", pi: "Dr. Mary Joseph", dept: "ECE", status: "Completed", year: "2022–2024" },
    { title: "Solar Micro-Grid for Rural Electrification in Wayanad", agency: "MNRE", amount: "₹18 Lakhs", pi: "Prof. Thomas Mathew", dept: "EEE", status: "Ongoing", year: "2023–2026" },
    { title: "Smart Traffic Management using Deep Reinforcement Learning", agency: "AICTE", amount: "₹8 Lakhs", pi: "Dr. Priya Mathew", dept: "CSE", status: "Completed", year: "2021–2023" },
    { title: "Development of Low-cost ECG Wearable for Remote Patient Monitoring", agency: "DST-SEED", amount: "₹15 Lakhs", pi: "Dr. Anu George", dept: "ECE", status: "Ongoing", year: "2024–2026" },
    { title: "Geopolymer Concrete using Industrial Waste for Green Construction", agency: "DST NM-ICPS", amount: "₹22 Lakhs", pi: "Prof. Renu Mohan", dept: "Civil", status: "Ongoing", year: "2023–2025" },
    { title: "Federated Learning for Privacy-Preserving Healthcare Analytics", agency: "ICMR", amount: "₹20 Lakhs", pi: "Dr. Binu V P", dept: "CSE", status: "Ongoing", year: "2024–2027" },
    { title: "FPGA-based Real-time Signal Processing for 5G Networks", agency: "ISRO", amount: "₹30 Lakhs", pi: "Dr. Rajan Nair", dept: "ECE", status: "Ongoing", year: "2022–2025" },
];

const publications = [
    { title: "Transformer-based Pest Identification in Cardamom Plantations", journal: "IEEE Transactions on Agri-Food Electronics", year: 2024, citations: 38, type: "Journal" },
    { title: "Energy-efficient FPGA Implementation of AES Encryption for IoT Devices", journal: "ACM Transactions on Embedded Computing Systems", year: 2024, citations: 24, type: "Journal" },
    { title: "Self-healing Concrete with Bacillus subtilis for Coastal Structures", journal: "Construction and Building Materials (Elsevier)", year: 2023, citations: 57, type: "Journal" },
    { title: "KeralaCast: LSTM-based Rainfall Prediction for Flood Early Warning", journal: "Nature Scientific Reports", year: 2023, citations: 91, type: "Journal" },
    { title: "FedMed: Privacy-aware Federated Learning for Diabetic Retinopathy", journal: "IEEE CVPR Workshop 2024", year: 2024, citations: 19, type: "Conference" },
    { title: "Comparative Analysis of GAN architectures for Low-light Image Enhancement", journal: "Elsevier Image and Vision Computing", year: 2023, citations: 44, type: "Journal" },
];

const iEdcStats = [
    { label: "Startups Incubated", value: "8" },
    { label: "Ideas Funded", value: "25+" },
    { label: "Mentors & Advisors", value: "15" },
    { label: "Patents Filed", value: "12" },
    { label: "Seed Funding (₹)", value: "52L" },
    { label: "National Hackathon Wins", value: "9" },
];

const startups = [
    { name: "AgroSense AI", domain: "AgriTech", desc: "AI-powered drone crop health monitoring platform for small-scale farmers", stage: "Seed" },
    { name: "MediTrack", domain: "HealthTech", desc: "Wearable ECG patch with cloud-connected remote monitoring for rural clinics", stage: "Pre-Series A" },
    { name: "UrbanFlow", domain: "Smart City", desc: "Deep learning traffic optimisation reducing urban congestion by 32%", stage: "MVP" },
    { name: "SolarMesh", domain: "CleanTech", desc: "Peer-to-peer solar energy trading platform for residential communities", stage: "Seed" },
];

const partners = [
    { name: "TCS", logo: "🟦", type: "Industry" },
    { name: "Infosys", logo: "🟩", type: "Industry" },
    { name: "Bosch", logo: "🔴", type: "Industry" },
    { name: "ISRO", logo: "🚀", type: "Govt." },
    { name: "KSCSTE", logo: "🔬", type: "Govt." },
    { name: "DRDO", logo: "🛡️", type: "Govt." },
    { name: "NVIDIA", logo: "💚", type: "Industry" },
    { name: "AWS", logo: "☁️", type: "Industry" },
    { name: "DST", logo: "🏛️", type: "Govt." },
    { name: "AICTE", logo: "📚", type: "Govt." },
    { name: "MNRE", logo: "🌿", type: "Govt." },
    { name: "IEEE", logo: "⚡", type: "Academic" },
];

const facilities = [
    { name: "Advanced Computing Lab", desc: "High-performance GPU cluster with 8× NVIDIA A100 GPUs for deep learning and large-scale simulations.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" },
    { name: "VLSI & Chip Design Lab", desc: "Fully licensed Cadence Virtuoso & Synopsys Design Compiler suite with 48-node computation servers.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
    { name: "Renewable Energy Testbed", desc: "500 kWp on-campus solar installation with smart-grid testbed, battery storage and IoT sensors.", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80" },
    { name: "Material Testing Lab (NABL)", desc: "NABL-accredited laboratory for material strength, fatigue analysis and non-destructive evaluation.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" },
    { name: "Biomedical Research Suite", desc: "Biosensor fabrication, medical imaging and wearable device testing facility in collaboration with AIMS Kochi.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" },
    { name: "IEDC Co-working & Fab Lab", desc: "10,000 sq.ft innovation hub with 3D printers, laser cutters, rapid prototyping tools and private meeting pods.", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80" },
];

/* ─── Animation Variants ──────────────────────────── */

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }) };

/* ─── Page ────────────────────────────────────────── */

export default function ResearchPage() {
    return (
        <>
            {/* ── HERO ─────────────────────────────────────────── */}
            <section className="relative py-32 lg:py-44 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                {/* Grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)`, backgroundSize: "60px 60px" }}
                />
                {/* Glow blobs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-4">
                        Research & Innovation
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-xl text-white mb-6">
                        Driving the Frontiers of<br />
                        <span className="gradient-text">Knowledge & Discovery</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-lg text-white/60 max-w-3xl mx-auto mb-10">
                        At Amal Jyothi College of Engineering, research is not a pursuit — it is a way of life. With ₹4.2 crore in active funded projects, 340+ publications in Scopus/SCI journals, and 6 dedicated research centres, we are shaping the future of technology, sustainability, and human well-being.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-3 justify-center">
                        <a href="#centers" className="px-6 py-3 bg-gold text-navy font-semibold rounded-full text-sm hover:bg-gold/90 transition-colors">
                            Explore Research Centers
                        </a>
                        <a href="#projects" className="px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-gold/50 transition-colors">
                            View Funded Projects
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ── STATS STRIP ──────────────────────────────────── */}
            <section className="py-12 bg-card border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {stats.map((s, i) => (
                            <motion.div key={s.label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="flex flex-col items-center text-center p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors">
                                <s.icon className="w-6 h-6 text-gold mb-2" />
                                <span className="text-2xl md:text-3xl font-bold text-foreground font-serif">{s.value}</span>
                                <span className="text-xs text-muted-foreground mt-1">{s.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── RESEARCH CENTERS ─────────────────────────────── */}
            <section id="centers" className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Centers of Excellence" title="Research Centers & Labs" description="Six specialised research centres equipped with world-class infrastructure, driving multidisciplinary innovation across engineering and applied sciences." />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {researchCenters.map((center, i) => (
                            <motion.div key={center.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden border border-border bg-card hover:border-gold/40 hover:shadow-xl transition-all duration-300 group">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img src={center.image} alt={center.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${center.color} mix-blend-multiply`} />
                                    <div className="absolute top-3 right-3 bg-gold text-navy text-xs font-bold px-2.5 py-1 rounded-full">
                                        {center.projects} Active Projects
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-centre gap-2 mb-1">
                                        <center.icon className="w-4 h-4 text-gold flex-shrink-0" />
                                        <span className="text-xs font-semibold text-gold uppercase tracking-wider">{center.dept}</span>
                                    </div>
                                    <h3 className="font-bold text-foreground text-base mb-2">{center.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{center.desc}</p>
                                    <div className="border-t border-border pt-4">
                                        <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Focus Areas</p>
                                        <p className="text-sm text-muted-foreground mb-4">{center.focus}</p>
                                        <ul className="space-y-1">
                                            {center.highlights.map((h) => (
                                                <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
                                                    <ChevronRight className="w-3 h-3 text-gold flex-shrink-0 mt-0.5" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FUNDED PROJECTS ──────────────────────────────── */}
            <section id="projects" className="section-padding bg-muted/40">
                <div className="max-w-6xl mx-auto">
                    <SectionHeader label="Funded Research" title="Major Research Projects" description="AJCE faculty lead high-impact research projects funded by DST, AICTE, ICMR, KSCSTE, MNRE, ISRO and other premier national agencies." />
                    <div className="space-y-4">
                        {fundedProjects.map((proj, i) => (
                            <motion.div key={proj.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-5 bg-card rounded-xl border border-border hover:border-gold/30 hover:shadow-md transition-all duration-300">
                                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <span className="text-xs font-semibold bg-navy/10 dark:bg-navy-light/30 text-navy dark:text-blue-300 px-2 py-0.5 rounded-full">{proj.dept}</span>
                                            <span className="text-xs text-muted-foreground">{proj.year}</span>
                                        </div>
                                        <h4 className="font-semibold text-foreground text-sm leading-snug">{proj.title}</h4>
                                        <p className="text-xs text-muted-foreground mt-1.5">PI: <span className="text-foreground font-medium">{proj.pi}</span> &nbsp;•&nbsp; Agency: <span className="text-foreground font-medium">{proj.agency}</span></p>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm flex-shrink-0">
                                        <span className="font-bold text-foreground text-base">{proj.amount}</span>
                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${proj.status === "Ongoing" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" : "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"}`}>
                                            {proj.status}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── RESEARCH FACILITIES ──────────────────────────── */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Infrastructure" title="World-Class Research Facilities" description="Our laboratories and research infrastructure are benchmarked against leading technical institutions, offering faculty and students the tools to pursue cutting-edge work." />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {facilities.map((f, i) => (
                            <motion.div key={f.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden border border-border bg-card group hover:shadow-xl hover:border-gold/30 transition-all duration-300">
                                <div className="relative h-52 overflow-hidden">
                                    <img src={f.image} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                                    <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-base">{f.name}</h3>
                                </div>
                                <p className="p-5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PUBLICATIONS ─────────────────────────────────── */}
            <section className="section-padding bg-muted/40">
                <div className="max-w-6xl mx-auto">
                    <SectionHeader label="Academic Output" title="Selected Publications" description="Our faculty publish steadily in Scopus-indexed, SCI-listed, and top-tier IEEE/ACM journals and conferences. Here are some recent highlights." />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {publications.map((pub, i) => (
                            <motion.div key={pub.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-5 bg-card rounded-xl border border-border hover:border-gold/30 hover:shadow-md transition-all duration-300">
                                <div className="flex justify-between items-start gap-4 mb-3">
                                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${pub.type === "Journal" ? "bg-gold/15 text-gold" : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"}`}>
                                        {pub.type}
                                    </span>
                                    <span className="text-xs text-muted-foreground flex-shrink-0">{pub.year}</span>
                                </div>
                                <h4 className="font-semibold text-foreground text-sm leading-snug mb-2">{pub.title}</h4>
                                <p className="text-xs text-muted-foreground mb-3 italic">{pub.journal}</p>
                                <div className="flex items-center gap-1.5">
                                    <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                                    <span className="text-xs font-semibold text-foreground">{pub.citations}</span>
                                    <span className="text-xs text-muted-foreground">citations</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div custom={6} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 text-center">
                        <div className="inline-flex items-center gap-8 p-6 bg-card rounded-2xl border border-border">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-foreground font-serif">340+</div>
                                <div className="text-xs text-muted-foreground mt-1">Scopus Publications</div>
                            </div>
                            <div className="w-px h-10 bg-border" />
                            <div className="text-center">
                                <div className="text-3xl font-bold text-foreground font-serif">120+</div>
                                <div className="text-xs text-muted-foreground mt-1">SCI-Listed Papers</div>
                            </div>
                            <div className="w-px h-10 bg-border" />
                            <div className="text-center">
                                <div className="text-3xl font-bold text-foreground font-serif">4,800+</div>
                                <div className="text-xs text-muted-foreground mt-1">Total Citations</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── IEDC ─────────────────────────────────────────── */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <SectionHeader label="Entrepreneurship" title="IEDC — Innovation & Startup Hub" align="left" />
                            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                                <p>
                                    The <strong className="text-foreground">Innovation & Entrepreneurship Development Centre (IEDC)</strong> at AJCE is a premier startup ecosystem recognised by Kerala Startup Mission (KSUM) and the Department for Promotion of Industry and Internal Trade (DPIIT).
                                </p>
                                <p>
                                    Spanning 10,000 sq.ft, the IEDC houses state-of-the-art co-working spaces, a fully-equipped Fabrication Lab with 3D printers and laser cutters, private meeting & pitching rooms, and a dedicated Seed Fund of ₹52 Lakhs for student ideas.
                                </p>
                                <p>
                                    With 15 mentors from industry and academia, the IEDC has successfully incubated 8 startups, filed 12 patents, and produced national hackathon champions — setting a benchmark for student innovation in Kerala.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                                {iEdcStats.map((s) => (
                                    <div key={s.label} className="p-4 bg-card rounded-xl border border-border text-center hover:border-gold/30 transition-colors">
                                        <div className="text-2xl font-bold text-foreground font-serif">{s.value}</div>
                                        <p className="text-xs text-muted-foreground mt-1 leading-tight">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                            className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80" alt="IEDC Innovation Hub" className="w-full h-80 object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent rounded-2xl" />
                            </div>
                            <div className="absolute -bottom-5 -left-5 bg-gold text-navy p-4 rounded-xl shadow-lg">
                                <Lightbulb className="w-8 h-8 mb-1" />
                                <p className="text-xs font-bold">Recognised by KSUM</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Startups */}
                    <SectionHeader label="Incubated Companies" title="Student Startups" description="From concept to company — meet the innovative startups born inside AJCE's IEDC." />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {startups.map((s, i) => (
                            <motion.div key={s.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-5 bg-card rounded-2xl border border-border hover:border-gold/40 hover:shadow-lg transition-all duration-300">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                                        <Rocket className="w-5 h-5 text-gold" />
                                    </div>
                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{s.stage}</span>
                                </div>
                                <h4 className="font-bold text-foreground text-sm mb-1">{s.name}</h4>
                                <p className="text-xs text-gold font-medium mb-2">{s.domain}</p>
                                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── INDUSTRY COLLABORATIONS ──────────────────────── */}
            <section className="section-padding bg-muted/40">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Partnerships" title="Industry & Institutional Collaborations" description="AJCE maintains deep partnerships with government agencies, industry giants, and academic bodies for curriculum co-creation, sponsored research, and student internships." />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {partners.map((p, i) => (
                            <motion.div key={p.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-5 bg-card rounded-xl border border-border text-center hover:border-gold/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                <div className="text-3xl mb-2">{p.logo}</div>
                                <span className="text-sm font-bold text-foreground block">{p.name}</span>
                                <span className="text-xs text-muted-foreground">{p.type}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Collab Banner */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                        className="mt-12 rounded-2xl overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80" alt="Research Collaboration" className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/50 flex items-center">
                            <div className="px-10 max-w-xl">
                                <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Interested in Partnering?</p>
                                <h3 className="text-white text-2xl font-bold mb-3">Collaborate with AJCE Research</h3>
                                <p className="text-white/70 text-sm mb-5">We welcome sponsored research, industry consultancy, joint PhD projects, and MoU partnerships. Reach out to our Research & Development Cell.</p>
                                <a href="/contact" className="inline-block px-6 py-2.5 bg-gold text-navy font-semibold rounded-full text-sm hover:bg-gold/90 transition-colors">
                                    Contact R&D Cell
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── PhD PROGRAMME ────────────────────────────────── */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <div className="rounded-2xl overflow-hidden shadow-xl">
                                <img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80" alt="PhD Research" className="w-full h-80 object-cover" />
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <SectionHeader label="Doctoral Studies" title="Ph.D. Research Programme" align="left" />
                            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                                <p>
                                    AJCE is a recognised research centre under <strong className="text-foreground">APJ Abdul Kalam Technological University (KTU)</strong>, offering full-time and part-time Ph.D. programmes across all major engineering disciplines.
                                </p>
                                <p>
                                    Currently <strong className="text-foreground">75+ research scholars</strong> are pursuing doctoral degrees under the guidance of our experienced research supervisors — many of whom are recipients of DST, AICTE, and UGC research grants.
                                </p>
                            </div>
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: GraduationCap, title: "75+ Research Scholars", desc: "Full-time and part-time PhD students across all departments" },
                                    { icon: Users, title: "30+ Recognised Guides", desc: "Experienced doctoral supervisors with proven research output" },
                                    { icon: Globe, title: "International Collaborations", desc: "Joint research with institutions in USA, Germany, and Australia" },
                                    { icon: Award, title: "Best Thesis Awards", desc: "Multiple KTU best thesis and young researcher recognitions" },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-3 p-4 bg-card rounded-xl border border-border">
                                        <item.icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                            <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── AWARDS & RECOGNITION ─────────────────────────── */}
            <section className="section-padding bg-muted/40">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Honours & Achievements" title="Awards & Recognition" description="AJCE researchers have earned national and international acclaim. Here are some of our proudest milestones across research, innovation, and academic excellence." />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {[
                            { year: "2024", title: "Best Paper Award – IEEE INDICON", recipient: "Dr. Sunil Kumar S & team", body: "IEEE India Council", img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80", tag: "Publication" },
                            { year: "2024", title: "Young Scientist Award", recipient: "Dr. Anu George", body: "Kerala State Council for Science", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", tag: "Faculty" },
                            { year: "2023", title: "National Startup Award – AgriTech", recipient: "AgroSense AI (AJCE Startup)", body: "Ministry of Commerce & Industry", img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80", tag: "Startup" },
                            { year: "2023", title: "KSCSTE Research Excellence Award", recipient: "Prof. Renu Mohan", body: "Kerala State Council for S&T", img: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=600&q=80", tag: "Faculty" },
                            { year: "2023", title: "Smart India Hackathon – Grand Finale Winner", recipient: "Team InnoTech (6 AJCE students)", body: "MoE, Govt. of India", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80", tag: "Students" },
                            { year: "2022", title: "Best Ph.D. Thesis Award", recipient: "Dr. Biju Rajan (ECE)", body: "APJ Abdul Kalam Technological University", img: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80", tag: "Research" },
                        ].map((a, i) => (
                            <motion.div key={a.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden border border-border bg-card hover:border-gold/40 hover:shadow-xl transition-all duration-300 group">
                                <div className="relative h-40 overflow-hidden">
                                    <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <span className="bg-gold text-navy text-xs font-bold px-2.5 py-1 rounded-full">{a.tag}</span>
                                        <span className="bg-black/50 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{a.year}</span>
                                    </div>
                                    <Trophy className="absolute bottom-3 right-3 w-7 h-7 text-gold/70" />
                                </div>
                                <div className="p-5">
                                    <h4 className="font-bold text-foreground text-sm mb-1 leading-snug">{a.title}</h4>
                                    <p className="text-xs text-gold font-medium mb-0.5">{a.recipient}</p>
                                    <p className="text-xs text-muted-foreground">{a.body}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {/* Ribbon strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: "National Awards", value: "18" },
                            { label: "State-Level Honours", value: "32" },
                            { label: "Hackathon Wins (All India)", value: "9" },
                            { label: "Best Paper Citations", value: "24" },
                        ].map((s, i) => (
                            <motion.div key={s.label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-5 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl border border-gold/20 text-center">
                                <div className="text-3xl font-bold text-foreground font-serif">{s.value}</div>
                                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FACULTY SPOTLIGHTS ────────────────────────────── */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Meet the Researchers" title="Faculty Research Spotlights" description="Our researchers bring deep domain expertise, national grants, and a passion for discovery. Meet a few of our distinguished research faculty." />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Dr. Sunil Kumar S", dept: "Computer Science", focus: "AI & Agricultural Intelligence", pubs: 42, h_index: 14, grants: "₹45L", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", quote: "AI should serve the farmer as much as the finance world." },
                            { name: "Dr. Mary Joseph", dept: "Electronics & Comm.", focus: "IoT & Smart Water Systems", pubs: 31, h_index: 11, grants: "₹28L", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", quote: "Every drop of water saved begins with smarter sensing." },
                            { name: "Prof. Renu Mohan", dept: "Civil Engineering", focus: "Sustainable Construction Materials", pubs: 28, h_index: 9, grants: "₹35L", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80", quote: "Green buildings start with green research." },
                            { name: "Dr. Binu V P", dept: "Computer Science", focus: "Federated Learning & Privacy", pubs: 36, h_index: 12, grants: "₹40L", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80", quote: "Data privacy is not a luxury — it is a right we must engineer." },
                        ].map((f, i) => (
                            <motion.div key={f.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl hover:border-gold/30 transition-all duration-300 group">
                                <div className="relative h-52 overflow-hidden">
                                    <img src={f.img} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                                    <Quote className="absolute top-3 right-3 w-5 h-5 text-gold/60" />
                                </div>
                                <div className="p-5">
                                    <h4 className="font-bold text-foreground text-base">{f.name}</h4>
                                    <p className="text-xs text-gold font-semibold mb-1">{f.dept}</p>
                                    <p className="text-xs text-muted-foreground mb-3 italic">&ldquo;{f.quote}&rdquo;</p>
                                    <p className="text-xs text-muted-foreground mb-3 font-medium">{f.focus}</p>
                                    <div className="grid grid-cols-3 gap-2 border-t border-border pt-3">
                                        <div className="text-center"><div className="text-base font-bold text-foreground">{f.pubs}</div><div className="text-[10px] text-muted-foreground">Papers</div></div>
                                        <div className="text-center"><div className="text-base font-bold text-foreground">{f.h_index}</div><div className="text-[10px] text-muted-foreground">h-index</div></div>
                                        <div className="text-center"><div className="text-base font-bold text-foreground">{f.grants}</div><div className="text-[10px] text-muted-foreground">Grants</div></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── STUDENT RESEARCH ─────────────────────────────── */}
            <section className="section-padding bg-muted/40">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <SectionHeader label="Student-Led Discovery" title="Student Research Projects" align="left" />
                            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                Research at AJCE is not confined to faculty labs. Students at every level — from UG final-year projects to PhD dissertations — are active contributors to our research output. The college allocates a dedicated <strong className="text-foreground">Student Research Fund</strong> and encourages participation in national competitions, paper publications, and patent filings.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Autonomous Weed-Removal Robot for Paddy Fields", team: "4 UG students, Mech + CSE", award: "1st Place, IIT Bombay TechFest 2024", img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=300&q=80" },
                                    { title: "Sign Language to Speech Converter using MediaPipe", team: "3 UG students, CSE", award: "Published in Springer LNCS, 2024", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&q=80" },
                                    { title: "Low-cost Air Quality Monitoring with LoRa Mesh", team: "5 UG students, ECE", award: "2nd Place, SIH 2023 Grand Finale", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=300&q=80" },
                                    { title: "Flood-Risk Prediction using GIS & LSTM Networks", team: "2 PG students, CSE", award: "Best Paper, IEEE ICCCNT 2023", img: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=300&q=80" },
                                ].map((p, i) => (
                                    <motion.div key={p.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                        className="flex gap-4 p-4 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors">
                                        <img src={p.img} alt={p.title} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                                        <div>
                                            <h5 className="font-semibold text-foreground text-sm leading-snug mb-1">{p.title}</h5>
                                            <p className="text-xs text-muted-foreground mb-1">{p.team}</p>
                                            <span className="inline-flex items-center gap-1 text-xs text-gold font-medium"><Trophy className="w-3 h-3" />{p.award}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-5">
                            <div className="rounded-2xl overflow-hidden shadow-xl">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" alt="Students Researching" className="w-full h-60 object-cover" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "UG Projects Completed / yr", value: "200+" },
                                    { label: "PG Dissertations / yr", value: "80+" },
                                    { label: "Student Patents Filed", value: "7" },
                                    { label: "Inter-college Awards (2024)", value: "22" },
                                ].map((s) => (
                                    <div key={s.label} className="p-4 bg-card rounded-xl border border-border text-center">
                                        <div className="text-2xl font-bold text-foreground font-serif">{s.value}</div>
                                        <p className="text-xs text-muted-foreground mt-1 leading-tight">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="p-5 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20">
                                <ClipboardList className="w-6 h-6 text-gold mb-3" />
                                <h4 className="font-bold text-foreground text-sm mb-2">Student Research Fund</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">Final-year UG/PG students can apply for up to <strong className="text-foreground">₹50,000</strong> in seed funding for innovative project ideas through the college&apos;s internal research grant scheme — reviewed bi-annually by the Research Committee.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── EVENTS & CONFERENCES ─────────────────────────── */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Research Calendar" title="Events, Conferences & Workshops" description="AJCE regularly hosts and participates in high-profile national and international academic events. Stay updated with our research community activities." />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <div className="rounded-2xl overflow-hidden border border-border bg-card">
                            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" alt="Conference" className="w-full h-52 object-cover" />
                            <div className="p-6">
                                <span className="text-xs font-bold text-gold uppercase tracking-widest">Flagship Event</span>
                                <h3 className="text-lg font-bold text-foreground mt-1 mb-2">ICRTAC 2025 — International Conference on Recent Trends in Advanced Computing</h3>
                                <p className="text-sm text-muted-foreground mb-4">AJCE&apos;s premier annual international conference attracting 400+ researchers from 18 countries. Indexed in IEEE Xplore and Scopus. Keynotes by IIT/IISc faculty and industry leaders.</p>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5" /> March 2025</span>
                                    <span className="flex items-center gap-1"><Map className="w-3.5 h-3.5" /> AJCE Campus, Kanjirappally</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: "National Workshop on Deep Learning & LLMs", date: "Jan 2025", type: "Workshop", attendees: "120+", partner: "Sponsored by NVIDIA" },
                                { name: "Kerala Research Scholars Conclave", date: "Dec 2024", type: "Symposium", attendees: "200+", partner: "Organised with KSCSTE" },
                                { name: "Industry-Academia Innovation Summit", date: "Nov 2024", type: "Summit", attendees: "300+", partner: "TCS & Infosys co-hosted" },
                                { name: "STEM Olympiad & Expo for Schools", date: "Oct 2024", type: "Outreach", attendees: "500+", partner: "CSR initiative with Bosch" },
                                { name: "Patent Filing & IPR Awareness Workshop", date: "Sep 2024", type: "Workshop", attendees: "90+", partner: "Supported by KSUM" },
                            ].map((ev, i) => (
                                <motion.div key={ev.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                    className="flex gap-4 p-4 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gold/10 flex flex-col items-center justify-center text-center">
                                        <CalendarDays className="w-5 h-5 text-gold" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h5 className="font-semibold text-foreground text-sm leading-snug">{ev.name}</h5>
                                        <p className="text-xs text-muted-foreground mt-0.5">{ev.partner}</p>
                                        <div className="flex gap-3 mt-2">
                                            <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{ev.type}</span>
                                            <span className="text-xs text-muted-foreground">{ev.date}</span>
                                            <span className="text-xs text-muted-foreground">{ev.attendees} attendees</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CONSULTANCY ──────────────────────────────────── */}
            <section className="section-padding bg-muted/40">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Industry Services" title="Research Consultancy & Testing" description="AJCE offers expert technical consultancy and laboratory testing services to industries, government bodies, and NGOs through its NABL-accredited labs and domain experts." />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {[
                            { icon: Layers, title: "Material & Structural Testing", desc: "Concrete compression, tensile, flexural, and non-destructive testing for construction projects through our NABL-accredited Civil Engineering lab.", price: "Starting ₹2,500/test", clients: "Kerala PWD, KSRTC, private contractors" },
                            { icon: Cpu, title: "AI & Software Solutions", desc: "Custom ML model development, data pipeline engineering, computer vision solutions, and NLP systems for enterprise and government clients.", price: "Project-based pricing", clients: "Startups, MSMEs, Govt. agencies" },
                            { icon: Zap, title: "Energy Auditing & Solar Design", desc: "Comprehensive energy audits, solar PV system sizing, smart grid feasibility studies, and power quality analysis for industrial and commercial clients.", price: "Starting ₹15,000/audit", clients: "Industry, Municipalities, KSEB" },
                            { icon: Microscope, title: "Electronics & Embedded System Design", desc: "PCB prototyping, FPGA implementation, IoT device development, and EMI/EMC pre-compliance testing for product companies.", price: "Project-based pricing", clients: "Electronics OEMs, Startups" },
                            { icon: BarChart3, title: "Data Analytics & Modelling", desc: "Statistical analysis, geospatial modelling, predictive analytics dashboards, and data warehousing for government and corporate data teams.", price: "Project-based pricing", clients: "Banks, Agri-dept, Telecoms" },
                            { icon: HeartHandshake, title: "Environmental Impact Assessment", desc: "Noise, air, water quality assessments plus GIS mapping and biodiversity surveys for EIA and ESIA compliance under regulatory norms.", price: "Starting ₹40,000/report", clients: "Industries, Infrastructure firms" },
                        ].map((s, i) => (
                            <motion.div key={s.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-6 bg-card rounded-2xl border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300">
                                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                                    <s.icon className="w-5 h-5 text-gold" />
                                </div>
                                <h4 className="font-bold text-foreground text-sm mb-2">{s.title}</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                                <div className="border-t border-border pt-3 space-y-1">
                                    <p className="text-xs font-semibold text-gold">{s.price}</p>
                                    <p className="text-xs text-muted-foreground">Clients: {s.clients}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-6 items-center justify-between p-6 bg-card rounded-2xl border border-gold/20">
                        <div>
                            <h4 className="font-bold text-foreground mb-1">Need a Custom Research or Testing Service?</h4>
                            <p className="text-sm text-muted-foreground">Contact our R&D Consultancy Cell for a tailored quote and feasibility discussion.</p>
                        </div>
                        <div className="flex flex-wrap gap-3 flex-shrink-0">
                            <a href="mailto:rnd@ajce.in" className="flex items-center gap-2 px-5 py-2.5 bg-gold text-navy font-semibold rounded-full text-sm hover:bg-gold/90 transition-colors">
                                <Mail className="w-4 h-4" /> rnd@ajce.in
                            </a>
                            <a href="tel:+914828216144" className="flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-full text-sm hover:border-gold/40 transition-colors">
                                <Phone className="w-4 h-4" /> +91 4828 216144
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────── */}
            <section className="section-padding bg-gradient-to-br from-navy via-navy-light to-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(rgba(201,168,76,0.6) 1px, transparent 1px)`, backgroundSize: "30px 30px" }} />
                <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
                <div className="relative max-w-3xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <FlaskConical className="w-12 h-12 text-gold mx-auto mb-6" />
                        <h2 className="heading-lg text-white mb-4">Ready to Research with Us?</h2>
                        <p className="text-white/60 body-md mb-8">
                            Whether you are a prospective PhD scholar, an industry partner looking for collaborative R&D, or a faculty member seeking to join our research ecosystem — we would love to connect.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="/contact" className="px-8 py-3 bg-gold text-navy font-bold rounded-full hover:bg-gold/90 transition-colors">
                                Get in Touch
                            </a>
                            <a href="/academics" className="px-8 py-3 border border-white/25 text-white rounded-full hover:border-gold/50 transition-colors">
                                Explore Academics
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
