import { NavItem } from "@/types";

export const mainNavigation: NavItem[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about",
        children: [
            { label: "College Overview", href: "/about#overview", description: "Learn about AJCE's legacy and vision" },
            { label: "Vision & Mission", href: "/about#vision-mission", description: "Our guiding principles" },
            { label: "History & Milestones", href: "/about#history", description: "A journey of excellence since 2001" },
            { label: "Accreditations", href: "/about#accreditations", description: "NAAC, NBA and more" },
            { label: "Leadership", href: "/about#leadership", description: "Meet our administration team" },
        ],
    },
    {
        label: "Academics",
        href: "/academics",
        children: [
            { label: "B.Tech Programs", href: "/academics#undergraduate", description: "6 undergraduate engineering programs" },
            { label: "M.Tech Programs", href: "/academics#postgraduate", description: "Postgraduate specializations" },
            { label: "MCA Program", href: "/academics#mca", description: "Master of Computer Applications" },
            { label: "Academic Calendar", href: "/academics#calendar", description: "Important dates and schedules" },
        ],
    },
    {
        label: "Admissions",
        href: "/admissions",
        children: [
            { label: "Admission Process", href: "/admissions#process", description: "Step-by-step guide" },
            { label: "Eligibility", href: "/admissions#eligibility", description: "Requirements for each program" },
            { label: "Fee Structure", href: "/admissions#fees", description: "Transparent fee details" },
            { label: "Scholarships", href: "/admissions#scholarships", description: "Financial aid & merit awards" },
            { label: "Apply Now", href: "/admissions#apply", description: "Start your application" },
        ],
    },
    {
        label: "Departments",
        href: "/departments",
        children: [
            { label: "Computer Science & Engineering", href: "/departments/cse", description: "CSE Department" },
            { label: "Electronics & Communication", href: "/departments/ece", description: "ECE Department" },
            { label: "Electrical & Electronics", href: "/departments/eee", description: "EEE Department" },
            { label: "Mechanical Engineering", href: "/departments/me", description: "ME Department" },
            { label: "Civil Engineering", href: "/departments/ce", description: "CE Department" },
            { label: "AI & Data Science", href: "/departments/aids", description: "AI&DS Department" },
            { label: "MCA", href: "/departments/mca", description: "MCA Department" },
            { label: "Applied Sciences", href: "/departments/as", description: "Science & Humanities" },
        ],
    },
    {
        label: "Research",
        href: "/research",
    },
    {
        label: "Placements",
        href: "/placements",
    },
    {
        label: "Campus Life",
        href: "/campus-life",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];
