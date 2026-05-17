import "./styles.css"
import { useState } from "react";
import { X } from "lucide-react";
import MismatchLesson from "./MismatchLesson";
import EvaluationLoadingComponent from "./EvaluationLoadingComponent";
import EvaluationMismatch from "./EvaluationMismatch";
import EvaluationSuccess from "./EvaluationSuccess";
import ErrorModal from "./ErrorModal";


import * as categoryAPI from "../../utilities/category-api"

export default function FormModal({ openModalForm, setOpenModalForm, category, setCategory, setLessons, setCurrLesson, user, setUser }) {
    const initialState = { title: "", content: "", category: category.id }
    const [formData, setFormData] = useState(initialState);
    const [openModalMismatch, setOpenModalMismatch] = useState(false)
    const [openEvaluationLoading, setOpenEvaluationLoading] = useState(false)
    const [openEvaluationMismatch, setOpenEvaluationMismatch] = useState(false)
    const [openEvaluationSuccess, setOpenEvaluationSuccess] = useState(false)
    const [openModalError, setOpenModalError] = useState(false)

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
            const categoryDetailData = await categoryAPI.createLesson(formData, category.id)
            setOpenEvaluationLoading(false)
            if (categoryDetailData?.failed) {
                setOpenEvaluationMismatch(true)
                return
            }
            setLessonStats(categoryDetailData.lessons[0])
            setCategory(categoryDetailData.category)
            setLessons(categoryDetailData.lessons)
            setCurrLesson(categoryDetailData.lessons[0])
            setUser(categoryDetailData.user)
            setOpenEvaluationSuccess(true)
        } catch (error) {
            setOpenModalError(true)
            return
        }
        finally {
            setIsSubmitting(false)
        }
    }

    if (!openModalForm) return null;
    return (
        <>
            {openModalForm &&
                <div className="modal-overlay" onKeyDown={(e) => e.key === 'Tab' && e.preventDefault()}>
                    <div className="color-modal" onClick={(e) => e.stopPropagation()}  >
                        <div className="modal-header" >
                            <p>New lesson</p>
                            <button onClick={() => setOpenModalForm(false)}>
                                <X size={16} />
                            </button>
                        </div>
                        <span className="greyed-out" style={{ margin: "4px 0" }}>
                            <p>please note that lessons unrelated to the chosen category will not be saved.</p>
                        </span>
                        <form className="modal-form" onSubmit={handleSubmit}>
                            <input type="text" placeholder="title" name="title" value={formData.title} onChange={handleChange} />
                            <textarea className="form-textarea" placeholder="A short summary of the concept, experience or insight..." name="content" value={formData.content} onChange={handleChange} />
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
                    failedEvaluation={true}
                />
            }

            {openEvaluationMismatch &&
                <EvaluationMismatch
                    openEvaluationMismatch={openEvaluationMismatch}
                    setOpenEvaluationMismatch={setOpenEvaluationMismatch}
                    failedEvaluation={true}
                    category={category}
                />
            }
            {openEvaluationSuccess &&
                <EvaluationSuccess
                    openEvaluationSuccess={openEvaluationSuccess}
                    setOpenEvaluationSuccess={setOpenEvaluationSuccess}
                    failedEvaluation={true}
                    lessonStats={lessonStats}
                    category={category}
                    oldRating={oldRating}
                    setOpenModalForm={setOpenModalForm}
                />
            }
            {openModalError &&
                <ErrorModal
                    openModalError={openModalError}
                    setOpenModalError={setOpenModalError}
                />
            }
        </>
    )
}
