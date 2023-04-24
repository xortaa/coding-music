const express = require('express')

const app = express()

app.use('/', (req, res) => { 
  res.redirect('https://www.youtube.com/watch?v=hKKJyZYZQkk')
})

app.listen(9000, () => { 
  console.log(`server is listening on port 9000`)
})