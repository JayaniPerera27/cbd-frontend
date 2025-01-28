import { Link } from "react-router-dom";

export default function LoginPage(){

    return (
        <div>
            <h1>Login Page</h1>
            <input type="text" placeholder="Enter your user name"/>
            <input type="password" placeholder="Enter your password" />
            <button className="bg-yellow-500">Login</button> 
            <Link to="/">Home</Link>
        </div>
    )
}