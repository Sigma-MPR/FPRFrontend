import { useNavigate } from "react-router-dom"
const LoggedInNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar ">
      <div className="flex-1">
        <a href="#" onClick={
          (e) => {
            e.preventDefault()
            navigate('/');
          }
        }>
          <img src="images/FPRSquare.png" width={'20%'} alt="FPR"  className="logo"/>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#" onClick={(e) => {
            e.preventDefault()
            navigate('/dashboard');
          }}>
            Dashboard
          </a></li>
          
          <li><a  href="#" onClick={(e) => {
            e.preventDefault()
            navigate('/profile');
          }}>
            Profile
          </a></li>
          <li><a href="#" onClick={
            (e) => {
              e.preventDefault()
              localStorage.removeItem('token')
              navigate('/login')
            }
          }>Logout</a></li>
        </ul>
      </div>
    </div>
    )
}

export default LoggedInNavbar