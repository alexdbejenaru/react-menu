const MenuItem = ({ item }) => {
    return ( 
        <div className="item">
            <h4 className="item_title">{ item.title }</h4>
            <img className="item_img" src={ item.img } alt={ item.title } />
            <p className="item_category">Category: { item.category }</p>
            <p className="item_description">{ item.desc }</p>
            <p className="item_price">Price: <span>{ item.price } $</span></p>
        </div>
     );
}
 
export default MenuItem;