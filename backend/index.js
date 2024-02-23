const express = require('express')

const app = express()

//CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

//ROUTES

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
