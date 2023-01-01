import { Link } from 'react-router-dom';
import '../components.css';

function ProductCard(props) {
    return (
    <div className="item">
        <Link to={`/singleproduct/${props.id}`} className='links'>
             <img src={props.img}
                        alt="phone" className="images" />
                    <p className="md-heading">{props.name}</p>
                    <p className="sml-heading"> From Rs.{props.price}</p>
        </Link>
     <button className="addtocart-btn" 
     onClick={() => props.addToCart(props.item)}>Add to cart</button>
    </div>
    )
}

export default ProductCard;
