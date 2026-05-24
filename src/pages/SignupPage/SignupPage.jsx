// IMPORTS
import { useState } from "react";
import { useNavigate } from "react-router";


// APIs
import * as usersAPI from "../../utilities/user-api.js"

export default function SignupPage({ setUser }) {
    const navigate = useNavigate();
    const initialState = { username: "", password: "", confirmPassword: "", email: "" }
    const [formData, setFormData] = useState(initialState)
    const [isSubmitting, setIsSubmitting] = useState(false)
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
            setIsSubmitting(true)
            const newUser = await usersAPI.signup(formData);
            setUser(newUser);
            setFormData(initialState)
            navigate("/categories")
        } catch (err) {
            console.log(err);
            setUser(null);
        }
        finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <div className="login-wrapper">
                <div className="login-card">
                    <div className="modal-header">
                        <p>Create account</p>
                    </div>
                    <span className="greyed-out" style={{ margin: "8px", fontSize: "14px" }}>
                        <p>Start tracking what you learn today.</p>
                    </span>
                    <form className="modal-form" onSubmit={handleSubmit}>
                        <input
                            value={formData.username}
                            type="text"
                            name="username"
                            required
                            onChange={handleChange}
                            placeholder="username"
                        />
                        {errors.username && <p className="form-error">{errors.username}</p>}
                        <input
                            value={formData.email}
                            type="email"
                            name="email"
                            required
                            onChange={handleChange}
                            placeholder="email"
                        />
                        {errors.email && <p className="form-error">{errors.email}</p>}
                        <input
                            value={formData.password}
                            type="password"
                            name="password"
                            required
                            onChange={handleChange}
                            placeholder="password"
                        />
                        {errors.password && <p className="form-error">{errors.password}</p>}
                        <input
                            value={formData.confirmPassword}
                            type="password"
                            name="confirmPassword"
                            required
                            onChange={handleChange}
                            placeholder="confirm password"
                        />
                        {errors.confirmPassword && <p className="form-error">{errors.confirmPassword}</p>}
                        <div className="modal-form-actions" style={{ marginTop: "32px" }}>
                            <button className="btn-primary" type="submit" disabled={isSubmitting}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}