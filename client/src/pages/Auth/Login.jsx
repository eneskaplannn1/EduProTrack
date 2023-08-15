import classes from "./Login.module.css";

function Login() {

  const queryParams = new URLSearchParams(window.location.search);
  let userType = queryParams.get("userType");
  if(!userType) userType="student"


  return (
      <div className={classes.container}>
        <h2>Login as a {userType}</h2>
        <form>
          <div className={classes.inputContainer}>
            <label className={classes.inputLabel} htmlFor="email">Email:</label>
            <input className={classes.inputField} type="email" id="email" name="email" required/>
          </div>
          <div className={classes.inputContainer}>
            <label className={classes.inputLabel} htmlFor="password">Password:</label>
            <input className={classes.inputField} type="password" id="password" name="password" required/>
          </div>
        <div className={classes.signupForgot}>
          <a className={classes.signupLink} href={`/login?userType=${userType === "student" ? "teacher" :"student"}`}>Sign up as a {userType === "student" ? "teacher" :"student"}</a>
          <a className={classes.forgotPassword} href="/forgotPassword">Forgot Password?</a>
        </div>
        <button className={classes.loginButton}>Login</button>
        </form>
        <div className={classes.signupContainer}>
          <p>Or sign up using ?</p>
          <a href="/signup">Sign up</a>
        </div>
      </div>
  );
}

export default Login;
