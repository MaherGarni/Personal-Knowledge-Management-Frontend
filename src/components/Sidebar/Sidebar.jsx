import { Link, useNavigate } from "react-router"
import { Home, Info, FolderTree } from "lucide-react";
import "./styles.css"

import * as userAPI from "../../utilities/user-api"

export default function Sidebar({ user, setUser }) {
    const navigate = useNavigate();

    function handleLogout() {
        usersAPI.logout()
        setUser(null);
        navigate("/")
    }

    if (user) {
        return (
            <>
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
                        <form id="logout-form" onSubmit={handleLogout}>
                            <button type="submit">Log out</button>
                        </form>
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
                            <Link to="/login">
                                <div className="sidebar-link">
                                    <Home size={18} />
                                    <p>Login</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/signuo">
                                <div className="sidebar-link">
                                    <FolderTree size={18} />
                                    <p>SignUp</p>
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
}
