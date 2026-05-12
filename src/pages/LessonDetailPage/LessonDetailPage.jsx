import "./styles.css"
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

export default function LessonDetailPage({ currLesson, category }) {

    const initialState = currLesson ? { title: currLesson.title, content: currLesson.content } : { title: "", content: "" }
    const [formData, setFormData] = useState(initialState);
    let formattedDate = null;
    function handleChange(evt) {
        const updatedData = { ...formData };
        setFormData({ ...updatedData, [evt.target.name]: evt.target.value })
    }

    const hexToRgba = (hex, opacity) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    useEffect(() => { setFormData(currLesson) }, [currLesson])

    if (currLesson) {
        formattedDate = new Date(currLesson.updated_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        });
    }
    if (!currLesson) return (<div className="lesson-detail-container"> <h2>There is no lessons in this category yet.</h2> </div>)
    return (
        <>
            <div className="lesson-detail-container">
                <div className="lesson-detail-header">
                    <h2>{currLesson.title}</h2>
                    {/* <span className="greyed-out">{formattedDate}</span> */}
                    <div className="lesson-detail-score">
                        <p style={{ color: `${category.color}` }}>{currLesson.score}</p>
                        <div className="score-separator"></div>
                        <span className="greyed-out">100</span>
                    </div>
                </div>
                <div className="lesson-detail-separator" style={{ backgroundColor: `${category.color}` }}>

                </div>
                <div className="lesson-detail">
                    <p>{currLesson.content}</p>
                </div>

                <div className="lesson-detail-footer">
                    <div className="lesson-detail-footer-card">
                        <span className="greyed-out">{formattedDate}</span>
                    </div>
                    <div className="lesson-detail-footer-card">
                        <p><span className="greyed-out">Score: </span>{currLesson.score}</p>
                    </div>
                    <div className="lesson-detail-footer-card">
                        <p><span className="greyed-out">Points: </span>{currLesson.points}</p>
                    </div>
                    {console.log(hexToRgba(category.color, 0.07))}
                    <div className="lesson-detail-footer-card" style={{ backgroundColor: hexToRgba(category.color, 0.08), color: category.color }}>
                        <p>{category.name}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

