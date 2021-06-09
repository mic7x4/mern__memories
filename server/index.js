import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js';


const app  = express();
app.use(bodyParser.json({limit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended: true}));
app.use(cors());
app.use('/post',postRoutes);

const CONNECTION_URL = 'mongodb+srv://michael:p0w3rcuda@cluster0.ozhw7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=> console.log(`Server is Running on PORT ${PORT}`)))
.catch((error) => console.error(error))
const PORT = 5000

