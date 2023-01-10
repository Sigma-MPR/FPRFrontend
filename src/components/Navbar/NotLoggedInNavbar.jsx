import { useNavigate } from "react-router";

const NotLoggedInNavbar = () => {
  
  const navigate = useNavigate();
  return (
    <div className="navbar" >
      <div className="flex-1">
        <a href="#" onClick={
          (e) => {
            e.preventDefault()
            navigate('/home');
          }
        }>
          <img src="/images/FPRSquare.png" width={'20%'} alt="FPR" className="logo"/>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#" onClick={(e) => {
            e.preventDefault()
            window.location.href.toString().includes('login')
            ?
            navigate('/signup')
            :
            navigate('/login')
          }}>{
            window.location.href.toString().includes('login')
            ?
            'Sign Up'
            :
            'Login'
          }</a></li>
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

export default NotLoggedInNavbar;