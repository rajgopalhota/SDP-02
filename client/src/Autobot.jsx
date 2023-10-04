import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./Admin/Admin";
import Overview from "./Admin/Overview/Overview";
import Catalog from "./Admin/Tables/Catalog";
import CommunityTable from "./Admin/Tables/CommunityTable";
import Contacts from "./Admin/Tables/Contacts";
import Registry from "./Admin/Tables/Registry";
import Repair from "./Admin/Tables/Repair";
import Users from "./Admin/Tables/Users";
import "./App.css";
import { AdminAuth, RequiredAuth } from "./Middleware/RequiredAuth";
import { AuthProvider } from "./Middleware/auth";
import PaymentSuccess from "./Payments/PaymentSuccess";
import About from "./components/About/About";
import Autobot from "./components/Autobots/Autobot";
import Cart from "./components/Cart/Cart";
import Chatbot from "./components/Chatbot/Chatbot";
import Community from "./components/Community/Community";
import Contact from "./components/Contact/Contact";
import ForgotPass from "./components/ForgotPass/ForgotPass";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Products from "./components/Products/Products";
import RepairHistory from "./components/RepairHistory/HistoryRepair";
import Services from "./components/Services/Services";
import Spare from "./components/Spare/Spare";
import TestrideHistory from "./components/TestRideHistory/TestrideHistory";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type,
    });
  };

  const [darkMode, setDarkMode] = useState(false);
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
        <div className="chatbot"><Chatbot/></div>
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
            <Route path="forgotpass" element={<ForgotPass />}></Route>
            <Route
              path="autobots/*"
              element={<Autobot showAlert={showAlert} alert={alert} />}
            >
              <Route path="home" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="aboutus" element={<About />} />
              <Route element={<RequiredAuth />}>
                <Route
                  path="services"
                  element={<Services showAlert={showAlert} alert={alert} />}
                />
                <Route path="orders" element={<OrderHistory />} />
                <Route path="testridehistory" element={<TestrideHistory />} />
              </Route>
              <Route path="spare" element={<Spare />} />
              <Route path="repairhistory" element={<RepairHistory />} />
              <Route path="cart" element={<Cart />} />
              <Route path="contact" element={<Contact />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Route>
            <Route path="community" element={<Community />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route element={<AdminAuth />}>
              <Route path="admin" element={<Admin />}>
                <Route path="" element={<Overview />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="registry" element={<Registry />} />
                <Route path="repairs" element={<Repair />} />
                <Route path="catalog" element={<Catalog />} />
                <Route path="community" element={<CommunityTable />} />
                <Route path="users" element={<Users />} />
              </Route>
            </Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
