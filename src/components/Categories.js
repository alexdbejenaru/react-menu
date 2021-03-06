const Categories = ({ filterItems, categoryItems }) => {
    return ( 
        <section className="categories">
            <h2 className="categories_title">Filter by:</h2>
            {categoryItems.map((category, index) => (
                <button type="button" key={ index } onClick={() => filterItems(category)} className="categories_btn">
                    { category.charAt(0).toUpperCase() + category.slice(1) }
                </button>
            ))}
        </section>
     );
}
 
export default Categories;