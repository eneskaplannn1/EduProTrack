const AppError = require("../utilities/errFeature");

const sendErrorDev = (err, req, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
  // if (req.originalUrl.startsWith("/api")) {
  //   return res.status(err.statusCode).json({
  //     status: err.status,
  //     message: err.message,
  //     error: err,
  //     stack: err.stack,
  //   });
  // }

  // res.status(err.statusCode).render("error", {
  //   title: "Something went wrong!",
  //   msg: err.message,
  // });
};

const sendErrorProduction = (err, req, res) => {
  if (req.originalUrl.startsWith("/api")) {
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }

    return res.status(500).json({
      status: "error",
      message: err,
    });
  }

  if (err.isOperational) {
    return res.status(err.statusCode).render("error", {
      title: "Something went wrong!",
      msg: err.messages,
    });
  }
  return res.status(err.statusCode).render("error", {
    title: "Something went wrong!",
    msg: "Please try again later",
  });
};

function handleError(err) {
  if (err.message.startsWith("i")) {
    const message = `invalid email or password`;
    return new AppError(message, 401);
  }
  if (err.message.startsWith("U")) {
    const message = `User changed their password. Please log in again`;
    return new AppError(message, 401);
  }
  const message = `Your password is incorrect`;
  return new AppError(message, 401);
}
function handleCastError(error) {
  const message = `invalid ${error.path} for ${error.value}`;
  return new AppError(message, 404);
}

const handleValidationErr = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join(". ")}`;
  return new AppError(message, 404);
};

const handleDuplicateVal = (err) => {
  const value = Object.values(err.keyValue)[0];
  const message = `This email has already been taken: ${value}. Use another value.`;
  return new AppError(message, 400);
};

const handleInvalidJWT = () => new AppError("Invalid token", 401);
const handleExpiredJWT = () =>
  new AppError("Your session has been expired", 401);

module.exports = (err, req, res, next) => {
  let error = Object.assign(err); // ! çözüm 2

  // console.log(error);
  if (error.name === "Error") error = handleError(error);
  if (error.name === "CastError") error = handleCastError(error);
  if (error.name === "ValidationError") error = handleValidationErr(error);
  if (error.code === 11000) error = handleDuplicateVal(error);

  if (error.name === "JsonWebTokenError") error = handleInvalidJWT(error);

  if (error.name === "TokenExpiredError") error = handleExpiredJWT(error);

  sendErrorProduction(error, req, res);
};
