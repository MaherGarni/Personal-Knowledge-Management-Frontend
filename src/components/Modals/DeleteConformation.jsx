import "./styles.css"
import { useState } from "react";
import { X } from "lucide-react";

import * as categoryAPI from "../../utilities/category-api"

export default function DeleteConformation({ openModal, setOpenModal, category, updateCategories }) {
    const initialState = { name: category.data.name, parent: category.parent, hierarchy: category.data.hierarchy, color: `${category.data.color}` }
    const [formData, setFormData] = useState(initialState);

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    async function handleSubmit(evt) {
        try {
            evt.preventDefault();
            console.log(formData, "frontend, line 18")
            const updatedCategories = await categoryAPI.update(formData, category.data.id)
            updateCategories(updatedCategories)
            // setCurrCategory(updateColor) // tried to update the state from here
            // console.dir(updateColor)
            setOpenModal(false)
        } catch (error) {
            console.log(error)
        }
    }

    if (!openModal) return null;
    return (
        <>
            {openModal &&
                <div className="modal-overlay">
                    <div className="color-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header" >
                            <p>Confirm deletion</p>
                            <button onClick={() => setOpenModal(false)}>
                                <X size={16} />
                            </button>
                        </div>
                        <span id="modal-note"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, doloremque.</p></span>
                        <form className="modal-form" onSubmit={handleSubmit}>
                            <input type="color" placeholder="color" name="color" value={formData.color} onChange={handleChange} />
                            <div className="modal-form-actions">
                                <button type="button" onClick={() => setOpenModal(false)}>Cancel</button>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

