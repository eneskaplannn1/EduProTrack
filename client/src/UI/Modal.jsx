import { createPortal } from "react-dom";

import { ImCross } from "react-icons/im";
import { cloneElement, createContext, useState } from "react";
import { useContext } from "react";
import { styled } from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1px);
  z-index: 1000;
  transition: all 0.4s ease;
`;
const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 80vw;
  max-width: 80vw;

  height: 90vh;
  max-height: 90vh;

  overflow: auto;

  background-color: #18212f;
  color: white;
  border-radius: 8px;
  transition: all 0.4s ease;

  .content h4 {
    text-align: left;

    margin: 1rem 0 0 1.8rem;
  }

  .content {
    height: 100%;
  }

  .close {
    position: absolute;
    top: 1.2rem;
    right: 1.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: inherit;
    padding: 0.4rem;
    border-radius: 5px;

    border: none;
    outline: none;

    transform: translateX(0.8rem);
    transition: all 0.3s;

    svg {
      width: 1.2rem;
      height: 1.2rem;
      color: #9ca3af;
    }

    :hover {
      background-color: #263756;
    }
  }
`;

const modalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = (windowName) => setOpenName(windowName);

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
  const ref = useOutsideClick(close);

  if (name !== openName) return;
  return createPortal(
    <StyledOverlay>
      <StyledModal ref={ref}>
        <button className="close" onClick={close}>
          <ImCross />
        </button>
        <div className="content">
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </StyledModal>
    </StyledOverlay>,
    document.getElementById("modal")
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
