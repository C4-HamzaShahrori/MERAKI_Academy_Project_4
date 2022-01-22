const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");

app.use(cors());

app.use(express.json());

//----------

const usersRouter=require("../backend/routes/user")
const doctorRouter=require("../backend/routes/doctor")
const rolesRouter=require("./routes/role")
const loginRouter=require("../backend/routes/login")
const RecommendedDoctorRouter=require("../backend/routes/recommendedDr")
const commentRouter=require("../backend/routes/comment")
const tipsRouter=require("./routes/tips")


//---------

app.use("/users", usersRouter)
app.use("/doctors",doctorRouter)
app.use("/roles",rolesRouter)
app.use("/login",loginRouter)
app.use("/recommendedDr",RecommendedDoctorRouter)
app.use("/comment",commentRouter)
app.use("/tips",tipsRouter)

//------------------
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
