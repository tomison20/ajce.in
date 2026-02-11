// ============================================================
// AJCE Website — Core Type Definitions
// ============================================================

export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
    description?: string;
    icon?: string;
}

export interface Department {
    id: string;
    slug: string;
    name: string;
    shortName: string;
    icon: string;
    description: string;
    hod: FacultyMember;
    vision: string;
    mission: string[];
    programs: Program[];
    faculty: FacultyMember[];
    labs: Laboratory[];
    achievements: string[];
    image: string;
    studentCount: number;
    established: number;
}

export interface Program {
    id: string;
    name: string;
    slug: string;
    level: 'undergraduate' | 'postgraduate' | 'doctoral';
    department: string;
    duration: string;
    description: string;
    eligibility: string;
    seats: number;
    icon: string;
}

export interface FacultyMember {
    id: string;
    name: string;
    designation: string;
    qualification: string;
    department: string;
    email: string;
    phone?: string;
    specialization: string[];
    image: string;
    publications?: number;
    experience?: string;
}

export interface Laboratory {
    name: string;
    description: string;
    equipment: string[];
    image?: string;
}

export interface NewsArticle {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: 'academic' | 'achievement' | 'event' | 'announcement' | 'general';
    date: string;
    image: string;
    author: string;
    featured: boolean;
}

export interface Event {
    id: string;
    slug: string;
    title: string;
    description: string;
    date: string;
    endDate?: string;
    time: string;
    venue: string;
    category: 'academic' | 'cultural' | 'technical' | 'sports' | 'workshop' | 'seminar';
    image: string;
    registrationLink?: string;
    featured: boolean;
}

export interface PlacementStat {
    year: string;
    studentsPlaced: number;
    totalStudents: number;
    highestPackage: string;
    averagePackage: string;
    companiesVisited: number;
}

export interface Recruiter {
    name: string;
    logo: string;
    category: 'it' | 'core' | 'consulting' | 'startup';
}

export interface AlumniStory {
    id: string;
    name: string;
    batch: string;
    department: string;
    company: string;
    designation: string;
    testimonial: string;
    image: string;
}

export interface Statistic {
    label: string;
    value: number;
    suffix?: string;
    prefix?: string;
    icon: string;
}

export interface TimelineItem {
    year: string;
    title: string;
    description: string;
}

export interface Accreditation {
    name: string;
    grade?: string;
    validTill?: string;
    logo: string;
    description: string;
}

export interface ContactInfo {
    department: string;
    name: string;
    designation: string;
    email: string;
    phone: string;
    extension?: string;
}

export interface AdmissionFormData {
    fullName: string;
    email: string;
    phone: string;
    program: string;
    category: string;
    dateOfBirth: string;
    guardianName: string;
    guardianPhone: string;
    address: string;
    tenthPercentage: string;
    twelfthPercentage: string;
    entranceExam: string;
    entranceRank: string;
    message?: string;
}
