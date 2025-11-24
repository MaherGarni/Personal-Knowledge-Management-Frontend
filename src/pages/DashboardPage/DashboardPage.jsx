import "./styles.css"
import DashboardCard from "../../components/DashboardCard/DashboardCard"
export default function Dashboard() {
    const cardsData = [
        {
            name: "Total Skills",
            icon: "Target",
            data: 24,
            description: "Across all categories"
        },
        {
            name: "In Progress",
            icon: "TrendingUp",
            data: 5,
            description: "Currently learning"
        },
        {
            name: "Mastered Skills",
            icon: "Award",
            data: 19,
            description: "Skills mastered"
        },
        {
            name: "Lessons",
            icon: "BookOpen",
            data: 12,
            description: "Total entries"
        }
    ]

    return (
        <div className="dashboard-page">
            <div className="page-header">
                <h2>Dashboard</h2>
                <p>Track your progress and skill development</p>
            </div>
            <div className="dashboard-cards">
                {cardsData.map((card, index) => (
                    <DashboardCard key={index} name={card.name} icon={card.icon} data={card.data} description={card.description} />
                ))}
            </div>
        </div>
    )
}
