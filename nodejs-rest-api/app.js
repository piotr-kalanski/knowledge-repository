const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send(JSON.stringify({
            message: "Hello world!"
    }));
});

app.get('/user/:name', (req, res) => {
    return res.send(JSON.stringify({
            message: `Hello ${req.params.name}`
    }));
});

app.listen(5000, () => {
    console.log(`server running on port 5000`);
});
