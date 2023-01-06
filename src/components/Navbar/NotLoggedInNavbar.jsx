const NotLoggedInNavbar = () => {
    return (
        <div className="navbar fixed"style={{
  backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}>
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">FPR</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Sign Up</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
</div>
    )
}

export default NotLoggedInNavbar