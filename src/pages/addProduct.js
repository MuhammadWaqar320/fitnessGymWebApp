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
function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    qty: 0,
    description: "",
  });
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const productCollectionRef = collection(db, "product");
      await addDoc(productCollectionRef, product);
      window.alert("Data Added");
    } catch (error) {
        console.log("data is ",error)
      window.alert("Something went wrong");
    }
    console.log("result is :", product);
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
          <h3 style={{ marginBottom: "50px" }}>Add New Product</h3>
          <Form onSubmit={handleAdd}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter name"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                value={product.price}
                required
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
                type="text"
                placeholder="Enter price"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicQ">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                value={product.qty}
                required
                onChange={(e) =>
                  setProduct({ ...product, qty: e.target.value })
                }
                placeholder="Enter quantity"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicD">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={product.description}
                required
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
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

export default AddProduct;
