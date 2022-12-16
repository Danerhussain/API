import express from 'express';
import bodyParser from 'body-parser';
const app = express();  
// Det är ungefär som att du skapar ett objekt i en klass., du kan kalla det var app, teve, bajs allt

const mongoose = require('mongoose') // Import mongoose, a tool that gives NoSQL DB (such as MongoDB) the ability of a relational DB

import usersRoutes from './routes/users.js';
import mongoose from 'mongoose';


const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.'));

// app.listen(PORT)
// Vi kräver ett av deras metoder att lyssna till (PORT)

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));

mongoose.connect (
  `mongodb+srv://<danerhussain >:<husby164>@cluster0.vkfezrk.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true},
  () => {
  console.log('DB connected'); 
  }
)

// Listen to server 
app.listen(process.env.PORT || 5000);

/*{
    firstname: "Daner",
    lastName: "Hussain",
    age: 21
  },
  {
    firstname: "Jane",
    lastName: "Doe",
    age: 24
  }*/

