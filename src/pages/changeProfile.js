import React,{useRef} from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import TrainerNavBar from "../components/trainerNavBar";
import { db } from "../firebaseConfig";
import {
  getDocs,
  collection,
  doc,
  query,
  deleteDoc,
  where,
  updateDoc,
} from "firebase/firestore";
function ChangeProfile() {
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    password: "",
  });
  const handleUpdate = async(e) => {
    e.preventDefault(); 
    try {
      const proDoc = doc(db, "trainer", profile.id);
      await updateDoc(proDoc, profile);
      window.alert("Data Updated");
    } catch (error) {
      console.log("data is ", error);
      window.alert("Something went wrong");
    }
  };
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
    };
    getDataFromDb();
  }, []);
  return (
    <>
      <TrainerNavBar />
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

            <Form onSubmit={handleUpdate}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter name"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={profile.email}
                  required
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                  type="text"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicQ">
                <Form.Label>Phone no</Form.Label>
                <Form.Control
                  type="text"
                  value={profile.phone}
                  required
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                  placeholder="Enter phone"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicD">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  value={profile.password}
                  required
                  onChange={(e) =>
                    setProfile({ ...profile, password: e.target.value })
                  }
                  placeholder="Enter Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicD">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={profile.address}
                  required
                  onChange={(e) =>
                    setProfile({ ...profile, address: e.target.value })
                  }
                  placeholder="Enter Address"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </>
  );
}

export default ChangeProfile;
