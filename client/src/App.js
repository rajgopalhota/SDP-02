import "./App.css";
import Landing from "./components/Landing/Landing";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Autobot from "./components/Autobots/Autobot";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Spare from "./components/Spare/Spare";
import PaymentSuccess from "./Payments/PaymentSuccess";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { AuthProvider } from "./Middleware/auth";
import { useState } from "react";
import RequiredAuth from "./Middleware/RequiredAuth";
import Community from './components/Community/Community';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Profile from "./components/Profile/Profile";


function App() {


  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type
    })
  }


  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  let dc = document.title;
  window.addEventListener("blur", () => {
    document.title = "Come back please! 😭";
  });
  window.addEventListener("focus", () => {
    document.title = dc;
  });
  return (
    <div className={darkMode ? "main-body-dark" : "main-body-light"}>
      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>
      <div className="App">
        <div className="darkmode">
          <label className="switch">
            <input type="checkbox" onClick={toggleDarkMode} />
            <span className="slider"></span>
          </label>
        </div>
        <AuthProvider>

          <ToastContainer />

          <Routes>
            <Route path="" element={<Landing />}></Route>
            <Route path="autobots/*" element={<Autobot showAlert={showAlert} alert={alert} />}>
              <Route path="home" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="aboutus" element={<About />} />
              <Route element={<RequiredAuth />}>
                <Route path="services" element={<Services showAlert={showAlert} alert={alert} />} />
              </Route>
              <Route path="spare" element={<Spare />} />
              <Route path="profile" element={<Profile/>} />
              <Route path="cart" element={<Cart />} />
              <Route path="contact" element={<Contact />}></Route>
            </Route>
            <Route path="community" element={<Community />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
