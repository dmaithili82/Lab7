const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // or any other port you prefer

app.use(bodyParser.urlencoded({ extended: true }));

// Mad Lib Form
app.get('/cs212/lab7', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Mad Lib Form</title>
      </head>
      <body>
        <h1>Mad Lib Form</h1>
        <form method="POST" action="/cs212/lab7">
          <label for="noun">Noun:</label>
          <input type="text" name="noun" required><br>

          <label for="adjective">Adjective:</label>
          <input type="text" name="adjective" required><br>

          <label for="verb">Verb:</label>
          <input type="text" name="verb" required><br>

          <label for="color">Color:</label>
          <input type="text" name="color" required><br>

          <label for="place">Place:</label>
          <input type="text" name="place" required><br>

          <button type="submit">Generate Mad Lib</button>
        </form>
      </body>
    </html>
  `);
});

// Handle Mad Lib Form Submission
app.post('/cs212/lab7', (req, res) => {
  const { noun, adjective, verb, color, place } = req.body;
  const madLib = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} in a ${color} ${place}.`;
  res.send(`<h1>Generated Mad Lib:</h1><p>${madLib}</p>`);
});

// New route for do_a_random
app.get('/do_a_random', (req, res) => {
  const randomNum = Math.floor(Math.random() * 1000);
  res.send(`Random Number: ${randomNum}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
