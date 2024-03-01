import express from 'express'
import contactRouter from './src/routes/contactRoutes'
const app = express()

app.use(express.json());

//CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

//hello world

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//ROUTES
app.use("/api", contactRouter);
//ROUTES


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
