import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import List from "./pages/list/List";
import ProductList from "./pages/products/ProductList";
import DeliveryList from "./pages/delivery/DeliveryList";
import OrderList from "./pages/orders/OrderList";
import Stat from "./pages/stats/Stat";
import NotificationPage from "./pages/notifications/NotificationPage";
import LogsPage from "./pages/logs/LogsPage";
import ServiceHealth from "./pages/serviceHealth/ServiceHealth";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products" element={<ProductList />} />
            <Route path="deliveries" element={<DeliveryList />} />
            <Route path="orders" element={<OrderList />} />
            <Route path="stats" element={<Stat />} />
            <Route path="notifications" element={<NotificationPage />} />
            <Route path="logs" element={<LogsPage />} />
            <Route path="service-health" element={<ServiceHealth />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Single />} />

            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
