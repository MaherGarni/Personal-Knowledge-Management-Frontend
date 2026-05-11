import "./styles.css"
import { useState } from "react";
import { X } from "lucide-react";

import * as categoryAPI from "../../utilities/category-api"
import LessonCrad from "../LessonCard/LessonCrad";

export default function DeleteConformationLesson({ openModalConfirmDeletion, setOpenModalConfirmDeletion, Lesson, setLessons, setCurrLesson, category, setCategory}) {

    async function handleSubmit(evt) {
        try {
            evt.preventDefault();
            const updatedLessons = await categoryAPI.deleteLesson(category.id, Lesson.id)
            setCategory(updatedLessons.category)
            setLessons(updatedLessons.lessons)
            setCurrLesson(null)
            setOpenModalConfirmDeletion(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {openModalConfirmDeletion &&
                <div className="modal-overlay">
                    <div className="color-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header" >
                            <p>Confirm deletion</p>
                            <button onClick={() => setOpenModalConfirmDeletion(false)}>
                                <X size={16} />
                            </button>
                        </div>
                        <span id="modal-note"><p>please note that lesson points will be deducted from the overall skill rating</p></span>
                        <form className="modal-form" onSubmit={handleSubmit}>
                            <div className="modal-form-actions">
                                <button className="btn-ghost" type="button" onClick={() => setOpenModalConfirmDeletion(false)}>Cancel</button>
                                <button className="btn-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}
