import { useState } from "react";
import { NavLink, useNavigate } from "react-router"
import { Home, Info, LayoutGrid, LogIn, UserPlus, LogOut} from "lucide-react";
import "./styles.css"

import * as userAPI from "../../utilities/user-api"

export default function Sidebar({ user, setUser }) {
    const [isSelected, setIsSelected] = useState(false)
    const navigate = useNavigate();

    async function handleLogout() {
        await userAPI.logout()
        setUser(null);
        navigate("/")
    }

    if (user) {
        return (
            <>
                <nav>
                    <p>SKill Tracker</p>
                    <ul>
                        <li>
                            <NavLink onClick={() => setIsSelected(true)} className={`${isSelected ? '-selected' : ''}`} to="/dashboard">
                                <div className="sidebar-link">
                                    <Home size={20} />
                                    <p>Dashboard</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setIsSelected(true)} to="/categories">
                                <div className="sidebar-link">
                                    <LayoutGrid size={20} />
                                    <p>Categories</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <div className="sidebar-link logout" onClick={() => handleLogout()}>
                                <LogOut size={20} />
                                <p>Logout</p>
                            </div>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }

    if (!user) {
        return (
            <aside>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/login">
                                <div className="sidebar-link">
                                    <LogIn size={20} />
                                    <p>Login</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup">
                                <div className="sidebar-link">
                                    <UserPlus size={20} />
                                    <p>SignUp</p>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        )
    }
}
