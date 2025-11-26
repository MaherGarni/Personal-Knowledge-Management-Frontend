import "./styles.css"
import DashboardCard from "../../components/DashboardCard/DashboardCard"
import { useEffect, useState } from "react"

import * as dashboardAPI from "../../utilities/dashboard-api"
export default function Dashboard() {    
    const [cardsData, setCardsData] = useState([])
    useEffect(() => {
        async function getDahboardData() {
            const dashboardData = await dashboardAPI.index()
            setCardsData([...dashboardData.user_data])
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
