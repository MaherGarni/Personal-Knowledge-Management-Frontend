import "./styles.css";
import { Brush, Plus, Trash, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import ChangeColor from "../Modals/ChangeColor";
import DeleteConformation from "../Modals/DeleteConformation";
import CreateCategory from "../Modals/CreateCategory";

export default function CategoryIndexCard({ category, setCatTree }) {
    const hasChildren = category.children && category.children.length > 0;
    const [showDetail, setShowDetail] = useState(false);
    const [openModalUpdateColor, setOpenModalUpdateColor] = useState(false);
    const [openModalConfirmDeletion, setOpenModalConfirmDeletion] = useState(false);
    const [openModalCreateCategory, setOpenModalCreateCategory] = useState(false);

    const toggleOpen = () => setShowDetail((prev) => !prev);

    return (
        <>
            <div className="category-card">
                <div
                    className="category-detail"
                    style={{ paddingLeft: `${(category.hierarchy - 1) * 40}px` }}
                >
                    {/* Expand/collapse icon OR placeholder */}
                    {hasChildren ? (
                        <span className="category-toggle" onClick={toggleOpen}>
                            {showDetail ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </span>
                    ) : (
                        <span className="category-toggle placeholder"></span>
                    )}

                    {/* Color dot */}
                    <span
                        className="category-color-dot"
                        style={{ backgroundColor: category.color || "#9CA3AF" }}
                    />

                    {/* Category label / link for level 3 */}
                    {category.hierarchy === 3 ? (
                        <Link to={`/categories/${category.id}`}>
                            <strong>{category.name}</strong>
                        </Link>
                    ) : (
                        <strong>{category.name}</strong>
                    )}
                </div>

                {/* Action icons */}
                <div className="category-actions">
                    <button onClick={() => setOpenModalUpdateColor(true)}>
                        <Brush size={16} />
                    </button>

                    {category.hierarchy === 2 && (
                        <button onClick={() => setOpenModalCreateCategory(true)}>
                            <Plus size={16} />
                        </button>
                    )}

                    {category.hierarchy === 3 && (
                        <button onClick={() => setOpenModalConfirmDeletion(true)}>
                            <Trash size={16} />
                        </button>
                    )}
                </div>
            </div>

            {/* Render children */}
            {hasChildren && showDetail && (
                <div className="category-children">
                    {category.children.map((child) => (
                        <CategoryIndexCard key={child.id} category={child} setCatTree={setCatTree} />
                    ))}
                </div>
            )}

            {/* Modals */}
            {openModalUpdateColor && (
                <ChangeColor
                    openModalUpdateColor={openModalUpdateColor}
                    setOpenModalUpdateColor={setOpenModalUpdateColor}
                    category={category}
                    setCatTree={setCatTree}
                />
            )}

            {openModalConfirmDeletion && (
                <DeleteConformation
                    openModalConfirmDeletion={openModalConfirmDeletion}
                    setOpenModalConfirmDeletion={setOpenModalConfirmDeletion}
                    category={category}
                    setCatTree={setCatTree}
                />
            )}

            {openModalCreateCategory && (
                <CreateCategory
                    openModalCreateCategory={openModalCreateCategory}
                    setOpenModalCreateCategory={setOpenModalCreateCategory}
                    category={category}
                    setCatTree={setCatTree}
                />
            )}
        </>
    );
}
