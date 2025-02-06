import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ItemsPage from "../pages/ItemsPage";
import ItemDetailsPage from "../pages/ItemDetailsPage";
import CartPage from "../pages/CartPage";
import OrdersPage from "../pages/OrderPage";
import { Header } from "../components";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/items/:id" element={<ItemDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
