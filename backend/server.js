const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");

app.use(cors());

app.use(express.json());


const usersRouter=require("../backend/routes/user")
const doctorRouter=require("../backend/routes/doctor")
const rolesRouter=require("./routes/role")

app.use("/users", usersRouter)
app.use("/doctors",doctorRouter)
app.use("/roles",rolesRouter)

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
