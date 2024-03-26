import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';

// configures dotenv to work in your application
dotenv.config();
const app = express();

app.use(cors); /* NEW */

app.use(express.json());

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(options));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});