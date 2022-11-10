import app from './server/server';

app.listen(process.env.PORT || 3333, () => {
    console.log(`Listening on port ${process.env.PORT || 3333}`);
})
