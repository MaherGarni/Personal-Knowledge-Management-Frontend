import "./styles.css"
import { useState } from "react";
import { X } from "lucide-react";

import * as categoryAPI from "../../utilities/category-api"

export default function CreateCategory({ openModalCreateCategory, setOpenModalCreateCategory, category, setCatTree }) {
    const initialState = { name: "", parent: category.id , hierarchy: 3, color: "#60A5FA" }
    console.log(typeof(category.color), "line 9, frontend, CreateCategory", category)
    const [formData, setFormData] = useState(initialState);

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }
    async function handleSubmit(evt){
        try {
            evt.preventDefault();
            console.log(formData, "frontend, line 18")
            const updatedCategories = await categoryAPI.create(formData)
            setCatTree(updatedCategories)
            setFormData(initialState)
            setOpenModalCreateCategory(false)
        } catch (error) {
            console.log(error)
        }
    }

    if (!openModalCreateCategory) return null;
    return (
        <>
            {openModalCreateCategory &&
                <div className="modal-overlay">
                    <div className="color-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header" >
                            <p>Create Category</p>
                            <button onClick={() => setOpenModalCreateCategory(false)}>
                                <X size={16} />
                            </button>
                        </div>
                        <span id="modal-note"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, doloremque.</p></span>
                        <form className="modal-form" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Category name" name="name" value={formData.name} onChange={handleChange} />
                            <input type="color" placeholder="color" name="color" value={formData.color} onChange={handleChange} />
                            <div className="modal-form-actions">
                                <button type="button" onClick={() => setOpenModalCreateCategory(false)}>Cancel</button>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

