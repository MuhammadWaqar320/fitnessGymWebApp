import React from "react";
import AdminNavBar from "../components/adminNavBar";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import {
  getDocs,
  collection,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
function AddTrainer() {
  const [trainer, setTrainer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const trainerCollectionRef = collection(db, "trainer");
      await addDoc(trainerCollectionRef, trainer);
      window.alert("Data Added");
    } catch (error) {
      console.log("data is ", error);
      window.alert("Something went wrong");
    }
  };
  return (
    <>
      <AdminNavBar />
      <div
        style={{
          height: "680px",
          backgroundColor: "white",
          padding: "80px 100px",
        }}
        className="row"
      >
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <h3 style={{ marginBottom: "50px" }}>Add New Trainer</h3>
          <Form onSubmit={handleAdd}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter name"
                value={trainer.name}
                onChange={(e) =>
                  setTrainer({ ...trainer, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={trainer.email}
                required
                onChange={(e) =>
                  setTrainer({ ...trainer, email: e.target.value })
                }
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicQ">
              <Form.Label>Phone no.</Form.Label>
              <Form.Control
                type="text"
                value={trainer.phone}
                required
                onChange={(e) =>
                  setTrainer({ ...trainer, phone: e.target.value })
                }
                placeholder="Enter phone no"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicD">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={trainer.address}
                required
                onChange={(e) =>
                  setTrainer({ ...trainer, address: e.target.value })
                }
                placeholder="Enter address"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div class="col-sm-4"></div>
      </div>
    </>
  );
}

export default AddTrainer;
