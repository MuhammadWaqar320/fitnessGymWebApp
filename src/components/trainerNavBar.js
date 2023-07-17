import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
function TrainerNavBar() {
  const history = useHistory();
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
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
              Well Come To Trainer
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link as={Link} to="/trainerpanel">
                View Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/changeProfile">
                Change Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/addDiet">
                Add Diet Plan
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

export default TrainerNavBar;
