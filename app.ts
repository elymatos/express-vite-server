import express from 'express'
import app from './mock'
//
// // export default express().use('./api', mock)
//
// const app = express();
//
// app.use('./api', mock)
//
// if (import.meta.env.PROD)
//     app.listen(3000);
//
// export const viteNodeApp = app;

// import express from 'express';

// const app = express();

app.get('/', (req, res) => {
    res.send('change me to see updates llll, express~!');
});

app.get('/ip', async (req, res) => {
    const resp = await fetch('https://api.ipify.org?format=json');
    const json = await resp.json();
    res.json(json);
});

// app.use('./api', mock)

if (import.meta.env.PROD) {
    app.listen(3000);
    console.log('listening on http://localhost:3000/');
}

export const viteNodeApp = app;