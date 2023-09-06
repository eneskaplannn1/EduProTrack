const express = require("express");
const app = express();
const GlobalErrorHandler = require("./controllers/errorController");

const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

const cookieParser = require("cookie-parser");
//Routers
const teacherRouter = require("./routes/teacherRouter");
const studentRouter = require("./routes/studentRouter");
const homeworkRouter = require("./routes/homeworkRouter");
const classRouter = require("./routes/classRouter");
const authRouter = require("./routes/authRouter");

const path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(
  cors({
    // origin: ["https://eduprotrack-frontend.onrender.com/"],
    origin: ["http://localhost:5173"],
    methods: ["POST", "PATCH", "GET", "DELETE", "PUT"],
  })
);

// app.use((req, res, next) => {
//   //! BU KISIM BENCE COK ONEMLI ZAMAN HARCAMAYA DEĞER!!!
//   //! BU KISIM BENCE COK ONEMLI ZAMAN HARCAMAYA DEĞER!!!
//   //! BU KISIM BENCE COK ONEMLI ZAMAN HARCAMAYA DEĞER!!!
//   // res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE,PATCH"); // "DELETE" ekledik
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

app.use(express.json());
app.use(cookieParser());

// set Security HTTP header
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// Limit request from same IP
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP , please try again in an  hours",
});

app.use("/api", limiter);
// Data sanizitation against NoSQL query injection
app.use(mongoSanitize());
// Data sanizitation against xss query injection
app.use(xss());
//html parameter pollution
app.use(
  hpp({
    whitelist: [
      "duration",
      "price",
      "maxGroupSize",
      "ratingsQuantity",
      "ratingsAverage",
      "difficulty",
    ],
  })
);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/teachers", teacherRouter);
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/classes", classRouter);
app.use("/api/v1/homeworks", homeworkRouter);

app.use(GlobalErrorHandler);

module.exports = app;

// app.get("/set-cookie", (req, res) => {
//   res.cookie(
//     "jwt",
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTZhMzFiNTYwNWRmYzBkMmExMjFmZiIsImlhdCI6MTY5Mjg5MzczNSwiZXhwIjoxNjkyOTgwMTM1fQ.Mbo2-txKiMy-BiIOjUhsLIfGh-h4yTho8U8QEfj1yUw"
//   );
// });
