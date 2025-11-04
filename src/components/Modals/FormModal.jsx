import "./styles.css"
import { useState } from "react";
import { X } from "lucide-react";
import MismatchLesson from "./MismatchLesson";

import * as categoryAPI from "../../utilities/category-api"

export default function FormModal({ openModalForm, setOpenModalForm, category, setCategory, setLessons, setCurrLesson }) {
    const initialState = { title: "", content: "", category: category.id }
    const [formData, setFormData] = useState(initialState);
    const [openModalMismatch, setOpenModalMismatch] = useState(false)

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    async function handleSubmit(evt) {
        try {
            evt.preventDefault();
            const categoryDetailData = await categoryAPI.createLesson(formData, category.id)
            if (categoryDetailData?.failed) {
                setOpenModalMismatch(true)
                return
            }
            setCategory(categoryDetailData.category)
            setLessons(categoryDetailData.lessons)
            setCurrLesson(categoryDetailData.lessons[0])
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
                            <p>New lesson</p>
                            <button onClick={() => setOpenModalForm(false)}>
                                <X size={16} />
                            </button>
                        </div>
                        {/* <span id="modal-note"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, doloremque.</p></span> */}
                        <span className="greyed-out" style={{ margin: "4px 0" }}>
                            <p>please note that lessons unrelated to the chosen category will not be saved.</p>
                        </span>
                        <form className="modal-form" onSubmit={handleSubmit}>
                            <input type="text" placeholder="title" name="title" value={formData.color} onChange={handleChange} />
                            <textarea className="form-textarea" placeholder="content" name="content" rows="5" cols="30" value={formData.content} onChange={handleChange} />
                            <div className="modal-form-actions">
                                <button type="button" onClick={() => setOpenModalForm(false)}>Cancel</button>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
            {openModalMismatch &&
                <MismatchLesson
                    openModalMismatch={openModalMismatch}
                    setOpenModalMismatch={setOpenModalMismatch}
                />
            }

        </>
    )
}
