import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import TrainerNavBar from "../components/trainerNavBar";
import Table from "react-bootstrap/Table";
import { db } from "../firebaseConfig";
import {
  getDocs,
  collection,
  doc,
  query,
  deleteDoc,
  where,
} from "firebase/firestore";
function ViewProfile() {
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    password: "",
  });

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    const orderCollectionRef = collection(db, "trainer");
    const Query = query(orderCollectionRef, where("email", "==", userEmail));
    const getDataFromDb = async () => {
      const data = await getDocs(Query);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProfile(filterData[0]);
      console.log("--------:", filterData);
    };
    getDataFromDb();
  }, []);
  return (
    <>
      <div style={{ height: "720px", backgroundColor: "white" }}>
        <div className="row">
          <div className="col-sm-4"></div>
          <div
            className="col-sm-4"
            style={{
              marginTop: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                height="180px"
                width="180px"
              />
            </div>

            <Table striped bordered hover style={{ textAlign: "center" }}>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{profile.name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{profile.email}</td>
                </tr>
                <tr>
                  <td>Phone no.</td>
                  <td>{profile.phone}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>{profile.address}</td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>{profile.password}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </>
  );
}

export default ViewProfile;
