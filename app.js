import express from 'express';
import { connect } from 'mongoose';


const app = express();

app.use(express.json());

app.use(async (req, res, next) => {
    await connectDB();
    next();
});