const express = require('express');
const app = express();

// Serve the static HTML file
app.use(express.static(__dirname));

// Route to provide data to the client
app.get('/data', (req, res) => {
	
	//console.log(req);
	
    let param1 = req.query.param1;
    let param2 = req.query.param2;


	console.log(param2);
	
    // You can process the parameters here as needed
    // For demonstration, let's just send them back as JSON
    //res.json({ param1, param2 });
	
	
    // Simulated server response with random data
    //const randomData = `Random data: ${Math.random()}`;
	let output1 = `${param1} says ${param2}`;
	
    res.send(output1);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});