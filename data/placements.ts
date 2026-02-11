import { PlacementStat, Recruiter, AlumniStory, Statistic, TimelineItem, Accreditation } from "@/types";

export const placementStats: PlacementStat[] = [
    { year: "2025", studentsPlaced: 520, totalStudents: 548, highestPackage: "₹18 LPA", averagePackage: "₹5.8 LPA", companiesVisited: 85 },
    { year: "2024", studentsPlaced: 498, totalStudents: 530, highestPackage: "₹16 LPA", averagePackage: "₹5.2 LPA", companiesVisited: 78 },
    { year: "2023", studentsPlaced: 475, totalStudents: 515, highestPackage: "₹14 LPA", averagePackage: "₹4.8 LPA", companiesVisited: 72 },
    { year: "2022", studentsPlaced: 442, totalStudents: 500, highestPackage: "₹12 LPA", averagePackage: "₹4.5 LPA", companiesVisited: 65 },
];

export const topRecruiters: Recruiter[] = [
    { name: "TCS", logo: "/recruiters/tcs.png", category: "it" },
    { name: "Infosys", logo: "/recruiters/infosys.png", category: "it" },
    { name: "Wipro", logo: "/recruiters/wipro.png", category: "it" },
    { name: "Cognizant", logo: "/recruiters/cognizant.png", category: "it" },
    { name: "UST Global", logo: "/recruiters/ust.png", category: "it" },
    { name: "HCL Technologies", logo: "/recruiters/hcl.png", category: "it" },
    { name: "Muthoot Finance", logo: "/recruiters/muthoot.png", category: "core" },
    { name: "Federal Bank", logo: "/recruiters/federal.png", category: "core" },
    { name: "L&T", logo: "/recruiters/lnt.png", category: "core" },
    { name: "Bosch", logo: "/recruiters/bosch.png", category: "core" },
    { name: "Deloitte", logo: "/recruiters/deloitte.png", category: "consulting" },
    { name: "KPMG", logo: "/recruiters/kpmg.png", category: "consulting" },
    { name: "Zoho", logo: "/recruiters/zoho.png", category: "it" },
    { name: "Quest Global", logo: "/recruiters/quest.png", category: "it" },
    { name: "IBS Software", logo: "/recruiters/ibs.png", category: "it" },
    { name: "Experion Technologies", logo: "/recruiters/experion.png", category: "startup" },
];

export const alumniStories: AlumniStory[] = [
    {
        id: "1",
        name: "Akhil Thomas",
        batch: "2018",
        department: "CSE",
        company: "Google",
        designation: "Senior Software Engineer",
        testimonial: "AJCE gave me the strong fundamentals and problem-solving mindset that helped me crack Google. The faculty mentorship and coding culture were exceptional.",
        image: "/alumni/placeholder.jpg",
    },
    {
        id: "2",
        name: "Sneha Menon",
        batch: "2019",
        department: "ECE",
        company: "Intel",
        designation: "VLSI Design Engineer",
        testimonial: "The VLSI lab at AJCE and the hands-on project experience prepared me well for my role at Intel. I'm grateful for the strong foundation.",
        image: "/alumni/placeholder.jpg",
    },
    {
        id: "3",
        name: "Rahul Nair",
        batch: "2020",
        department: "ME",
        company: "Tata Motors",
        designation: "Product Design Engineer",
        testimonial: "The mechanical department's emphasis on CAD/CAM and industry visits gave me a real-world perspective. AJCE is where my engineering journey truly began.",
        image: "/alumni/placeholder.jpg",
    },
    {
        id: "4",
        name: "Devika S",
        batch: "2021",
        department: "CSE",
        company: "Microsoft",
        designation: "Cloud Solutions Architect",
        testimonial: "The coding competitions and hackathons at AJCE sharpened my skills. The college provided every opportunity to grow beyond the classroom.",
        image: "/alumni/placeholder.jpg",
    },
];

export const homeStatistics: Statistic[] = [
    { label: "Students", value: 3000, suffix: "+", icon: "GraduationCap" },
    { label: "Departments", value: 8, suffix: "", icon: "Building2" },
    { label: "Placement Rate", value: 95, suffix: "%", icon: "TrendingUp" },
    { label: "Acres Campus", value: 62, suffix: "", icon: "MapPin" },
    { label: "Faculty Members", value: 200, suffix: "+", icon: "Users" },
    { label: "Years of Excellence", value: 24, suffix: "+", icon: "Award" },
];

export const timeline: TimelineItem[] = [
    { year: "2001", title: "Foundation", description: "Amal Jyothi College of Engineering established under the Archdiocese of Kottayam, affiliated to MG University." },
    { year: "2004", title: "MCA Program Launch", description: "Introduced the MCA program to expand computing education." },
    { year: "2008", title: "NBA Accreditation", description: "Received first NBA accreditation for CSE and ECE departments." },
    { year: "2010", title: "KTU Affiliation", description: "Affiliated to the newly established APJ Abdul Kalam Technological University (KTU)." },
    { year: "2014", title: "Research Center", description: "Established recognized research centers in CSE and ECE with Ph.D. programs." },
    { year: "2018", title: "NAAC A Grade", description: "Accredited with 'A' grade by the National Assessment and Accreditation Council." },
    { year: "2021", title: "AI&DS Department", description: "Launched the B.Tech program in Artificial Intelligence & Data Science." },
    { year: "2023", title: "Innovation Hub", description: "State-of-the-art IEDC and Innovation Center inaugurated on campus." },
    { year: "2025", title: "NAAC Reaccreditation", description: "Successfully reaccredited with 'A' grade, validating continued excellence." },
];

export const accreditations: Accreditation[] = [
    {
        name: "NAAC",
        grade: "A",
        validTill: "2030",
        logo: "/accreditations/naac.png",
        description: "National Assessment and Accreditation Council — accredited with 'A' grade.",
    },
    {
        name: "NBA",
        validTill: "2028",
        logo: "/accreditations/nba.png",
        description: "National Board of Accreditation — CSE and ECE departments accredited.",
    },
    {
        name: "AICTE",
        logo: "/accreditations/aicte.png",
        description: "All India Council for Technical Education — approved institution.",
    },
    {
        name: "KTU",
        logo: "/accreditations/ktu.png",
        description: "Affiliated to APJ Abdul Kalam Technological University, Kerala.",
    },
];
