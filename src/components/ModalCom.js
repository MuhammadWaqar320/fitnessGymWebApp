import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AllChatUI from "../pages/allChatUI";
function RModal({ show, setShow }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <AllChatUI handleClose={handleClose} />
      </Modal>
    </>
  );
}

export default RModal;
