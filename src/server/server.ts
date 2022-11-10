import express from 'express';
import router from './routes'
import 'dotenv/config';
const app = express();

interface Teste{}

app.use(router)
app.use(express.json())



export default app;
