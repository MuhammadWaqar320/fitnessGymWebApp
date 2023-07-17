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
import TrainerNavBar from "../components/trainerNavBar";
function AddDiet() {
  const [diet, setDiet] = useState({
    name: "",
    noOfDays: "",
    description: "",
  });
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const productCollectionRef = collection(db, "diet");
      await addDoc(productCollectionRef, diet);
      window.alert("Data Added");
    } catch (error) {
      console.log("data is ", error);
      window.alert("Something went wrong");
    }
  };
  return (
    <>
      <TrainerNavBar />
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
          <h3 style={{ marginBottom: "50px" }}>Add New Diet</h3>
          <Form onSubmit={handleAdd}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter name of diet"
                value={diet.name}
                onChange={(e) => setDiet({ ...diet, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>No of days</Form.Label>
              <Form.Control
                value={diet.noOfDays}
                required
                onChange={(e) => setDiet({ ...diet, noOfDays: e.target.value })}
                type="number"
                placeholder="Enter no of days"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicD">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={diet.description}
                required
                onChange={(e) =>
                  setDiet({ ...diet, description: e.target.value })
                }
                placeholder="Enter description"
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

export default AddDiet;
