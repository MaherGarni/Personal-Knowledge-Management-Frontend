// IMPORTS
import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router";

// APIs
import * as usersAPI from "../../utilities/user-api";


export default function LoginPage({ user, setUser }) {
    const initialState = { username: "", password: "" }
    const [formData, setFormData] = useState(initialState)
    const navigate = useNavigate()

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    async function handleLogin(evt) {
        try {
            evt.preventDefault();
            const loggedInUser = await usersAPI.login(formData);
            setUser(loggedInUser);
            navigate("/categories");
        } catch (err) {
            console.log(err)
            setUser(null);
        }
    }

    return (
        <>
            {!user && (
                <div className="login-wrapper">
                    <form onSubmit={handleLogin} className="login-card">
                        <h1 className="login-title">Welcome Back 👋</h1>

                        <div className="login-field">
                            <label htmlFor="id_username">Username</label>
                            <input
                                value={formData.username}
                                type="text"
                                name="username"
                                required
                                id="id_username"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="login-field">
                            <label htmlFor="id_password">Password</label>
                            <input
                                value={formData.password}
                                type="password"
                                name="password"
                                required
                                id="id_password"
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="login-btn">Login</button>

                        <p className="login-note">Track your learning. Grow every day 🌱</p>
                    </form>
                </div>
            )}
        </>
    );

}