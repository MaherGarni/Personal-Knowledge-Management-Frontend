import "./styles.css"
import DashboardCard from "../../components/DashboardCard/DashboardCard"
import { useEffect, useState } from "react"

import * as dashboardAPI from "../../utilities/dashboard-api"
import BarChartComponent from "../../components/BarChartComponent/BarChartComponent"
export default function Dashboard() {
    const [cardsData, setCardsData] = useState([])
    const [technicalMasteryOverview, setTechnicalMasteryOverview] = useState([])
    // define dummy data for the soft skills and personal skills charts
    const doftSkillsData = []
    useEffect(() => {
        async function getDahboardData() {
            const dashboardData = await dashboardAPI.index()
            setCardsData([...dashboardData.userStats])
            setTechnicalMasteryOverview([...dashboardData.technicalMasteryOverview])
        } getDahboardData()
    }, [])

    if (!cardsData) return (<h1>loading...</h1>)
    if (!technicalMasteryOverview) return (<h1>loading...</h1>)
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
                <div className="skills-overview">
                    <div className="overview-header">
                        <span
                            className="category-color-dot"
                            style={{ backgroundColor: "#3B82F6" }}
                        />
                        <h2>Technical Mastery</h2>
                    </div>
                    <p>Core technical skills and competencies</p>
                    <BarChartComponent dataSet={technicalMasteryOverview} />
                </div>

                {/* <div className="soft-personal-skills-container">
                    <div className="skills-overview">
                        <div className="overview-header">
                            <span
                                className="category-color-dot"
                                style={{ backgroundColor: "yellow" }}
                            />
                            <h2>Soft & Interpersonal Skills</h2>
                        </div>
                        <p>Essential skills for effective communication, teamwork, and leadership</p>
                        <BarChartComponent dataSet={technicalMasteryOverview}/>
                    </div>
                    <div className="skills-overview">
                        <div className="overview-header">
                            <span
                                className="category-color-dot"
                                style={{ backgroundColor: "green" }}
                            />
                            <h2>Personal & Habitual Skills</h2>
                        </div>
                        <p>Self-management and personal growth</p>
                        <BarChartComponent dataSet={technicalMasteryOverview}/>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
