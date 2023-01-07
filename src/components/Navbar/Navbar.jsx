import LoggedInNavbar from "./LoggedInNavbar";
import NotLoggedInNavbar from "./NotLoggedInNavbar";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import './Navbar.css'
const Navbar = () => {
    const location = useLocation();
    useEffect(() => {
    }, [location.pathname])
    
    if(window.location.pathname.includes("login", "register", "forgot-password", "reset-password",))
        return <NotLoggedInNavbar />
    else
        return <LoggedInNavbar />
}

export default Navbar