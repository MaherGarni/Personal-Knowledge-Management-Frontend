// ChangeColor.jsx
import "./styles.css";
import { useState } from "react";
import { X } from "lucide-react";
import * as categoryAPI from "../../utilities/category-api";

export default function ChangeColor({
    openModalUpdateColor,
    setOpenModalUpdateColor,
    category,
    setCatTree,
}) {
    const initialState = {
        name: category.name,
        parent: category.parent,
        hierarchy: category.hierarchy,
        color: category.color || "#60A5FA",
    };
    const [formData, setFormData] = useState(initialState);

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const updatedCategories = await categoryAPI.update(formData, category.id);
            setCatTree(updatedCategories);
            setOpenModalUpdateColor(false);
        } catch (error) {
            console.log(error);
        }
    }

    if (!openModalUpdateColor) return null;

    return (
        <div className="modal-overlay" onClick={() => setOpenModalUpdateColor(false)}>
            <div className="color-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
                <div className="modal-header">
                    <p>Change Category Color</p>
                    <button type="button" onClick={() => setOpenModalUpdateColor(false)} aria-label="Close">
                        <X size={16} />
                    </button>
                </div>

                <span id="modal-note">
                    <p>
                        Pick a color for <strong>{category.name}</strong>. This updates the category appearance across the app.
                    </p>
                </span>

                <form className="modal-form" onSubmit={handleSubmit}>
                    <label className="modal-label">Color</label>
                    <input type="color" name="color" value={formData.color} onChange={handleChange} />

                    <div className="modal-form-actions">
                        <button type="button" className="btn-ghost" onClick={() => setOpenModalUpdateColor(false)}>
                            Cancel
                        </button>
                        <button type="submit" className="btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
