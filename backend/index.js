import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});


const app = express();


const corsOptions = {
    origin: 'https://work-buddy-frontend.vercel.app', // specify allowed origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // specify allowed headers
  };
  
  app.use(cors(corsOptions));

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.json('App running successfully'));

// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);



app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})