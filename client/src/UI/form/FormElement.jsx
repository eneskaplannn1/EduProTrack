import classes from "./FormElement.module.css";

function FormElement({ children }) {
  return <div className={classes.formElement}>{children}</div>;
}

export default FormElement;
