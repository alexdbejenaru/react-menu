const Categories = ({ filterItems, item }) => {
    return ( 
        <section className="categories">
            <h2 className="categories_title">Filter by:</h2>
            <button onClick={() => filterItems('all')}className="categories_btn">All</button>
            <button onClick={() => filterItems('dinner')}className="categories_btn">Breakfast</button>
        </section>
     );
}
 
export default Categories;