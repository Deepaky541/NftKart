import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./navbar.css";
import  logo  from "./img/logo.jpeg";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-right">
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            background: "#3c346a",
            padding: "15px 25px 15px 25px",
            borderRadius: "20px",
            marginTop: "2px",
            border: "1px solid ",
            width: "40px",
          }}
        >
          Home
        </Link>

        <Link to="/cart">
          <ShoppingCartIcon
            style={{
              color: "white",
              background: "#3c346a",
              padding: "15px 25px 15px 25px",
              borderRadius: "20px",
              border: "1px solid ",
              width: "40px",
            }}
          />
        </Link>
      </div>
    </div>
  );
}
