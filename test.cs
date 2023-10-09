const express = require('express');
const app = express();

// Serve the static HTML file
app.use(express.static(__dirname));

// Route to provide data to the client
app.get('/data', (req, res) => {
    // Simulated server response with random data
    const randomData = `Random data: ${Math.random()}`;
    res.send(randomData);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});