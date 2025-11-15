// CreateCategory.jsx
import "./styles.css";
import { useState } from "react";
import { X } from "lucide-react";
import * as categoryAPI from "../../utilities/category-api";

export default function CreateCategory({
    openModalCreateCategory,
    setOpenModalCreateCategory,
    category,
    setCatTree,
}) {
    const initialState = { name: "", parent: category.id, hierarchy: 3, color: "#60A5FA" };
    const [formData, setFormData] = useState(initialState);

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const updatedCategories = await categoryAPI.create(formData);
            setCatTree(updatedCategories);
            setFormData(initialState);
            setOpenModalCreateCategory(false);
        } catch (error) {
            console.log(error);
        }
    }

    if (!openModalCreateCategory) return null;

    return (
        <div className="modal-overlay" onClick={() => setOpenModalCreateCategory(false)}>
            <div className="color-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
                <div className="modal-header">
                    <p>New Sub-Skill</p>
                    <button type="button" onClick={() => setOpenModalCreateCategory(false)} aria-label="Close">
                        <X size={16} />
                    </button>
                </div>

                <span id="modal-note">
                    <p>
                        Create a level-3 category under <strong>{category.name}</strong>. Use a clear, specific skill name.
                    </p>
                </span>

                <form className="modal-form" onSubmit={handleSubmit}>
                    <label className="modal-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="e.g., React useEffect Patterns"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label className="modal-label">Color</label>
                    <input type="color" name="color" value={formData.color} onChange={handleChange} />

                    <div className="modal-form-actions">
                        <button type="button" className="btn-ghost" onClick={() => setOpenModalCreateCategory(false)}>
                            Cancel
                        </button>
                        <button type="submit" className="btn-primary">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
