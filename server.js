const express = require('express');
const { createServer } = require('vite');

async function start() {
    const app = express();
    const vite = await createServer({
        server: { middlewareMode: 'ssr' }
    });
    app.use(vite.middlewares);
    app.listen(3000, () => {
        console.log('Server is running at http://localhost:3000');
    });
}

start();
