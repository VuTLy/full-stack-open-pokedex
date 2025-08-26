const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

// Serve static files from 'dist'
app.use(express.static('dist'))

// Health check endpoint
app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
