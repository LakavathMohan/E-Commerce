import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import CartItem from "./CartItem/CartItem";
import { Context } from "../../utils/context";
import "./Cart.scss";
import { makePaymentRequest } from '../../utils/api';

import { loadStripe } from '@stripe/stripe-js';

const Cart = ({ setShowCart }) => {
    const { CartItems, cartSubTotal } = useContext(Context);

    const stripePromise = loadStripe(
        process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    );

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;

            // Assuming CartItems is an array of products
            const products = CartItems.map(item => ({
                productId: item.productId,
                quantity: item.quantity,
                // Add other relevant fields as needed
            }));

            const res = await makePaymentRequest.post("/api/order", {
                products: products, // Use the products array instead of CartItem
            });

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={() => setShowCart(false)}>
                        <span className="text"><MdClose />close</span>
                    </span>
                </div>

                {/* {!CartItems?.length && <div className="empty-cart">
                    <BsCartX />
                    <span>No products in the cart.</span>
                    <button className="return-btn" >
                        RETURN TO SHOP
                    </button>
                </div>} */}

                <>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal:</span>
                            <span className="total">
                                &#8377;{cartSubTotal}
                            </span>
                        </div>
                        <div className="button">
                            <button className="checkout" onClick={handlePayment}>
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Cart;
