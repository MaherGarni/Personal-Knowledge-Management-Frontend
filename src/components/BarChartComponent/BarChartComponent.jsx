'use client';
import { Bar, BarChart } from "recharts"
export default function BarChartComponent() {
    const technicalMaseryOverview = [
            { name: "Frontend Development", rating: 85 },
            { name: "Software Design & Architecture", rating: 78 },
            { name: "Cloud, DevOps & Infrastructure", rating: 72 },
            { name: "Testing & Quality Assurance", rating: 80 },
            { name: "Databases & Data Management", rating: 75 },
            { name: "Security & Cybersecurity Awareness", rating: 70 },
            { name: "System Design & Scalability", rating: 68 },
            { name: "Software Engineering Practices", rating: 82 },
            { name: "AI / Machine Learning & Data Skills", rating: 65 },
            { name: "Core Programming & CS Fundamentals", rating: 88 },
            { name: "Backend Development", rating: 77 },
        ]
    return (
        <BarChart width={400} height={400} data={technicalMaseryOverview}>
            <Bar dataKey={"rating"}/>
        </BarChart>
    )
}
