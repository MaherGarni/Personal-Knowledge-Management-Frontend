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

    // recursively build each category layer via component





    const displayAllCategories = catTree.map((c, ind) => <CategoryIndexCard key={ind} category={c} />);

    return (
        <section>
            {displayAllCategories}
        </section>
    )
}
