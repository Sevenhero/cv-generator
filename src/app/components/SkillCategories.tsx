import { Container, Database, FlaskConical, Monitor, Server } from "lucide-react";
import { SkillCategory, SkillWithLevel } from "../interfaces/userData";

import { useState } from "react";
import userData from "../../data/userData";

const skillCategories = userData.skillCategories ?? []

const levelConfig = {
    expert: {
        dotColor: "#10b981",
        badgeBg: "#d1fae5",
        badgeBgHover: "#a7f3d0",
        badgeBorder: "rgba(16,185,129,0.2)",
        badgeBorderHover: "rgba(16,185,129,0.4)",
        label: "Experte",
    },
    advanced: {
        dotColor: "#3b82f6",
        badgeBg: "#dbeafe",
        badgeBgHover: "#bfdbfe",
        badgeBorder: "rgba(59,130,246,0.2)",
        badgeBorderHover: "rgba(59,130,246,0.4)",
        label: "Fortgeschritten",
    },
    intermediate: {
        dotColor: "#f59e0b",
        badgeBg: "#fff7ed",
        badgeBgHover: "#ffedd5",
        badgeBorder: "rgba(245,158,11,0.2)",
        badgeBorderHover: "rgba(245,158,11,0.4)",
        label: "Mittel",
    },
    beginner: {
        dotColor: "#94a3b8",
        badgeBg: "#f1f5f9",
        badgeBgHover: "#e2e8f0",
        badgeBorder: "rgba(100,116,139,0.15)",
        badgeBorderHover: "rgba(100,116,139,0.3)",
        label: "Einsteiger",
    },
};

const iconMap = { Monitor, Server, Container, FlaskConical, Database };
type IconKey = keyof typeof iconMap;

function ColorDot({ level = "beginner", size = 8 }: { level?: SkillWithLevel['level'], size?: number }) {
    const config = levelConfig[level];
    return (
        <span
            aria-label={config.label}
            style={{
                display: "inline-block",
                width: size,
                height: size,
                borderRadius: "50%",
                backgroundColor: config.dotColor,
                boxShadow: `0 0 5px ${config.dotColor}44`,
                flexShrink: 0,
            }}
        />
    );
}

function SkillBadge({ skill }: { skill: SkillWithLevel }) {
    const [hovered, setHovered] = useState(false);
    const config = levelConfig[skill.level ?? "beginner"];

    return (
        <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-all duration-200 cursor-default"
            style={{
                backgroundColor: hovered ? config.badgeBgHover : config.badgeBg,
                border: "1px solid",
                borderColor: hovered ? config.badgeBorderHover : config.badgeBorder,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <ColorDot level={skill.level} />
            <span className="font-medium" style={{ color: "#334155" }}>
                {skill.name}
            </span>
            <span className="text-xs font-normal" style={{ color: "#64748b" }}>
                {skill.yearsOfExperience} J.
            </span>
        </span>
    );
}

function LegendItem({ level }: { level: SkillWithLevel['level'] }) {
    const config = levelConfig[level ?? "beginner"];
    return (
        <span className="inline-flex items-center gap-1.5">
            <ColorDot level={level} size={7} />
            <span className="text-xs font-medium" style={{ color: "#64748b" }}>
                {config.label}
            </span>
        </span>
    );
}

function Legend() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-8 px-4">
            <span
                className="text-xs font-semibold uppercase tracking-widest mr-1"
                style={{ color: "#94a3b8" }}
            >
                Erfahrungsstufe
            </span>
            {Object.keys(levelConfig).map((level) => (
                <LegendItem key={level} level={level as SkillWithLevel['level']} />
            ))}
        </div>
    );
}

function CategoryCard({ category }: { category: SkillCategory }) {
    const [hovered, setHovered] = useState(false);
    const IconComponent = category.icon && category.icon in iconMap
        ? iconMap[category.icon as IconKey]
        : null;

    const sortOrder = { expert: 0, advanced: 1, intermediate: 2, beginner: 3 };
    const sortedSkills = [...category.skills].sort(
        (a, b) =>
            sortOrder[a.level ?? "beginner"] - sortOrder[b.level ?? "beginner"] ||
            (b.yearsOfExperience ?? 0) - (a.yearsOfExperience ?? 0)
    );

    return (
        <div
            className="rounded-2xl p-6 transition-all duration-300 ease-out"
            style={{
                backgroundColor: "#ffffff",
                border: "1px solid",
                borderColor: hovered ? "rgba(59,130,246,0.25)" : "#e2e8f0",
                transform: hovered ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hovered
                    ? "0 20px 40px rgba(59,130,246,0.08), 0 8px 16px rgba(0,0,0,0.06)"
                    : "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="flex items-center gap-3 mb-5">
                <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-300"
                    style={{
                        backgroundColor: hovered ? "#eff6ff" : "#f1f5f9",
                    }}
                >
                    {IconComponent && (
                        <IconComponent
                            size={20}
                            style={{
                                color: hovered ? "#3b82f6" : "#64748b",
                                transition: "color 0.3s ease",
                            }}
                            strokeWidth={1.8}
                        />
                    )}
                </div>
                <h3
                    className="text-lg font-semibold tracking-wide transition-colors duration-300"
                    style={{ color: "#1e293b" }}
                >
                    {category.label}
                </h3>
                <span
                    className="ml-auto text-xs font-semibold rounded-full px-2.5 py-0.5"
                    style={{
                        color: "#1e293b",
                        backgroundColor: "#e2e8f0",
                    }}
                >
                    {category.skills.length}
                </span>
            </div>

            <div className="flex flex-wrap gap-2">
                {sortedSkills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                ))}
            </div>
        </div>
    );
}

function SkillCategories() {
    const totalSkills = skillCategories.reduce(
        (sum, cat) => sum + cat.skills.length,
        0
    );
    const expertCount = skillCategories.reduce(
        (sum, cat) => sum + cat.skills.filter((s) => s.level === "expert").length,
        0
    );

    return (
        <>
            {skillCategories && skillCategories.length > 0 && <div
                className="lg:px-8 break-before-page"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-6">
                        <h2
                            className="text-3xl sm:text-2xl font-bold mb-3"
                            style={{ color: "#0f172a" }}
                        >
                            Fähigkeiten & Technologien
                        </h2>
                        <p
                            className="text-sm max-w-lg mx-auto"
                            style={{ color: "#64748b" }}
                        >
                            {totalSkills} Technologien in {skillCategories.length} Kategorien
                            — {expertCount} auf Experten-Niveau
                        </p>
                    </div>

                    <Legend />

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {skillCategories.map((category) => (
                            <CategoryCard key={category.key} category={category} />
                        ))}
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-xs" style={{ color: "#94a3b8" }}>
                            Erfahrungsjahre beziehen sich auf den professionellen Einsatz in Produktivprojekten
                        </p>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default SkillCategories;