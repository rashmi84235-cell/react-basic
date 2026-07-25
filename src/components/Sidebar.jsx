import { Link, useLocation } from "react-router-dom";

function Sidebar() {

  const location = useLocation();

  const isUserPage = location.pathname.startsWith("/users");
  const isAuthPage = location.pathname.startsWith("/auth");

  return (
    <div className="sidebar">

      <h2 className="logo">Fake Store API</h2>


      {/* Main Sections */}
      <Link to="/carts/get-all" className="section-link">
        🛒 Carts
      </Link>

      <Link to="/users/get-all" className="section-link">
        👤 Users
      </Link>

      <Link to="/auth/login" className="section-link">
        🔒 Auth
      </Link>



      {/* Carts Section */}
      {!isUserPage && !isAuthPage && (
        <>
          <h3>🛒 Carts</h3>

          <Link to="/carts/get-all">
            <span className="method get">GET</span>
            Get all carts
          </Link>

          <Link to="/carts/add">
            <span className="method post">POST</span>
            Add a new cart
          </Link>

          <Link to="/carts/single">
            <span className="method get">GET</span>
            Get a single cart
          </Link>

          <Link to="/carts/update">
            <span className="method put">PUT</span>
            Update a cart
          </Link>

          <Link to="/carts/delete">
            <span className="method delete">DELETE</span>
            Delete a cart
          </Link>
        </>
      )}



      {/* Users Section */}
      {isUserPage && (
        <>
          <h3>👤 Users</h3>

          <Link to="/users/get-all">
            <span className="method get">GET</span>
            Get all users
          </Link>

          <Link to="/users/single">
            <span className="method get">GET</span>
            Get a single user
          </Link>

          <Link to="/users/add">
            <span className="method post">POST</span>
            Add a new user
          </Link>

          <Link to="/users/update">
            <span className="method put">PUT</span>
            Update a user
          </Link>

          <Link to="/users/delete">
            <span className="method delete">DELETE</span>
            Delete a user
          </Link>
        </>
      )}



      {/* Auth Section */}
      {isAuthPage && (
        <>
          <h3>🔒 Auth</h3>

          <Link to="/auth/login">
            <span className="method post">POST</span>
            Login
          </Link>
        </>
      )}


    </div>
  );
}

export default Sidebar;