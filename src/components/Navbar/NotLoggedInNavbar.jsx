import { useNavigate } from "react-router";

const NotLoggedInNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar fixed" style={{
      backgroundColor: "rgba(255, 255, 255, 0.9)",
    }}>
       <div className="flex-1">
        <a href="#" onClick={
          (e) => {
            e.preventDefault()
            navigate('/');
          }
        }>
          <img src="images/FPRSquares.png" width={'35%'}  />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#" onClick={(e) => {
            e.preventDefault()
            window.location.href = "/signup"
          }}>Sign Up</a></li>
          <li><a href="#" onClick={
            (e) => {
              e.preventDefault()
              window.location.href = "/"
            }
          }>About Us</a></li>
        </ul>
      </div>
    </div>
  )
}

export default NotLoggedInNavbar