import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>

        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Sign Up
          </button>
        </div>

        <p className="text-center text-gray-600 mt-4">
          Already have an account? 
          <Link to="/signin" className="text-blue-500 hover:underline ml-1">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
