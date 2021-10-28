import getFormattedPrice from "../utils/getFormattedPrice";
import PropTypes from 'prop-types';
import productShape from '../prop-types/product'



const Kart = (props)=>{
    return(
        <ul>
            {props.items.map((product)=> {
                const onClick = ()=> props.onRemoveItem(product.id)
                return(
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <h4>{getFormattedPrice.format(product.price)}</h4>
                        {/* <img src={photos[0]} alt={product.name}/> */}
                        <button className="remove-button" onClick={onClick}>Remove</button>
                    </li>)}
                )
            }
        </ul>
    )
}

Kart.propTypes = {
    items: PropTypes.arrayOf(productShape),
    onRemoveItem: PropTypes.func
}

export default Kart;