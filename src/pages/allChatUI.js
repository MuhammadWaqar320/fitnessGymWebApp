import React from "react";
import TrainerNavBar from "../components/trainerNavBar";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
const AllChatUI = ({ handleClose }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          padding: 15,
          paddingBottom: 5,
          overflowX: "hidden",
        }}
      >
        <h3 style={ { textAlign: "center" } }>More Information</h3>
        <p>Please install our mobile app for more detail. You can subscribe our plan from our mobile app. You can download our app from play Store and App Store</p>
        <div style={{ textAlign: "right" }}>
          <button
            style={{ paddingLeft: 2, paddingRight: 2 }}
            onClick={() => handleClose()}
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default AllChatUI;
