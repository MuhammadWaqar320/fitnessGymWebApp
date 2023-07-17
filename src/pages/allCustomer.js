import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { db } from "../firebaseConfig";
import { useEffect } from "react";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import Button from "react-bootstrap/esm/Button";

export default function AllCustomer() {
  const [allCustomerData, setAllCustomerData] = React.useState([]);
  const [isAwait, setIsAwait] = React.useState(true);
  const handleDelete = async (_id) => {
    try {
      const docRef = doc(db, "customer", _id);
      await deleteDoc(docRef);
      window.alert("Data has been deleted");
      window.location.reload(false);
    } catch (error) {
      console.log("error", error);
      window.alert("Something is went wrong");
    }
  };

  useEffect(() => {
    const customerCollectionRef = collection(db, "customer");
    const getDataFromDb = async () => {
      const data = await getDocs(customerCollectionRef);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setIsAwait(false);
      setAllCustomerData(filterData);
    };
    getDataFromDb();
  }, []);
  if (allCustomerData.length > 0 && !isAwait) {
    return (
      <TableContainer component={Paper} style={{ border: "1px solid silver" }}>
        <div style={{ textAlign: "center", borderBottom: "1px solid silver" }}>
          <h1>All Registered Customer</h1>
        </div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ fontWeight: "bold" }}>
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
            {allCustomerData.map((row) => (
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
    );
  } else if (allCustomerData.length === 0 && isAwait) {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Loading...</h3>
      </div>
    );
  } else {
    return (
      <>
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
