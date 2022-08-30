import express, { Application } from 'express';
//import cors from 'cors';

const app: Application = express();

//app.use(cors());

const port = 3001;

app.listen(
    port, 
    () => console.log(`Conection established! Port: ${port}`)
);