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
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { AuthProvider } from "./components/auth";
import { useState } from "react";
import RequiredAuth from "./components/RequiredAuth";
// import Community from './components/Community/Community';
import Community from "./components/Community/Community";
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
      <div className="App">
        <div className="darkmode">
          <label class="switch">
            <input type="checkbox" onClick={toggleDarkMode} />
            <span class="slider"></span>
          </label>
        </div>
        <AuthProvider>
          <Routes>
            <Route path="" element={<Landing />}></Route>
            <Route path="autobots" element={<Autobot showAlert={showAlert} alert={alert} />}>
              <Route path="home" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="aboutus" element={<About />} />
              <Route element={<RequiredAuth />}>
                <Route path="spare" element={<Spare />} />
              </Route>
              <Route path="services" element={<Services />} />
              <Route path="cart" element={<Cart />} />
              <Route path="contact" element={<Contact />}></Route>
            </Route>
            <Route path="community" element={<Community />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
