import classes from "./FormLayout.module.css";

function FormLayout({ children }) {
  return <form className={classes.formLayout}>{children}</form>;
}

export default FormLayout;
