import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";
import gmLogo from "../images/gm_logo.png";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import ModalCom from "../components/Modal";
import Button from "react-bootstrap/esm/Button";
import TrainerNavBar from "../components/trainerNavBar";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
export default function AllTrainerStudent() {
  const [allCustomerData, setAllCustomerData] = React.useState([]);
  const [show, setShowValue] = React.useState(false);
  const [isAwait, setIsAwait] = React.useState(true);
  const [selectedStudent, setSelectedStudent] = useState({
    name: "",
    id: "",
    link: "",
    dateTime: dayjs("2022-04-17T15:30"),
  });
  const trainerId = localStorage.getItem("id");
  const trainerEmail = localStorage.getItem("email");

  useEffect(() => {
    const customerCollectionRef = collection(db, "customer");
    const getDataFromDb = async () => {
      if (trainerId && trainerId !== "") {
        const data = await getDocs(customerCollectionRef);
        const filterData = [];
        data.docs.forEach((doc) => {
          if (trainerId === doc?.data()?.trainerId) {
            filterData.push({
              ...doc.data(),
              id: doc.id,
            });
          }
        });
        setIsAwait(false);
        setAllCustomerData(filterData);
      }
    };
    getDataFromDb();
  }, []);
  if (allCustomerData.length > 0 && !isAwait) {
    const orderDateTime = (row) => {
      if (row?.registerDate?.seconds) {
        return new Date(row?.registerDate?.seconds * 1000).toDateString();
      }
      return "";
    };
    return (
      <>
        <TrainerNavBar />
        <div style={{ background: "white", padding: "50px", height: "648px" }}>
          <TableContainer
            component={Paper}
            style={{ border: "1px solid silver" }}
          >
            <div
              style={{
                textAlign: "center",
                borderBottom: "1px solid silver",
                padding: "10px",
              }}
            >
              <h1>Your Students List</h1>
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
                    Age
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Register Date
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Appointment/Reservations At
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Schedule Class
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
                    <TableCell align="center">{row?.age}</TableCell>
                    <TableCell align="center">{orderDateTime(row)}</TableCell>
                    <TableCell align="center">
                      {row?.appointmentDate
                        ? row?.appointmentDate
                        : "No appointment yet"}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        style={{ backgroundColor: "#ff5421" }}
                        onClick={() => {
                          setShowValue(true);
                          setSelectedStudent({
                            ...selectedStudent,
                            name: row.name,
                            id: row.id,
                            link: "https://meet.google.com/oue-dtyw-odx",
                          });
                        }}
                      >
                        Schedule Now
                      </Button>{" "}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <ModalCom
          show={show}
          heading={"Schedule Class With Your Student"}
          onHide={() => setShowValue(false)}
          studentInfo={selectedStudent}
        >
          <TextField
            id="outlined-read-only-input"
            label="Student Name"
            defaultValue={selectedStudent.name}
            InputProps={{
              readOnly: true,
            }}
            style={{ marginBottom: 10 }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker"]}>
              <DateTimePicker
                label="Schedule Date & Time"
                value={selectedStudent.dateTime}
                onChange={(newValue) =>
                  setSelectedStudent({ ...selectedStudent, dateTime: newValue })
                }
              />
            </DemoContainer>
          </LocalizationProvider>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <div>
              {" "}
              <img
                src={gmLogo}
                style={{ height: "30px", width: "30px", marginRight: "10px" }}
              />
            </div>
            <div>{selectedStudent.link}</div>
          </div>
        </ModalCom>
      </>
    );
  } else if (allCustomerData.length === 0 && isAwait) {
    return (
      <>
        <TrainerNavBar />
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
        <TrainerNavBar />
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
