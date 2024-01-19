const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
import imageRoutes from './routes/image';

mongoose.set('strictQuery', false);

const app = express();
//============= Middlewares

app.use(cors());
app.use(morgan('dev'));
app.use(
  express.json({
    limit: '30mb',
  })
);
app.use(
  express.urlencoded({
    limit: '30mb',
    extended: true,
  })
);

//============= Routes
app.use('/', imageRoutes);

//============= Server
const CONNECTION_URL = process.env.MONGO_URL || '';
const port = 5000;
mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err: any) => {
    console.log(err.message);
  });

app.get('/', (req: any, res: any) => {
  res.send('Hello to Memories API');
});
