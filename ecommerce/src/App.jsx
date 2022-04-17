import React from "react";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";
function App(){
    const user = useSelector(state=>state.user.currentUser);
    
   
    return (
        <Router>
            <Routes>
                <Route path = "/" element= {<Home/>}></Route>
            </Routes>
            <Routes>
                <Route path = "/products/:category" element= {<ProductList/>}></Route>
            </Routes>
            <Routes>
                <Route path = "/product/:id" element= {<Product/>}></Route>

            </Routes>
            <Routes>
                <Route path = "/Cart" element= {<Cart/>}></Route>
            </Routes>

            <Routes>
                <Route path = "/login" element= { user?<Navigate to ="/"/>:<Login/>} ></Route>
            </Routes>
            <Routes>
                <Route path = "/register" element= { user?<Navigate to ="/"/>:<Register/>}></Route>
            </Routes>
            <Routes>
                <Route path = "/success" element= { <Success/>}></Route>
            </Routes>
        </Router>
    );
}
export default App;