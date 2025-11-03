import "./styles.css"
import { useEffect, useState } from "react";

export default function LessonDetailPage({ currLesson }) {
    const initialState = { title: currLesson.title, content: currLesson.content }
    const [formData, setFormData] = useState(initialState);
    
    function handleChange(evt) {
        const updatedData = { ...formData };
        setFormData({ ...updatedData, [evt.target.name]: evt.target.value })
    }

    useEffect(()=>{setFormData(currLesson)}, [currLesson])
    // async function handleSubmit(evt) {
    //     try {
    //         evt.preventDefault();
    //         const newCat = await catAPI.create(formData);
    //         setFormData(initialState)
    //         navigate(`/cats/${newCat.id}`)
    //     } catch (err) {
    //         console.log(err);
    //     }

    const formattedDate = new Date(currLesson.updated_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
    });
    return (
        <>
            <div className="lesson-detail-container">
                <span className="greyed-out">{formattedDate}</span>
                <div className="lesson-detail">
                    <h2>{currLesson.title}</h2>
                    <p>{currLesson.content}</p>
                    {/* <form action="">
                        <input type="text" name="content" value={formData.content} onChange={handleChange}/>
                    </form> */}
                </div>
            </div>
        </>
    )
}

