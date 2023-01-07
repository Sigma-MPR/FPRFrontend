import { useNavigate } from "react-router-dom"
const LoggedInNavbar = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <img src="images/FPRSquare.png" width={'110px'} className="-mt-7"/>
            </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
              <li>
                <a className="justify-between" href="#" onClick={(e)=>{
                  e.preventDefault()
                  navigate('/profile');
                }}>
                  Profile
                </a>
              </li>
              <li><a href="#" onClick={
                (e)=>{
                  e.preventDefault()
                  localStorage.removeItem('token')
                  navigate('/login')
                }
              }>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default LoggedInNavbar