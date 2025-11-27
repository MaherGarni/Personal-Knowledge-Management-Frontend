import "./styles.css"
import DashboardCard from "../../components/DashboardCard/DashboardCard"
import BarChart from "../../components/BarChartComponent/BarChartComponent"
import { useEffect, useState } from "react"

import * as dashboardAPI from "../../utilities/dashboard-api"
import BarChartComponent from "../../components/BarChartComponent/BarChartComponent"
export default function Dashboard() {
    const [cardsData, setCardsData] = useState([])
    // technical mastery skills [ Frontend Development,Software Design & Architecture,Cloud, DevOps & Infrastructure,Testing & Quality Assurance,Databases & Data Management,Security & Cybersecurity Awareness,System Design & Scalability,Software Engineering Practices,AI / Machine Learning & Data Skills,Core Programming & CS Fundamentals,Backend Development]
    // just name and rating. generate randome ratings for now. rating is out of 100


    const [currentSkillDomainOverview, setCurrentSkillDomainOverview] = useState(null)
    console.log(currentSkillDomainOverview);

    useEffect(() => {
        async function getDahboardData() {
            const dashboardData = await dashboardAPI.index()
            setCardsData([...dashboardData.user_data])
        } getDahboardData()
    }, [])

    if (!cardsData) return (<h1>loading...</h1>)
    return (
        <div className="dashboard-page">
            <div className="dashboard-content">
                <div className="page-header">
                    <h1>Dashboard</h1>
                    <p>Track your progress and skill development</p>
                </div>
                <div className="dashboard-cards">
                    {cardsData.map((card, index) => (
                        <DashboardCard key={index} name={card.name} icon={card.icon} data={card.data} description={card.description} />
                    ))}
                </div>
                <div className="skill-domain-overview">
                    <h3>Skill Level Overview</h3>
                    <p>Current proficiency across all skills</p>
                    <BarChartComponent/>
                </div>
            </div>
        </div>
    )
}
