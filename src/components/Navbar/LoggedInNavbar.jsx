import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";
const LoggedInNavbar = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('User')));
  }, [])
  // console.log(localStorage.getItem("User"))
  const navigate = useNavigate();
  return (
    <div className="navbar ">
      {/* <img src = {"https://lh3.googleusercontent.com/a/AEdFTp6oO_FtEah5hqN0263DiD0E1nGL7hsx6k1CGTTsHQ=s96-c"} alt="karan"/> */}
      <div className="flex-1">
        <a href="#" onClick={
          (e) => {
            e.preventDefault()
            navigate('/home');
          }
        }>
          <img src="/images/FPRSquare.png" width={'20%'} alt="FPR"  className="logo"/>
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

          <li><a href="#" onClick={
            (e) => {
              e.preventDefault()
              localStorage.removeItem('token')
              navigate('/login')
            }
          }>Logout</a></li>
          <li>
             <img src = {user.picture} alt="Profile" style={{
              borderRadius: "50%",
              height: "70px"
             }}
             onClick={(e) => {
              e.preventDefault()
              navigate('/profile');
            }}
             />
            {/* <img src={user.picture} alt="user-avatar" height={"50px"} width={"50px"} /> */}
            </li>
        </ul>
      </div>
    </div>
    )
}

export default LoggedInNavbar