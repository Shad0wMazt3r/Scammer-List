const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000 || process.env.PORT, () => {
    console.log('Example app listening on port 3000!');
});

//Run app, then load http://localhost:3000 in a browser to see the output.