import express from 'express';

const app = express();

interface Teste{}

app.get('/', (req, res) => {
    res.send('Hello World!');
});
export default app;
