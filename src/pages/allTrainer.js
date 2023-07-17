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
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";
import { db } from "../firebaseConfig";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
function AllTrainer() {
  const [allTrainerData, setAllTrainerData] = React.useState([]);
  const [isAwait, setIsAwait] = React.useState(true);
  const handleDelete = async (_id) => {
    try {
      const docRef = doc(db, "trainer", _id);
      await deleteDoc(docRef);
      window.alert("Data has been deleted");
      window.location.reload(false);
    } catch (error) {
      console.log("error", error);
      window.alert("Something is went wrong");
    }
  };
  useEffect(() => {
    const trainerCollectionRef = collection(db, "trainer");
    const getDataFromDb = async () => {
      const data = await getDocs(trainerCollectionRef);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setAllTrainerData(filterData);
      setIsAwait(false);
    };
    getDataFromDb();
  }, []);
  if (allTrainerData.length > 0 && !isAwait) {
    return (
      <>
        <AdminNavBar />
        <div
          style={{
            height: "680px",
            backgroundColor: "white",
            padding: "50px 100px",
          }}
        >
          <TableContainer
            component={Paper}
            style={{ border: "1px solid silver" }}
          >
            <div
              style={{ textAlign: "center", borderBottom: "1px solid silver" }}
            >
              <h1>All Registered Trainer</h1>
            </div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Name
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Email
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Phone
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Address
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allTrainerData.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" align="center" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">{row.address}</TableCell>
                    <TableCell align="center">
                      <Button
                        style={{ backgroundColor: "red" }}
                        onClick={() => handleDelete(row.id)}
                      >
                        Delete
                      </Button>{" "}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </>
    );
  } else if (allTrainerData.length === 0 && isAwait) {
    return (
      <>
        <AdminNavBar />
        <div
          style={{
            height: "680px",
            backgroundColor: "white",
            padding: "50px 100px",
            textAlign: "center",
          }}
        >
          <h3>Loading...</h3>
        </div>
      </>
    );
  } else {
    return (
      <>
        <AdminNavBar />
        <div
          style={{
            height: "680px",
            backgroundColor: "white",
            padding: "50px 100px",
            textAlign: "center",
          }}
        >
          <h3>No Data Found</h3>
        </div>
      </>
    );
  }
}

export default AllTrainer;
