import "./styles.css"
import { useEffect, useState } from "react";

export default function LessonDetailPage({ currLesson }) {

    const initialState = currLesson ? { title: currLesson.title, content: currLesson.content } : { title: "", content: "" }
    const [formData, setFormData] = useState(initialState);

    function handleChange(evt) {
        const updatedData = { ...formData };
        setFormData({ ...updatedData, [evt.target.name]: evt.target.value })
    }

    useEffect(() => { setFormData(currLesson) }, [currLesson])
    // async function handleSubmit(evt) {
    //     try {
    //         evt.preventDefault();
    //         const newCat = await catAPI.create(formData);
    //         setFormData(initialState)
    //         navigate(`/cats/${newCat.id}`)
    //     } catch (err) {
    //         console.log(err);
    //     }
    if (currLesson) {
        const formattedDate = new Date(currLesson.updated_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        });
    }
    if (!currLesson) return (<div className="lesson-detail-container"> <h2>There is no lessons in this category yet.</h2> </div>)
    return (
        <>
            <div className="lesson-detail-container">
                <div className="lesson-detail-header">
                <span className="greyed-out">{currLesson.updated_at}</span>
                <span className="greyed-out"><p></p>{currLesson.score}/10</span>
                </div>
                <div className="lesson-detail">
                    <h2>{currLesson.title}</h2>
                    <p>{currLesson.content}</p>
                </div>
            </div>
        </>
    )
}

