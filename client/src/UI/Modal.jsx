import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

import { ImCross } from "react-icons/im";
import { cloneElement, createContext, useState } from "react";
import { useContext } from "react";

const modalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = (windowName) => setOpenName(windowName);

  console.log(openName);
  return (
    <modalContext.Provider value={{ open, close, openName }}>
      {children}
    </modalContext.Provider>
  );
}

function Open({ children, opens: opendWindowName }) {
  const { open } = useContext(modalContext);

  return cloneElement(children, { onClick: () => open(opendWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(modalContext);
  if (name !== openName) return;

  return createPortal(
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <button onClick={close}>
          <ImCross />
        </button>
        <div className={classes.content}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
