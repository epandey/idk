// ProjectChangeOrder.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth"); // Assuming this is authentication middleware

const connectDB = require("../config/db").connectDB; // Database connection

// @route    GET api/projectchangeorders
// @desc     Get all project change orders
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    console.log("GET request to projectchangeorders");

    // const connectDB = connectDB();
    // Replace the query as needed to fetch project change orders
    const sqlQuery = "SELECT * FROM changeorder";
    console.log(sqlQuery);

    connectDB.query(sqlQuery, (err, result) => {
      if (err) {
        console.error("Error fetching project change orders: ", err);
        return res.status(500).json({ msg: "Server error" });
      }

      if (result.length) {
        const changeOrders = JSON.parse(JSON.stringify(result));
        res.json(changeOrders);
      } else {
        console.log("No change orders found");
        res.status(404).json({ msg: "No change orders found" });
      }
    });

    //connectDB.end();
  } catch (err) {
    console.error("Server Error", err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
