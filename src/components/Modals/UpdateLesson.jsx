import "./styles.css"
import { useState } from "react";
import { X } from "lucide-react";

import EvaluationLoadingComponent from "./EvaluationLoadingComponent";
import EvaluationMismatch from "./EvaluationMismatch";
import EvaluationSuccess from "./EvaluationSuccess";

import * as categoryAPI from "../../utilities/category-api"


export default function UpdateLesson({ openModalForm, setOpenModalForm, lesson, setLessons, setCurrLesson, category, setCategory, user, setUser}) {
    const initialState = { title: lesson.title, content: lesson.content, category: category.id, score: lesson.score, points: lesson.points }
    const [formData, setFormData] = useState(initialState);

    const [openEvaluationLoading, setOpenEvaluationLoading] = useState(false)
    const [openEvaluationMismatch, setOpenEvaluationMismatch] = useState(false)
    const [openEvaluationSuccess, setOpenEvaluationSuccess] = useState(false)

    const [lessonStats, setLessonStats] = useState({})
    const [oldRating, setOldRating] = useState(category.rating)

    const [isSubmitting, setIsSubmitting] = useState(false)

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    async function handleSubmit(evt) {
        try {
            evt.preventDefault();
            setIsSubmitting(true)
            setOpenEvaluationLoading(true)
            const lessonData = await categoryAPI.updateLesson(formData, category.id, lesson.id)
            setOpenEvaluationLoading(false)
            if (lessonData?.failed) {
                setOpenEvaluationMismatch(true)
                return
            }
            setLessonStats(lessonData.lessons[0])
            setCurrLesson(lessonData.lesson)
            setLessons(lessonData.lessons)
            setCategory(lessonData.category)
            setUser(lessonData.user)
            setOpenEvaluationSuccess(true)
        } catch (error) {
            console.log(error)
        }
        finally{
            setIsSubmitting(false)
        }
    }
    if (!openModalForm) return null;
    return (
        <>
            {openModalForm &&
                <div className="modal-overlay" onKeyDown={(e) => e.key === 'Tab' && e.preventDefault()}>
                    <div className="color-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header" >
                            <span style={{ marginBottom: "8px" }}>
                                <p>Update Lesson : <strong>{formData.title}</strong></p>
                            </span>
                            <button onClick={() => setOpenModalForm(false)}>
                                <X size={16} />
                            </button>
                        </div>
                        <span className="greyed-out" style={{ margin: "0 8px" }}>
                            <p>note that updating lesson will consume from your daily limit.</p>
                        </span>
                        <form className="modal-form" onSubmit={handleSubmit}>
                            <textarea className="form-textarea" placeholder="content" name="content" rows="5" cols="30" value={formData.content} onChange={handleChange} />
                            <div className="modal-form-actions">
                                <button className="btn-ghost" type="button" onClick={() => setOpenModalForm(false)}>Cancel</button>
                                <button className="btn-primary" type="submit" disabled={isSubmitting}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
            {openEvaluationLoading &&
                <EvaluationLoadingComponent
                    openEvaluationLoading={openEvaluationLoading}
                    setOpenEvaluationLoading={setOpenEvaluationLoading}
                />
            }

            {openEvaluationMismatch &&
                <EvaluationMismatch
                    openEvaluationMismatch={openEvaluationMismatch}
                    setOpenEvaluationMismatch={setOpenEvaluationMismatch}
                    category={category}
                />
            }
            {openEvaluationSuccess &&
                <EvaluationSuccess
                    openEvaluationSuccess={openEvaluationSuccess}
                    setOpenEvaluationSuccess={setOpenEvaluationSuccess}
                    lessonStats={lessonStats}
                    category={category}
                    oldRating={oldRating}
                    setOpenModalForm={setOpenModalForm}
                />
            }
        </>
    )
}
