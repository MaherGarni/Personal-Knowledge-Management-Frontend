import "./styles.css";
import { Brush, Plus, Trash, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import ChangeColor from "../Modals/ChangeColor";

export default function CategoryIndexCard({ category, updateCategories }) {
    // const [currCategory, setCurrCategory] = useState(category) // tried to store the state here, and pass them down below
    const hasChildren = category.children && category.children.length > 0;
    const [showDetail, setShowDetail] = useState(false);
    const [openModal, setOpenModal] = useState(false)

    const toggleOpen = () => setShowDetail((prev) => !prev);

    console.log(category, "check  category component")

    return (
        <>
            <div className="category-card">
                <div className="category-detail" style={{ paddingLeft: `${(category.data.hierarchy - 1) * 40}px` }}>
                    <strong>
                        {category.children.length > 0 &&
                            <span className="category-toggle" onClick={toggleOpen}>
                                {showDetail
                                    ?
                                    <ChevronDown size={16} />
                                    :
                                    <ChevronRight size={16} />
                                }
                            </span>
                        }
                        <span
                            className="category-color-dot"
                            style={{ backgroundColor: category.data.color || '#9CA3AF' }}
                        />
                        {category.data.name}
                    </strong>
                </div>
                <div className="category-actions">
                    <button onClick={() => setOpenModal(true)}>
                        <Brush size={16} />
                    </button>
                    {category.data.hierarchy === 2 &&
                        <button onClick={() => setOpenModal(true)}>
                            <Plus size={16} />
                        </button>
                    }
                    {category.data.hierarchy === 3 &&
                        <button onClick={() => setOpenModal(true)}>
                            <Trash size={16} />
                        </button>
                    }
                </div>
            </div>
            {
                hasChildren && showDetail &&
                <div className="category-children">
                    {category.children.map(child => {
                        return <CategoryIndexCard key={child.data.id} category={child} updateCategories={updateCategories} />
                    })}
                </div>
            }
            {openModal &&
                <ChangeColor openModal={openModal} setOpenModal={setOpenModal} category={category} updateCategories={updateCategories} />
            }
        </>
    )
}