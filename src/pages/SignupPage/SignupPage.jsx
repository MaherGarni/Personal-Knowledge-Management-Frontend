// IMPORTS
import { useState } from "react";
import { useNavigate } from "react-router";


// APIs
import * as usersAPI from "../../utilities/user-api.js"

export default function SignupPage({ setUser }) {
    const navigate = useNavigate();
    const initialState = { username: "", password: "", confirmPassword: "", email: "" }
    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors] = useState({ username: '', password: '', email: '', confirmPassword: '' });
    let disabledSubmitBtn = Object.values(errors).every(val => val === "") && Object.values(formData).every(val => val !== "") ? false : true

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
        checkErrors(evt);
    }

    function checkErrors({ target }) {
        const updateErrors = { ...errors }

        if (target.name === 'username') {
            updateErrors.username = target.value.length < 3 ? 'Your username must be at least three characters long.' : "";
        }
        if (target.name === 'password') {
            updateErrors.password = target.value.length < 3 ? "Your password must be at least three characters long." : "";
        }
        if (target.name === 'confirmPassword') {
            updateErrors.confirmPassword = target.value !== formData.password ? "Your passwords must match." : "";
        }
        if (target.name === 'email') {
            updateErrors.email = !target.value.includes("@") ? "Your password must be a real email / include the '@' symbol." : "";
        }

        setErrors(updateErrors);
    };

    async function handleSubmit(evt) {
        try {
            evt.preventDefault()
            const newUser = await usersAPI.signup(formData);
            setUser(newUser);
            setFormData(initialState)
            navigate("/categories")
        } catch (err) {
            console.log(err);
            setUser(null);
        }
    }

    return (
        <>
            <div className="login-wrapper">
                <form onSubmit={handleSubmit} className="login-card">
                    <h1 className="login-title">Create Account</h1>

                    {/* USERNAME */}
                    <div className="login-field">
                        <label>Username</label>
                        <input
                            type="text"
                            value={formData.username}
                            name="username"
                            minLength="3"
                            onChange={handleChange}
                            required
                        />
                        {errors.username && <p className="form-error">{errors.username}</p>}
                    </div>

                    {/* EMAIL */}
                    <div className="login-field">
                        <label>Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            name="email"
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <p className="form-error">{errors.email}</p>}
                    </div>

                    {/* PASSWORD */}
                    <div className="login-field">
                        <label>Password</label>
                        <input
                            type="password"
                            value={formData.password}
                            name="password"
                            onChange={handleChange}
                            required
                        />
                        {errors.password && <p className="form-error">{errors.password}</p>}
                    </div>

                    {/* CONFIRM PASSWORD */}
                    <div className="login-field">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            value={formData.confirmPassword}
                            name="confirmPassword"
                            onChange={handleChange}
                            required
                        />
                        {errors.confirmPassword && <p className="form-error">{errors.confirmPassword}</p>}
                    </div>

                    <button type="submit" disabled={disabledSubmitBtn} className="login-btn">
                        Sign Up
                    </button>

                    <p className="login-note">Already have an account? Log in</p>
                </form>
            </div>
        </>
    );

}