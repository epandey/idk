const express = require("express");
const colors = require("colors");
const path = require("path");

const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const host = process.env.host;

connectDB.connectDB;

const app = express();
// Init Middleware
app.use(express.json());

app.get("/", (req, res) => res.send("API Running"));

//define routes
app.use("/api/customer", require("./routes/customerRoutes"));
app.use("/api/login", require("./routes/login"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/projects", require("./routes/projects"));
app.use("/api/projectitems", require("./routes/projectItems"));
app.use("/api/warehouses", require("./routes/warehouses"));
app.use("/api/projectclasses", require("./routes/projectClasses"));
app.use("/api/managers", require("./routes/managers"));
app.use("/api/stages", require("./routes/projectStages"));
app.use("/api/status", require("./routes/projectStatus"));
app.use("/api/types", require("./routes/projectTypes"));
app.use("/api/customerApproval", require("./routes/customerApproval"));
app.use("/api/projectTasks", require("./routes/projectTasks"));
app.use("/api/projectChangeOrder", require("./routes/projectChangeOrder"));
app.use("/api/invoices", require("./routes/invoice"));

console.log(port);

//static assets in server production
if (process.env.NODE_ENV === "production") {
  console.log("production");

  // set static folder
  const root = require("path").join(__dirname, "frontend", "build");
  app.use(express.static(root));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("index.html", { root }));
  });
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
