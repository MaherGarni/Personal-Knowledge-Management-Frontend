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

    const [isSubmitting, setIsSubmitting] = useState(false)

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    async function handleLogin(evt) {
        try {
            evt.preventDefault();
            setIsSubmitting(true)
            const loggedInUser = await usersAPI.login(formData);
            setUser(loggedInUser);
            navigate("/categories");
        } catch (err) {
            console.log(err)
            setUser(null);
        }
        finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            {!user && (
                <div className="login-wrapper">
                    <div className="login-card">
                        <div className="modal-header">
                            <p>Welcome back</p>
                        </div>
                        <span className="greyed-out" style={{ margin: "8px", fontSize: "14px" }}>
                            <p>Track your learning. Grow everyday.</p>
                        </span>
                        <form className="modal-form" onSubmit={handleLogin}>
                            <input
                                value={formData.username}
                                type="text"
                                name="username"
                                required
                                onChange={handleChange}
                                placeholder="username"
                            />
                            <input
                                value={formData.password}
                                type="password"
                                name="password"
                                required
                                onChange={handleChange}
                                placeholder="password"
                            />
                            <div className="modal-form-actions" style={{ marginTop: "32px" }}>
                                <button className="btn-primary" type="submit" disabled={isSubmitting}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
