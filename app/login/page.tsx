"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, User, ArrowRight } from "lucide-react";
import Link from "next/link";

const roles = [
    { id: "student", label: "Student Login" },
    { id: "faculty", label: "Faculty Login" },
    { id: "admin", label: "Admin Portal" },
];

export default function LoginPage() {
    const [activeRole, setActiveRole] = useState("student");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left Interface */}
            <div className="flex items-center justify-center p-8 bg-background relative">
                <Link href="/" className="absolute top-8 left-8 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    ← Back to Home
                </Link>

                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h1 className="heading-lg text-foreground mb-2">Welcome Back</h1>
                        <p className="text-muted-foreground">Sign in to your AJCE account</p>
                    </div>

                    {/* Role Tabs */}
                    <div className="flex p-1 bg-muted rounded-lg">
                        {roles.map((role) => (
                            <button
                                key={role.id}
                                onClick={() => setActiveRole(role.id)}
                                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${activeRole === role.id
                                        ? "bg-background text-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {role.label}
                            </button>
                        ))}
                    </div>

                    {/* Form */}
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">
                                {activeRole === "admin" ? "Username / Email" : "College ID"}
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder={activeRole === "student" ? "AJCE2025CS101" : "Enter your ID"}
                                    className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-medium text-foreground">Password</label>
                                <Link href="#" className="text-xs text-gold hover:underline">Forgot password?</Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-10 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2.5 bg-navy dark:bg-gold text-white dark:text-navy font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        >
                            Sign In <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    {activeRole === "student" && (
                        <p className="text-center text-xs text-muted-foreground">
                            New student? <Link href="/admissions" className="text-gold hover:underline">Apply for admission</Link>
                        </p>
                    )}
                </div>
            </div>

            {/* Right Banner */}
            <div className="hidden lg:flex relative bg-navy overflow-hidden items-center justify-center p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 75% 25%, rgba(201,168,76,0.3) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(139,26,43,0.3) 0%, transparent 50%)`,
                    }}
                />
                <div className="relative z-10 text-center max-w-lg">
                    <motion.div
                        key={activeRole}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="heading-lg text-white mb-4">
                            {activeRole === "student" && "Access Learning Resources"}
                            {activeRole === "faculty" && "Manage Your Classes"}
                            {activeRole === "admin" && "Administrative Control"}
                        </h2>
                        <p className="body-md text-white/70">
                            {activeRole === "student" && "View attendance, grades, course materials, and campus updates in one place."}
                            {activeRole === "faculty" && "Update attendance, upload marks, share resources, and interact with students."}
                            {activeRole === "admin" && "Manage student records, faculty data, departments, and system settings."}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
