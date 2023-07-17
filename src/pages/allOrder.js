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
function AllOrder() {
  const [allOrderData, setAllOrderData] = React.useState([]);
  const [isAwait, setIsAwait] = React.useState(true);
  const handleDelete = async (_id) => {
    try {
      const docRef = doc(db, "order", _id);
      await deleteDoc(docRef);
      window.alert("Data has been deleted");
      window.location.reload(false);
    } catch (error) {
      console.log("error", error);
      window.alert("Something is went wrong");
    }
  };
  useEffect(() => {
    const orderCollectionRef = collection(db, "order");
    const getDataFromDb = async () => {
      const data = await getDocs(orderCollectionRef);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setIsAwait(false);
      setAllOrderData(filterData);
    };
    getDataFromDb();
  }, []);
  if (allOrderData.length > 0 && !isAwait) {
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
              <h1>All Orders</h1>
            </div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Customer Id
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Product Id
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Bill
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Order Date
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allOrderData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" align="center" scope="row">
                      {row.customerId}
                    </TableCell>
                    <TableCell align="center">{row.productId}</TableCell>
                    <TableCell align="center">{row.totalBill}</TableCell>
                    <TableCell align="center">{row.orderDate}</TableCell>
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
  } else if (allOrderData.length === 0 && isAwait) {
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

export default AllOrder;
