import { Link } from "react-router"
import { Home, Info, FolderTree } from "lucide-react";
import "./styles.css"
export default function Sidebar() {
    return (
        <aside>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">
                            <div className="sidebar-link">
                                <Home size={18} />
                                <p>Dashboard</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/categories">
                            <div className="sidebar-link">
                                <FolderTree size={18} />
                                <p>Categories</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <div className="sidebar-link">
                                <Info size={18} />
                                <p>About</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
