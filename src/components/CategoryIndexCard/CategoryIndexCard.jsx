import "./styles.css";

export default function CategoryIndexCard({ category }) {
    const hasChildren = category.children && category.children.length > 0;
    console.log(category, "check  category component")

    return (
        <div style={{backgroundColor: category.data.color, padding: "10px" }}>
            {category.data.name}
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