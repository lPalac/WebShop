import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import GameGenre from "./GameGenre";
import Modal from "./Modal";
import { CartContext } from "./context/CartContext";
import { CartItemsContext } from "./context/CartContext";



export default function Products() {
    const [gamesGenre, setGamesGenre] = useState([]);
    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [tempGame, setTempGame] = useState();//modal
    const [cart, setCart] = useContext(CartContext);
    const [cartItems, setCartItems] = useContext(CartItemsContext);


    useEffect(() => {
        getGamesGenre()
    }, [])


    const getGamesGenre = async () => {
        const response = await fetch("http://demo2580688.mockable.io/Games")//https://cloud.mongodb.com/v2/6028ee4be5320302b42ba42d#metrics/replicaSet/6028ef5a50dca2446fd6757f/explorer/%3Cdbname%3E/data/find
        const data = await response.json();
        setGamesGenre(data)
    }

    const changeSelected = event => {
        let nes = event.target.selectedIndex;
        //console.log(gamesGenre[nes]);
        setGames(gamesGenre[nes].product)
    }

    const addToCartBtn = (game) => {

        var found = false;
        if (cart.length != 0) {
            for (var i = 0; i < cart.length; i++) {
                if (0 == cart[i].name.localeCompare(game.name)) {
                    if (cartItems[game.name] == null)
                        cartItems[game.name] = 2
                    else {
                        cartItems[game.name]++

                    }
                    found = true
                    console.log(cartItems[game.name]);
                }
            }
        }

        if (!found) {
            setCart([...cart, { ...game }]);//destrukturiramo stari radimo novi objek od game 
            cartItems[game]=1;
            console.log(cartItems[game]);
        }
        setIsOpen(false)
    };

    const addToCart = (game) => {
        setIsOpen(true)
        setTempGame(game) //temp od modela

    };

    return (
        <div>
            <div>
                <div className="dropdown">
                    <p>Žanr igara</p>
                    <select className="dropdown-content" onChange={changeSelected}>
                        {
                            <GameGenre gamesGenre={gamesGenre} />
                        }
                    </select>
                </div>
            </div>

            <div className="search">
                <input className="search-input" type="text" placeholder="Search..." onChange={event => { setSearchTerm(event.target.value) }}></input>
                {
                    games.filter((game => {
                        if (searchTerm == "") {
                            return game.name //nefiltrira nista ako je prazno i samo mapira
                        } else if (game.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return game.name //samo ce vratit one koje includa sto je u inputu
                        }
                    })).map(game => (
                        <div key={game.id} className="list">
                            <span className="search-list"><Link to={"/${game.id}"}>{game.name}</Link></span>
                            <span className="search-list">{game.price}$</span>
                            <span className="react-icons-buy">
                                <MdShoppingCart
                                    style={{ cursor: "pointer" }}
                                    onClick={() => addToCart(game)} />
                            </span>

                        </div>))
                }
            </div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} addToCart={() => addToCartBtn(tempGame)}>
                Želite li dodati u košaricu
            </Modal>
        </div>
    )
}
