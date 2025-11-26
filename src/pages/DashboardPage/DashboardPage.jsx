import "./styles.css"
import DashboardCard from "../../components/DashboardCard/DashboardCard"
import { useEffect, useState } from "react"

import * as dashboardAPI from "../../utilities/dashboard-api"
export default function Dashboard() {
    
    // const cardsDemoData = [
    //     {
    //         name: "Total Skills",
    //         icon: "Target",
    //         data: 24,
    //         description: "Across all categories"
    //     },
    //     {
    //         name: "In Progress",
    //         icon: "TrendingUp",
    //         data: 5,
    //         description: "Currently learning"
    //     },
    //     {
    //         name: "Mastered Skills",
    //         icon: "Award",
    //         data: 19,
    //         description: "Skills mastered"
    //     },
    //     {
    //         name: "Lessons",
    //         icon: "BookOpen",
    //         data: 12,
    //         description: "Total entries"
    //     }
    // ]
    
    const [cardsData, setCardsData] = useState([])
    useEffect(() => {
        async function getDahboardData() {
            const dashboardData = await dashboardAPI.index()
            console.log("line 39",dashboardData.test_data)
            setCardsData([...dashboardData.test_data])
        } getDahboardData()
    }, [])

    if(!cardsData) return(<h1>loading...</h1>)
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
            </div>
        </div>
    )
}
