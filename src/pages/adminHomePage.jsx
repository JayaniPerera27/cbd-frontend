import { Link } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { FaBoxOpen, FaClipboardList, FaUsers } from "react-icons/fa"; // Added suitable icons

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
      <div className="w-[80%] h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-700">Welcome to the Admin Dashboard</h1>
      </div>
    </div>
  );
}
