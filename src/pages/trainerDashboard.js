import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import TrainerNavBar from "../components/trainerNavBar";
import ViewProfile from './viewProfile';
function TrainerDashboard() {
  return (
    <>
      <TrainerNavBar />
      <div style={ { height: "680px", backgroundColor: "white" } }>
      <ViewProfile/>
      </div>
    </>
  );
}

export default TrainerDashboard;
