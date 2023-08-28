import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  getDocs,
  collection,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
function ModalCom({ heading, children, show, onHide, studentInfo }) {
  const Save = async (e) => {
    e.preventDefault();
    const student = {
      name: studentInfo.name,
      id: studentInfo.id,
      link: studentInfo.link,
      dateTime: studentInfo.dateTime.format(),
    };
    try {
      const collectionRef = collection(db, "scheduledClass");
      await addDoc(collectionRef, student);
      window.alert("Class has been scheduled");
      onHide();
    } catch (error) {
      console.log("data is ", error);
      window.alert("Something went wrong");
    }
  };
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={Save}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCom;
