const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const app = express()
const port = 3000

// setup ejs (view engine)
app.set('view engine', 'ejs')

// Third party middleware
app.use(expressLayouts)
app.use(morgan('dev'))

// Built in middleware
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    layout: 'layouts/main-layout'
  })
})

app.get('/pages', (req, res) => {
  res.render('pages', {
    title: 'Pages',
    layout: 'layouts/main-layout'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    layout: 'layouts/main-layout'
  })
})

app.use((req, res) => {
  res.status(404)
  res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Server started http://localhost:${port}`)
})