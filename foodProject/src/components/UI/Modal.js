import classes from "./Modal.module.css";
import { ReactDOM } from "react";

const BackDrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}
