import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import AdminNavBar from "../components/adminNavBar";
import AllCustomer from "./allCustomer";
function AdminDashboard() {
  return (
    <>
      <AdminNavBar />
      <div
        style={{
          height: "680px",
          backgroundColor: "white",
          padding:"50px 100px"
        }}
      >
        <AllCustomer />
      </div>
    </>
  );
}

export default AdminDashboard;
