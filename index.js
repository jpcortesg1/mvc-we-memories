// Import dependences
// External
import express from "express"
import cookieParser from "cookie-parser";
import connect from "./configuration/db.js"

// Personal
import routes from "./routes/index.routes.js"

// Define app
const app = express();

// Configure app
app.set("view engine", "ejs")
connect()

// Define static files
app.use(express.static("public"))

// Define folder for views
app.set("views", "views")

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Define port
const port = process.env.PORT 

// Define routes
app.use("/", routes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});