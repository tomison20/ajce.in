"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { placementStats, departmentPlacementStats, salaryDistribution, recruiterStats, topRecruiters, alumniStories } from "@/data/placements";
import { TrendingUp, Building2, Users, Quote, Briefcase, ArrowUpRight, BarChart3, PieChart, Zap, Award, Target, BookOpen } from "lucide-react";

type RecruiterCategory = 'it' | 'core' | 'consulting' | 'startup' | 'all';

export default function PlacementsPage() {
    const latest = placementStats[0];
    const [selectedCategory, setSelectedCategory] = useState<RecruiterCategory>('all');

    const filteredRecruiters = selectedCategory === 'all' ? topRecruiters : topRecruiters.filter(r => r.category === selectedCategory);
    const categoryColors: Record<RecruiterCategory, string> = {
        all: "from-gold to-amber-500",
        it: "from-blue-500 to-blue-600",
        core: "from-orange-500 to-orange-600",
        consulting: "from-purple-500 to-purple-600",
        startup: "from-pink-500 to-pink-600",
    };

    return (
        <>
            {/* Hero */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-4">Career Outcomes</motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-xl text-white mb-6">Placements & Careers</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-lg text-white/60 max-w-2xl mx-auto">95% placement rate. 85+ companies. ₹18 LPA highest package. Industry-ready graduates across all disciplines.</motion.p>
                </div>
            </section>

            {/* Main Stats Cards */}
            <section className="relative -mt-16 z-10 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Students Placed */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }} className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                            <div className="relative bg-card rounded-2xl shadow-xl shadow-black/5 border border-border p-8 hover:border-blue-500/30 transition-colors">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                                        <Users className="w-7 h-7 text-blue-500" />
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-green-500" />
                                </div>
                                <div className="text-4xl font-bold text-foreground mb-2">{latest.studentsPlaced}</div>
                                <p className="text-sm text-muted-foreground">Students Placed</p>
                                <div className="mt-4 pt-4 border-t border-border">
                                    <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">{((latest.studentsPlaced / latest.totalStudents) * 100).toFixed(1)}%</span> placement rate</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Companies Visited */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                            <div className="relative bg-card rounded-2xl shadow-xl shadow-black/5 border border-border p-8 hover:border-orange-500/30 transition-colors">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center">
                                        <Building2 className="w-7 h-7 text-orange-500" />
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-green-500" />
                                </div>
                                <div className="text-4xl font-bold text-foreground mb-2">{latest.companiesVisited}</div>
                                <p className="text-sm text-muted-foreground">Companies Visited</p>
                                <div className="mt-4 pt-4 border-t border-border">
                                    <p className="text-xs text-muted-foreground">Across sectors and domains</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Average Package */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                            <div className="relative bg-card rounded-2xl shadow-xl shadow-black/5 border border-border p-8 hover:border-green-500/30 transition-colors">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                                        <TrendingUp className="w-7 h-7 text-green-500" />
                                    </div>
                                    <Zap className="w-5 h-5 text-yellow-500" />
                                </div>
                                <div className="text-4xl font-bold text-foreground mb-2">{latest.averagePackage}</div>
                                <p className="text-sm text-muted-foreground">Average Package</p>
                                <div className="mt-4 pt-4 border-t border-border">
                                    <p className="text-xs text-muted-foreground">Across all departments</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Highest Package */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-yellow-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                            <div className="relative bg-card rounded-2xl shadow-xl shadow-black/5 border border-border p-8 hover:border-gold/30 transition-colors">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-yellow-500/20 flex items-center justify-center">
                                        <Award className="w-7 h-7 text-gold" />
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-green-500" />
                                </div>
                                <div className="text-4xl font-bold text-foreground mb-2">{latest.highestPackage}</div>
                                <p className="text-sm text-muted-foreground">Highest Package</p>
                                <div className="mt-4 pt-4 border-t border-border">
                                    <p className="text-xs text-muted-foreground">Premium placement achieved</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Recruiter Category Stats */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Industry Breakdown" title="Recruitment by Sector" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {recruiterStats.map((stat, i) => (
                            <motion.div key={stat.category} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="relative group">
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300`} />
                                <div className="relative bg-card rounded-xl border border-border p-6 hover:border-border-hover transition-colors">
                                    <div className="text-3xl mb-2">{stat.icon}</div>
                                    <p className="text-2xl font-bold text-foreground mb-1">{stat.count}</p>
                                    <p className="text-sm text-muted-foreground">{stat.category}</p>
                                    <div className={`mt-4 h-1 bg-gradient-to-r ${stat.color} rounded-full`} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Department-wise Placement */}
            <section className="section-padding bg-muted/50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Performance Metrics" title="Department-wise Placement" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        {departmentPlacementStats.map((dept, i) => (
                            <motion.div key={dept.dept} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                                <div className="relative bg-card rounded-xl border border-border p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground">{dept.dept}</h3>
                                            <p className="text-xs text-muted-foreground mt-1">{dept.placed}/{dept.total} students placed</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-green-500">{dept.rate}%</div>
                                            <p className="text-xs text-muted-foreground">Placement Rate</p>
                                        </div>
                                    </div>
                                    <div className="h-2 bg-border rounded-full overflow-hidden mb-4">
                                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: `${dept.rate}%` }} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-xs text-muted-foreground">Average</p>
                                            <p className="font-semibold text-foreground">{dept.avg}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-muted-foreground">Highest</p>
                                            <p className="font-semibold text-gold">{dept.highest}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Salary Distribution */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Compensation Analysis" title="Salary Distribution" />
                    <div className="space-y-4">
                        {salaryDistribution.map((salary, i) => (
                            <motion.div key={salary.range} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="group">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium text-foreground">{salary.range}</span>
                                    <span className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">{salary.count}</span> students • {salary.percentage}%</span>
                                </div>
                                <div className="h-8 bg-border rounded-lg overflow-hidden relative">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${salary.percentage * 10}%` }} transition={{ delay: 0.1 + i * 0.05, duration: 0.8 }} className={`h-full bg-gradient-to-r ${salary.color} rounded-lg flex items-center justify-end pr-3 transition-all group-hover:shadow-lg group-hover:shadow-${salary.color.split(' ')[1]}/50`}>
                                        {salary.percentage > 15 && <span className="text-xs font-bold text-white">{salary.percentage}%</span>}
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-8 p-6 bg-gradient-to-br from-gold/5 to-amber-500/5 border border-gold/20 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                            <BarChart3 className="w-5 h-5 text-gold" />
                            <h4 className="font-semibold text-foreground">Key Insights</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">60% of placements are in the 5-8 LPA range, demonstrating strong mid-level compensation across departments. Premium packages above 10 LPA represent 4.2% of placements, primarily in AI&DS and CSE departments.</p>
                    </div>
                </div>
            </section>

            {/* Placement Trends */}
            <section className="section-padding bg-muted/50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Historical Growth" title="Year-wise Statistics" />
                    <div className="overflow-x-auto rounded-2xl border border-border">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gradient-to-r from-navy to-navy-light text-white">
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Year</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Placed</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Companies</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Highest</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Average</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Growth</th>
                                </tr>
                            </thead>
                            <tbody>
                                {placementStats.map((row, i) => {
                                    const growth = i > 0 ? ((row.studentsPlaced - placementStats[i - 1].studentsPlaced) / placementStats[i - 1].studentsPlaced * 100).toFixed(1) : null;
                                    return (
                                        <tr key={row.year} className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/30"} hover:bg-card/60 transition-colors`}>
                                            <td className="px-6 py-4 text-sm font-semibold text-foreground">{row.year}</td>
                                            <td className="px-6 py-4 text-sm text-muted-foreground font-medium">{row.studentsPlaced}/{row.totalStudents}</td>
                                            <td className="px-6 py-4 text-sm text-muted-foreground font-medium">{row.companiesVisited}</td>
                                            <td className="px-6 py-4 text-sm font-semibold text-gold">{row.highestPackage}</td>
                                            <td className="px-6 py-4 text-sm text-muted-foreground">{row.averagePackage}</td>
                                            <td className="px-6 py-4 text-sm font-semibold">
                                                {growth && <span className="text-green-500 flex items-center gap-1"><ArrowUpRight className="w-4 h-4" />{growth}%</span>}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Top Recruiters with Filtering */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Our Partners" title="Top Recruiters" />
                    
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {(['all', 'it', 'core', 'consulting', 'startup'] as const).map((category) => (
                            <motion.button key={category} onClick={() => setSelectedCategory(category)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category ? `bg-gradient-to-r ${categoryColors[category]} text-white shadow-lg` : "bg-card border border-border text-muted-foreground hover:border-gold/30"}`}>
                                {category === 'all' ? 'All Companies' : category.charAt(0).toUpperCase() + category.slice(1)}
                            </motion.button>
                        ))}
                    </div>

                    {/* Recruiter Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                        {filteredRecruiters.map((r, i) => (
                            <motion.div key={r.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.03 }} viewport={{ once: true }} className="p-4 bg-card rounded-xl border border-border text-center hover:border-gold/30 transition-all group hover:shadow-lg hover:shadow-gold/10">
                                <Briefcase className="w-8 h-8 text-muted-foreground/30 group-hover:text-gold/40 mx-auto mb-2 transition-colors" />
                                <span className="text-xs font-medium text-foreground group-hover:text-gold transition-colors">{r.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alumni Stories */}
            <section className="section-padding bg-muted/50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader label="Success Stories" title="Our Alumni" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {alumniStories.map((story, i) => (
                            <motion.div key={story.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-amber-500/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                <div className="relative p-6 bg-card rounded-2xl border border-border hover:border-gold/30 transition-all">
                                    <div className="flex items-start gap-4 mb-4">
                                        <Quote className="w-8 h-8 text-gold/30 flex-shrink-0 mt-1" />
                                        <div className="flex-1">
                                            <p className="text-sm text-muted-foreground italic">&ldquo;{story.testimonial}&rdquo;</p>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-border">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/20 to-navy/10 flex items-center justify-center">
                                                <Users className="w-5 h-5 text-gold/60" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-foreground text-sm">{story.name}</h4>
                                                <p className="text-xs text-muted-foreground">{story.designation}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                            <span><strong className="text-foreground">{story.company}</strong> • {story.department}</span>
                                            <span className="bg-gold/10 text-gold px-2 py-1 rounded">{story.batch}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-amber-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300" />
                        <div className="relative p-8 lg:p-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-3xl border border-gold/30 text-center">
                            <Target className="w-12 h-12 text-gold mx-auto mb-4" />
                            <h2 className="heading-lg text-white mb-4">Ready for Your Career?</h2>
                            <p className="body-lg text-white/70 mb-8">Join our network of 3000+ students who have launched successful careers with industry leaders.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 bg-gold text-navy font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/30 transition-all">
                                    Download Brochure
                                </motion.button>
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all">
                                    Contact Admissions
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
