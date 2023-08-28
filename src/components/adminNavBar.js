import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
function AdminNavBar() {
  const history = useHistory();
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log("user is :", user);
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    history.push("/");
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <span
              style={{
                fontFamily: "initial",
                fontSize: "24px",
                color: "#ff5421",
                fontStyle: "italic",
                textDecoration: "none",
              }}
            >
              Well Come To Admin
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link as={Link} to="/admin">
                All Customers
              </Nav.Link>
              <Nav.Link as={Link} to="/alltrainer">
                All Trainers
              </Nav.Link>
              <Nav.Link as={Link} to="/addproduct">
                Add Product
              </Nav.Link>
              <Nav.Link as={Link} to="/allorder">
                All Order
              </Nav.Link>
              <Nav.Link as={Link} to="/payment">
                Subscription Report
              </Nav.Link>
            </Nav>
            <Nav>
              <Button onClick={logout}>Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavBar;
