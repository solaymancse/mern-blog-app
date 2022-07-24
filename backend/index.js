require("dotenv").config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
const PostRoutes = require("./routes/PostRoutes")
const cors = require("cors");
const app = express();

express.urlencoded({ extended: true });
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/posts", PostRoutes);
mongoose.connect(process.env.MONGO_URL).then(() => {
 
 
  console.log("DB connected");
}).then(()=>{
  app.listen(process.env.PORT || 8000)
  console.log("server ok");
});
