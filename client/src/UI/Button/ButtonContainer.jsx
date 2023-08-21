import classes from "./ButtonContainer.module.css";

function ButtonContainer({ children }) {
  return <div className={classes.container}>{children}</div>;
}

export default ButtonContainer;
