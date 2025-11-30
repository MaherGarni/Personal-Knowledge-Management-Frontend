'use client';
import { Bar, BarChart, XAxis, YAxis, Tooltip } from "recharts"
export default function BarChartComponent({ technicalMasteryOverview }) {
    const technicalMaseryShorterNames = {
        "Frontend Development": "Frontend Dev",
        "Backend Development": "Backend Dev",
        "Core Programming & CS Fundamentals": "CS Fundamentals",
        "Software Design & Architecture": "Software Design",
        "Databases & Data Management": "Databases",
        "Cloud, DevOps & Infrastructure": "DevOps",
        "Testing & Quality Assurance": "Testing",
        "System Design & Scalability": "System Design",
        "Security & Cybersecurity Awareness": "Security",
        "Software Engineering Practices": "Software Engineering",
        "AI / Machine Learning & Data Skills": "AI/ML",
    }
    const technicalMasteryOverviewData = technicalMasteryOverview.map(elem => ({
        ...elem,
        name: technicalMaseryShorterNames[elem['name']]
    }))
    return (
        <BarChart style={{ width: "100%", marginTop: "1.5rem", marginBottom : "0,5rem"}} height={400}  data={technicalMasteryOverviewData}>
            <Bar dataKey={"rating"} fill="#3B82F6" radius={[8, 8, 0, 0]} />
            <XAxis
                dataKey={'name'}
                interval={0}
                tick={{ fontSize: 10}}
            />
            <YAxis />
            <Tooltip />
        </BarChart>
    )
}
