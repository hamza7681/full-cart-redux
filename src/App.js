import MainNavbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ViewProduct from "./Components/Home/ViewProduct";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
 
  return (
    <>
      <ToastContainer />
      <MainNavbar />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:name" element={<ViewProduct />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
