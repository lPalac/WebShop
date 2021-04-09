import React from "react"
import "./css/dropdown.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import Header from "./Header";
import Cart from "./Cart";
import Products from "./Products";
import { CartProvider } from "./context/CartContext";
import Weather from "./Weather"
import Login from "./Login"
import Registration from "./Registration"

function App() {

  return (
    <BrowserRouter >
      <CartProvider>
        <div>
            <Header/>

            <Switch>
             <Route path="/" exact component={Login} />
              <Route path="/shop" exact component={Products} />
              <Route path="/cart" component={Cart} />
              <Route path="/registration" component={Registration} />
              <Route path="/getWether" component ={Weather}/>
              <Route path="/shop/:id" component={ItemDetail} />
            </Switch>
          
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
