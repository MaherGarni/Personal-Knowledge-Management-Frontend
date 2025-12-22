import "./styles.css"
import { Target, TrendingUp, Award, BookOpen } from "lucide-react"
export default function DashboardCard({ name, icon, data, description }) {
    const icons = {
        Target: {
            icon: Target,
            color: "blue"
        },
        TrendingUp: {
            icon: TrendingUp,
            color: "yellow"
        },
        Award: {
            icon: Award,
            color: "green"
        },
        BookOpen: {
            icon: BookOpen,
            color: "purple"
        },
    };
    const Icon = icons[icon].icon;
    return (
        <>
            <div className="dashboard-card">
                <div className="dashboard-card-header">
                    <div className="name">{name}</div>
                    <div className="icon">
                        <Icon size={24} color={icons[icon].color}/>
                    </div>
                </div>
                <div className="data"><span style={{fontSize: "24px", fontWeight: "bold", color : 'var(--text-primary'}}>{data}</span></div>
                <div className="description">{description}</div>
            </div>
        </>
    )
}
