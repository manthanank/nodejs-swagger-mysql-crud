const express = require("express");
const bodyParser = require("body-parser");
const swaggerSetup = require("./swagger");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send(
    "API is running... Do you want to see the API documentation? Go to /api-docs"
  );
});
app.use("/api", userRoutes);

// Swagger setup
swaggerSetup(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
