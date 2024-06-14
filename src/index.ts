import express from 'express';
import cors from 'cors';
import connectDB from './db/connect';
import eventRouter from './routes/eventRoutes';
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1',eventRouter);

connectDB;

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})