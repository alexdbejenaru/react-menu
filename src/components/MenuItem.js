const MenuItem = ({ item }) => {
    return ( 
        <div className="item" key={ item.id }>
            <h4 className="item_title">{ item.title }</h4>
            <p className="item_category">Category: { item.category }</p>
            <img className="item_img" src={ item.img } alt={ item.title } />
            <p className="item_description">{ item.desc }</p>
        </div>
     );
}
 
export default MenuItem;