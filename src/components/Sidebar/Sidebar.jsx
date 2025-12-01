import { Link, useNavigate } from "react-router"
import { Home, Info, LayoutGrid, LogIn, UserPlus} from "lucide-react";
import "./styles.css"

import * as userAPI from "../../utilities/user-api"

export default function Sidebar({ user, setUser }) {
    const navigate = useNavigate();

    function handleLogout() {
        userAPI.logout()
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
                            <Link to="/dashboard">
                                <div className="sidebar-link">
                                    <Home size={16} />
                                    <p>Dashboard</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/categories">
                                <div className="sidebar-link">
                                    <LayoutGrid size={16} />
                                    <p>Categories</p>
                                </div>
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/about">
                                <div className="sidebar-link">
                                    <Info size={16} />
                                    <p>About</p>
                                </div>
                            </Link>
                        </li> */}
                        {/* <form id="logout-form" onSubmit={handleLogout}>
                            <button type="submit">Log out</button>
                        </form> */}
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
                                    <LogIn size={16} />
                                    <p>Login</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/signup">
                                <div className="sidebar-link">
                                    <UserPlus size={16} />
                                    <p>SignUp</p>
                                </div>
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/about">
                                <div className="sidebar-link">
                                    <Info size={16} />
                                    <p>About</p>
                                </div>
                            </Link>
                        </li> */}
                    </ul>
                </nav>
            </aside>
        )
    }
}
