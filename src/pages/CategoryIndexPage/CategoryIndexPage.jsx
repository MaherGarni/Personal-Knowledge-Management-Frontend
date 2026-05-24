import "./styles.css"
import { useState, useEffect } from "react";
import createCategoryTree from "./helperFunction";
import CategoryIndexCard from "../../components/CategoryIndexCard/CategoryIndexCard";
import Spinner from "../../components/Spinner/Spinner";

import * as categoryAPI from "../../utilities/category-api"

export default function CategoryIndexPage({ user }) {
    const [catTree, setCatTree] = useState([]);

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getAllCategories() {
            try {
                const categoriesData = await categoryAPI.index()
                setIsLoading(false)
                setCatTree(categoriesData)
            } catch (err) {
                console.log(err);
            }
        }
        getAllCategories()
    }, [])

    if(isLoading) return (<Spinner/>)

    const displayAllCategories = catTree.map((c, ind) => <CategoryIndexCard key={ind} category={c} setCatTree={setCatTree} user={user} />);

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
