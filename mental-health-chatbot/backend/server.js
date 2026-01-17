const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Mental Health Chatbot API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});