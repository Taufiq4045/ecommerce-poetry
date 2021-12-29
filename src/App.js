import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Products/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { commerce } from "./lib/commerce";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Pages/AuthPages/Profile";
import AboutPage from "./components/Pages/HomePage/AboutPage";
import RegisterScreen from "./components/Pages/AuthPages/RegisterScreen";
import LoginScreen from "./components/Pages/AuthPages/LoginScreen";
// import axios from "axios";

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("user")));

  const handleLogout = () => {
    localStorage.clear();
    setUserInfo("");
  };

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <CssBaseline />
        <Navbar
          totalItems={cart.total_items}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Switch>
          <Route path="/about" exact>
            <AboutPage component={AboutPage} />
          </Route>
          <Route exact path="/">
            <Products
              products={products}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route path="/checkout" exact>
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/login" component={LoginScreen} exact />
          <div>
            {userInfo ? (
              <>
                {" "}
                <Link to="/profile" style={{ paddingRight: 30 }}>
                  My Profile
                </Link>
                <span
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={handleLogout}
                >
                  Logout
                </span>
              </>
            ) : (
              <></>
            )}
          </div>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;