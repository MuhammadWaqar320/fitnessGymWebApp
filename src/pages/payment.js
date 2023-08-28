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
function PaymentReport() {
  const [allPaymentReportData, setAllPaymentReportData] = React.useState([]);
  const [isAwait, setIsAwait] = React.useState(true);
  const handleDelete = async (_id) => {
    try {
      const docRef = doc(db, "payment", _id);
      await deleteDoc(docRef);
      window.alert("Data has been deleted");
      window.location.reload(false);
    } catch (error) {
      console.log("error", error);
      window.alert("Something is went wrong");
    }
  };
  useEffect(() => {
    const PaymentReportCollectionRef = collection(db, "subscription");
    const getDataFromDb = async () => {
      const data = await getDocs(PaymentReportCollectionRef);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setIsAwait(false);
      setAllPaymentReportData(filterData);
    };
    getDataFromDb();
  }, []);
  if (allPaymentReportData.length > 0 && !isAwait) {
    const orderDateTime = (row) => {
      if (row?.subscriptionDate?.seconds) {
        return new Date(row?.subscriptionDate?.seconds * 1000).toDateString();
      }
      return "";
    };
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
              <h1>Subscription & Payment Report</h1>
            </div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Customer Id
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Payment Id
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Subscription Date
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Subscription Plan
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Total Paid Amount
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allPaymentReportData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row?.customerId}</TableCell>
                    <TableCell align="center">{row?.paymentId}</TableCell>
                    <TableCell align="center">{orderDateTime(row)}</TableCell>
                    <TableCell align="center">
                      {row?.subscriptionPlan}
                    </TableCell>
                    <TableCell align="center">{row?.totalAmount}</TableCell>

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
  } else if (allPaymentReportData.length === 0 && isAwait) {
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

export default PaymentReport;
