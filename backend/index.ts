import express from 'express'
import contactRouter from './src/routes/contactRoutes'
const app = express()

//CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

//ROUTES
app.use("/api", contactRouter);
//ROUTES


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
