import React, {useState} from 'react';


export const CartContext = React.createContext();
export const CartItemsContext = React.createContext();

export const CartProvider = (child) => {

    const [cart, setCart] = useState([]);
    const [cartItems,setCartItems] = useState([])

    return(
        <CartContext.Provider value = {[cart, setCart]}>
            <CartItemsContext.Provider value = {[cartItems, setCartItems]}>
                {child.children}
            </CartItemsContext.Provider>
        </CartContext.Provider>
    )
}