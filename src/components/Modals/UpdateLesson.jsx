import "./styles.css"
import { useState } from "react";
import { X } from "lucide-react";

import * as categoryAPI from "../../utilities/category-api"


export default function UpdateLesson({ openModalForm, setOpenModalForm, lesson, setLessons, setCurrLesson, category}) {
    const initialState = { title: lesson.title, content: lesson.content, category : category.id }
    const [formData, setFormData] = useState(initialState);

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    async function handleSubmit(evt) {
        try {
            evt.preventDefault();
            const lessonsData = await categoryAPI.updateLesson(formData, category.id, lesson.id)
            console.log(lessonsData)
            setCurrLesson(lessonsData.lesson)
            setLessons(lessonsData.lessons)
            setOpenModalForm(false)
        } catch (error) {
            console.log(error)
        }
    }
    if (!openModalForm) return null;
    return (
        <>
            {openModalForm &&
                <div className="modal-overlay">
                    <div className="color-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header" >
                            <span style={{marginBottom: "8px"}}>
                                <p>Update Lesson : <strong>{formData.title}</strong></p>
                            </span>
                            <button onClick={() => setOpenModalForm(false)}>
                                <X size={16} />
                            </button>
                        </div>
                        {/* <span id="modal-note"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, doloremque.</p></span> */}
                        <form className="modal-form" onSubmit={handleSubmit}>
                            <textarea className="form-textarea" placeholder="content" name="content" rows="5" cols="30" value={formData.content} onChange={handleChange} />
                            <div className="modal-form-actions">
                                <button type="button" onClick={() => setOpenModalForm(false)}>Cancel</button>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}
