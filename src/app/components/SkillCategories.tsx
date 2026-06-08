import { Container, Database, FlaskConical, Monitor, Server } from "lucide-react";
import { SkillWithLevel } from "../interfaces/userData";
import userData from "../../data/userData";

const skillCategories = userData.skillCategories ?? [];

const levelConfig: Record<string, { dotColor: string; badgeBg: string; badgeBorder: string; label: string }> = {
    expert: {
        dotColor: "#10b981",
        badgeBg: "#d1fae5",
        badgeBorder: "rgba(16,185,129,0.2)",
        label: "Experte",
    },
    advanced: {
        dotColor: "#3b82f6",
        badgeBg: "#dbeafe",
        badgeBorder: "rgba(59,130,246,0.2)",
        label: "Fortgeschritten",
    },
    intermediate: {
        dotColor: "#f59e0b",
        badgeBg: "#fff7ed",
        badgeBorder: "rgba(245,158,11,0.2)",
        label: "Mittel",
    },
    beginner: {
        dotColor: "#94a3b8",
        badgeBg: "#f1f5f9",
        badgeBorder: "rgba(100,116,139,0.15)",
        label: "Einsteiger",
    },
};

const iconMap = { Monitor, Server, Container, FlaskConical, Database };

type SkillCategory = typeof skillCategories[number];

function ColorDot({ level = "beginner", size = 8 }: { level?: SkillWithLevel['level']; size?: number }) {
    const config = levelConfig[level as string] ?? levelConfig.beginner;
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
            className="print:!bg-opacity-100"
        />
    );
}

function SkillBadge({ skill }: { skill: SkillWithLevel }) {
    const config = levelConfig[skill.level ?? "beginner"];
    return (
        <span
            role="listitem"
            aria-label={`${skill.name}: ${config.label}`}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm border no-print-break print:ring print:ring-gray-300"
            style={{
                backgroundColor: config.badgeBg,
                borderColor: config.badgeBorder,
            }}
        >
            <ColorDot level={skill.level} />
            <span className="font-medium whitespace-nowrap">{skill.name}</span>
            <span className="text-xs font-normal text-slate-500">
                {skill.yearsOfExperience ?? 0} J.
            </span>
        </span>
    );
}

function LegendItem({ level }: { level: SkillWithLevel['level'] }) {
    const config = levelConfig[level as string];
    return (
        <span className="inline-flex items-center gap-1.5" aria-label={config.label}>
            <ColorDot level={level} size={7} />
            <span className="text-xs font-medium text-slate-600">{config?.label}</span>
        </span>
    );
}

function CategoryCard({ category }: { category: SkillCategory }) {
    const IconKey = category.icon as keyof typeof iconMap;
    const IconComponent = category.icon ? (iconMap[IconKey] ?? Monitor) : Monitor;
    const sortOrder: Record<string, number> = { expert: 0, advanced: 1, intermediate: 2, beginner: 3 };
    const sortedSkills = [...category.skills].sort(
        (a, b) => (sortOrder[a.level ?? "beginner"] - sortOrder[b.level ?? "beginner"]) || ((b.yearsOfExperience ?? 0) - (a.yearsOfExperience ?? 0))
    );

    return (
        <div role="region" aria-label={`Skills-Kategorie: ${category.label}`} className="rounded-2xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow no-print-break">
            <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 text-slate-500 shrink-0">
                    <IconComponent size={20} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-semibold tracking-wide truncate" style={{ color: "#1e293b" }}>
                    {category.label}
                </h3>
                <span className="ml-auto text-xs font-semibold rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700">
                    {category.skills.length}
                </span>
            </div>
            <div className="flex flex-wrap gap-2" role="list">
                {sortedSkills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                ))}
            </div>
        </div>
    );
}

function SkillCategories() {
    const totalSkills = skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0);
    const expertCount = skillCategories.reduce(
        (sum, cat) => sum + cat.skills.filter((s) => s.level === "expert").length,
        0
    );

    if (totalSkills === 0) return null;

    return (
        <div className="mt-8">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.15em] text-gray-400 mb-4">
                Fähigkeiten & Technologien
            </h2>

            <p className="text-sm max-w-lg text-gray-500 mb-6 print:text-gray-600">
                {totalSkills} Technologien in {skillCategories.length} Kategorien — {expertCount} auf Experten-Niveau
            </p>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 no-print-break bg-gray-50 rounded-lg p-3 border border-gray-100" role="navigation" aria-label="Legende für Erfahrungsstufen">

                {Object.keys(levelConfig).map((level) => (
                    <LegendItem key={level} level={level as SkillWithLevel['level']} />
                ))}
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 page-break-before">
                {skillCategories.map((category) => (
                    <CategoryCard key={category.key} category={category} />
                ))}
            </div>

            <p className="mt-4 text-xs text-gray-400 print:text-gray-500 italic">
                Erfahrungsjahre beziehen sich auf den professionellen Einsatz in Produktivprojekten
            </p>
        </div>
    );
}

export default SkillCategories;
