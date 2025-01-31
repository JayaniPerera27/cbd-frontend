import { Link, Route, Routes } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { FaBoxOpen, FaClipboardList, FaUsers } from "react-icons/fa"; // Added suitable icons
import AdminProductPage from "./admin/adminProductPage";

export default function AdminHomePage() {
  return (
    <div className="bg-blue-200 w-full h-screen flex">
      {/* Sidebar */}
      <div className="w-[20%] h-screen bg-blue-500 flex flex-col items-center py-8 space-y-4">

        <Link className="flex items-center gap-2 text-white hover:bg-blue-600 px-4 py-2 rounded w-full justify-start" to="/admin/dashboard">
          <BsGraphUp className="text-xl" /> Dashboard
        </Link>

        <Link className="flex items-center gap-2 text-white hover:bg-blue-600 px-4 py-2 rounded w-full justify-start" to="/admin/products">
          <FaBoxOpen className="text-xl" /> Products
        </Link>

        <Link className="flex items-center gap-2 text-white hover:bg-blue-600 px-4 py-2 rounded w-full justify-start" to="/admin/orders">
          <FaClipboardList className="text-xl" /> Orders
        </Link>

        <Link className="flex items-center gap-2 text-white hover:bg-blue-600 px-4 py-2 rounded w-full justify-start" to="/admin/customers">
          <FaUsers className="text-xl" /> Customers
        </Link>
      </div>

      {/* Main Content */}
      <div className="w-[80%] h-screen bg-gray-100 flex ">
       <Routes path="/*">
       <Route path ="/dashboard" element={<h1>Dashboard</h1>}/>
       <Route path="/products" element={<AdminProductPage/>} />
        <Route path="/orders" element={<h1>Orders</h1>} />
        <Route path="/customers" element={<h1>Customers</h1>} />
        <Route path="/*" element={<h1>404 error Page Not Found</h1>}/>

       
       </Routes>
      </div>
    </div>
  );
}
