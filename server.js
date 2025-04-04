import { errController } from './controllers/errorHandler.controller.js'
import commentRoute from "./routes/comment.routes.js"
import { connectDB } from './config/db.js'
import { config } from "dotenv"
import express from "express"
config()

let app = express()
let PORT = process.env.PORT || 3000
app.use(express.json())

app.use("/api", commentRoute)

connectDB()
app.use(errController);

process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION 💥");
    console.log(err.name, err.message);
    // process.exit(1);
  });
  
  process.on("uncaughtException", (err) => {
    console.log("UNHANDLED Excpections 💥");
    console.log(err.name, err.message);
    // process.exit(1);
});


app.listen(PORT, () => console.log("this server is running on http://localhost:" + PORT))