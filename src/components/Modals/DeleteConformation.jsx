import "./styles.css"
import { useState } from "react";
import { X } from "lucide-react";

import * as categoryAPI from "../../utilities/category-api"

export default function DeleteConformation({ openModalConfirmDeletion, setOpenModalConfirmDeletion, category, setCatTree }) {

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    async function handleSubmit(evt) {
        try {
            evt.preventDefault();
            const updatedCategories = await categoryAPI.deleteCategory(category.id)
            setCatTree(updatedCategories)
            
            setOpenModalConfirmDeletion(false)
        } catch (error) {
            console.log(error)
        }
    }

    if (!openModalConfirmDeletion) return null;
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
                        <span id="modal-note"><p>note theat deleting category will delete all related lessons, you want to confirm</p></span>
                        <form className="modal-form" onSubmit={handleSubmit}>
                            <div className="modal-form-actions">
                                <button type="button" onClick={() => setOpenModalConfirmDeletion(false)}>Cancel</button>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

