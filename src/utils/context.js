
import { createContext, useEffect, useState } from "react";
import {useLocation} from 'react-router-dom'


export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [cartItems,setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [cartSubTotal,setCartSubTotal] = useState(0);
    const location = useLocation();

    useEffect(() =>{
        window.scrollTo(0,0);

    },[location])


    useEffect(() => {
        let count = 0;
        cartItems.map(item => count += item.attributes.quentity)
        setCartCount(count);



        let subTotal = 0;
        cartItems.map(items => subTotal += items.attributes.price * items.attributes.quentity)
        setCartSubTotal(subTotal)
    }, [cartItems])

   const handleAddToCart = (product,quentity) => {
    let items = [...cartItems];
    let index = items.findIndex(p => p.id === product.id)
    if(index !== -1) {
        items[index].attributes.quentity += quentity
    }else{
        product.attributes.quentity = quentity
        items = [...items, product];
    }
    setCartItems(items);
   };
   const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
   }
   const handleCartProductQuentity = (type,product) => {
    let items = [...cartItems];
    let index = items.findIndex(p => p.id === product.id)
    if(type === "inc"){
        items[index].attributes.quentity += 1
    }else if(type === "dec"){
        if(items[index].attributes.quentity === 1) return;
        items[index].attributes.quentity -= 1
    }
    setCartItems(items);
   }
    

    return (
        <Context.Provider
            value={{
                products,
                setProducts,
                categories,
                setCategories,
                cartItems,
                setCartItems,
                cartCount,
                setCartCount,
                cartSubTotal,
                setCartSubTotal,
                handleAddToCart,
                handleRemoveFromCart,
                handleCartProductQuentity
               
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
