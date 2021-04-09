import React, { useState, useContext } from "react"
import { MdRemoveShoppingCart } from 'react-icons/md';
import { CartContext } from "./context/CartContext";
import { CartItemsContext } from "./context/CartContext";

export default function Cart() {

    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useContext(CartContext);
    const [cartItems, setCartItems] = useContext(CartItemsContext); //brojac
    const [refresh, setRefresh] = useState(false);

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter((game) => game !== productToRemove))
    };

    const ispis = (name) => {
        if (cartItems[name] == null)
            cartItems[name] = 1;
        return cartItems[name]
    }

    const increase = (name) => {

        //console.log(name)
        cartItems[name] += 1;
        setCartItems(cartItems);

        let vrijednost = !refresh
        setRefresh(vrijednost)
    }

    const decrease = (name) => {
        cartItems[name] -= 1;

        if (cartItems[name] <= 0) {

            delete cartItems[name]
            for (var i = 0; i < cart.length; i++) {
                if (0 == cart[i].name.localeCompare(name))
                    removeFromCart(cart[i])

            }
        }
        setCartItems(cartItems);

        let vrijednost = !refresh
        setRefresh(vrijednost)
    }

    return (
        <div className="search">
            <p>Shopping Cart  </p>
            <p>There are {cart.length} product in cart</p>
            <input className="search-input" type="text" placeholder="Search..." onChange={event => { setSearchTerm(event.target.value) }}></input>
            {
                cart.filter((game => {
                    if (searchTerm == "") {
                        return game.name //nefiltrira nista ako je prazno i samo mapira
                    } else if (game.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return game.name //samo ce vratit one koje includa sto je u inputu
                    }
                })).map(game => (
                    <div key={game.id} className="list">
                        <span className="search-list">{game.name}{/*console.log("usa")*/}</span>

                        <span className="search-list">{game.price}$</span>
                        <span className="react-icons-sell">
                            <MdRemoveShoppingCart
                                style={{ cursor: "pointer" }} onClick={() => removeFromCart(game)} />
                        </span>
                        <button onClick={() => increase(game.name)} className="list-counter">+</button>
                        <h2 className="list-counter-text">{ispis(game.name)}</h2>
                        <button onClick={() => decrease(game.name)} className="list-counter">-</button>

                    </div>))
            }

        </div>
    )
}
