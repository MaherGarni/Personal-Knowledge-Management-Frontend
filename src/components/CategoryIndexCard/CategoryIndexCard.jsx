import "./styles.css";
import { Brush, Plus, Trash, ChevronRight, ChevronDown, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import ChangeColor from "../Modals/ChangeColor";
import DeleteConformation from "../Modals/DeleteConformation";
import CreateCategory from "../Modals/CreateCategory";

export default function CategoryIndexCard({ category, setCatTree, user }) {
    const hasChildren = category.children && category.children.length > 0;
    const [showDetail, setShowDetail] = useState(false);
    const [openModalUpdateColor, setOpenModalUpdateColor] = useState(false);
    const [openModalConfirmDeletion, setOpenModalConfirmDeletion] = useState(false);
    const [openModalCreateCategory, setOpenModalCreateCategory] = useState(false);

    const toggleOpen = () => setShowDetail((prev) => !prev);
    const hasVisibleChildren = category.children.some(child =>
        child.hierarchy !== 3 || child.user === user.id
    );
    if (category.hierarchy === 3 && category.user !== user.id) return null;

    return (
        <>
            <div className="category-card">
                <div
                    className="category-detail"
                    style={{ paddingLeft: `${(category.hierarchy - 1) * 40}px` }}
                >
                    {hasVisibleChildren ? (
                        <span className="category-toggle" onClick={toggleOpen}>
                            {showDetail ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </span>
                    ) : (
                        <span className="category-toggle placeholder"></span>
                    )}
                    <span
                        className="category-color-dot"
                        style={{ backgroundColor: category.color || "#9CA3AF" }}
                    />
                    {category.hierarchy === 3 ? (
                        <Link to={`/categories/${category.id}`}>
                            <strong>{category.name}</strong>
                        </Link>
                    ) : (
                        <strong>{category.name}</strong>
                    )}
                </div>
                <div className="category-actions">
                    {category.hierarchy !== 1 && (
                        <div className="overall-rating">{category.rating}</div>
                    )}
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
            {hasChildren && showDetail && (
                <div className="category-children">
                    {category.children.map((child) => (
                        <CategoryIndexCard key={child.id} category={child} setCatTree={setCatTree} user={user} />
                    ))}
                </div>
            )}

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
