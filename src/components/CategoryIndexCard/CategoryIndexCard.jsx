import "./styles.css";

export default function CategoryIndexCard({ category }) {
    const hasChildren = category.children && category.children.length > 0;
    console.log(category, "check  category component")

    return (
        <div style={{ backgroundColor: `${category.data.color}80`, padding: "10px", opacity: "0,4", border: `4px solid ${category.data.color}`, margin: "4px" }}>
            <h1>{category.data.name}</h1>
            <p></p>
            {hasChildren &&
                <>
                    {category.children.map(child => {
                        return <CategoryIndexCard key={child.data.id} category={child} />
                    })}
                </>
            }
        </div>
    )
}