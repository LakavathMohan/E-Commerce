import { useContext } from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { Context } from "../../../utils/context";

import "./CartItem.scss";
const CartItem = () => {
    const {cartItems,handleCartProductQuentity,handleRemoveFromCart} =
      useContext(Context);
    return (
        <div className="cart-products">
               {cartItems.map(item => (

                <div key={item.id} className="cart-product">
                    <div className="img-container">
                    <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt='' />
                    </div>
                    
                    <div className="prod-details">
                        <span className="name">{item.attributes.title}</span>
                        <MdClose 
                            className="close-btn" 
                            onClick={() => handleRemoveFromCart(item)} />
                        <div className="quantity-buttons">
                            <span 
                              onClick={() =>
                                handleCartProductQuentity('dec',item)} > -</span>

                            <span>{item.attributes.quentity}</span>

                            <span 
                              onClick={() => 
                              handleCartProductQuentity('inc',item)} > +</span>
                        </div>

                        <div className="text">
                            <span>{item.attributes.quentity}</span>
                            <span>x</span>
                            <span className="highlight">&#8377;{item.attributes.price * item.attributes.quentity}</span>
                        </div>
                    </div>
                </div>
               ))}
           
        </div>
    );
};

export default CartItem;
