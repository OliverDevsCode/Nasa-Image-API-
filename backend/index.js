const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const getRoute = require('./ENDPOINTS/get')
app.use('/api',getRoute);

module.exports = app;