import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";


import Carts from "./pages/Carts";
import GetAllCarts from "./pages/GetAllCarts";
import AddNewCart from "./pages/AddNewCart";
import GetSingleCart from "./pages/GetSingleCart";
import UpdateCart from "./pages/UpdateCart.jsx";
import DeleteCart from "./pages/DeleteCart";
import GetAllUsers from "./pages/GetAllUsers";
import GetSingleUser from "./pages/GetSingleUser";
import AddNewUser from "./pages/AddNewUser";
import UpdateUser from "./pages/UpdateUser";
import DeleteUser from "./pages/DeleteUser";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
  <Sidebar />

  <main className="content">
    <Routes>
      <Route path="/" element={<Carts />} />
      <Route path="/carts" element={<Carts />} />
      <Route path="/carts/get-all" element={<GetAllCarts />} />
      <Route path="/carts/add" element={<AddNewCart />} />
      <Route path="/carts/single" element={<GetSingleCart />} />
      <Route path="/carts/update" element={<UpdateCart />} />
      <Route path="/carts/delete" element={<DeleteCart />} />
      <Route path="/users/get-all" element={<GetAllUsers />} />
      <Route path="/users/single" element={<GetSingleUser />} />
      <Route path="/users/add" element={<AddNewUser />} />
      <Route path="/users/update" element={<UpdateUser />} />
      <Route path="/users/delete" element={<DeleteUser />} />
      <Route path="/auth/login" element={<Login />} />
      
    </Routes>
  </main>
</div>
    </BrowserRouter>
  );
}
    
export default App;