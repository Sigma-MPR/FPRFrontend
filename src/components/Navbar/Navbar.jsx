import LoggedInNavbar from "./LoggedInNavbar";
import NotLoggedInNavbar from "./NotLoggedInNavbar";
import './Navbar.css'
const Navbar = () => {
    if(window.location.pathname.includes("login", "register", "forgot-password", "reset-password",))
        return <NotLoggedInNavbar />
    else
        return <LoggedInNavbar />
}

export default Navbar