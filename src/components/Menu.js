import MenuItem from "./MenuItem";

const Menu = ({ items }) => {

    
    return ( 
        <section className="menu-container">
            <div className="menu-items">
                {items.map(item => (
                    <MenuItem item={ item } />
                ))}
            </div>
        </section>
     );
}
 
export default Menu;