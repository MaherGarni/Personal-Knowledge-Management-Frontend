import "./styles.css"
import { useState, useEffect } from "react";
import createCategoryTree from "./helperFunction";
import CategoryIndexCard from "../../components/CategoryIndexCard/CategoryIndexCard";


import * as categoryAPI from "../../utilities/category-api"

export default function CategoryIndexPage() {
    const [catTree, setCatTree] = useState([]);

    useEffect(() => {
        async function getAllCategories() {
            try {
                const categoriesData = await categoryAPI.index()
                const categoryTree = createCategoryTree(categoriesData);
                console.log(categoryTree, "test tree!!!")
                setCatTree(categoryTree)
            } catch (err) {
                console.log(err);
            }
        }
        getAllCategories()
    }, [])

    function updateCategories(updatedCategories) {
        const categoryTree = createCategoryTree(updatedCategories);
        console.log(categoryTree, "test tree!!!")
        setCatTree(categoryTree)
    }





    const displayAllCategories = catTree.map((c, ind) => <CategoryIndexCard key={ind} category={c} updateCategories={updateCategories}/>);
    console.log(catTree)
    return (
        <>
            <section className="categories-section">
                <div className="section-header">
                    <h2>Categories</h2>
                </div>
                <div className="categories-container">
                    {displayAllCategories}
                </div>
            </section>
        </>
    )
}
