const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const app = express()
const port = 3000

// setup ejs (view engine)
app.set('view engine', 'ejs')


// Application level middleware
app.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// Third party middleware
app.use(expressLayouts)
app.use(morgan('dev'))

// Built in middleware
app.use(express.static('public'))

app.get('/', (req, res) => {
  const mahasiswa = [
    {
      nama: 'Muhammad Rafi Ramdani',
      email: 'rafiramdani@gmail.com'
    },
    {
      nama: 'Akmal',
      email: 'akmal@gmail.com'
    }
  ]
  res.render('index', {
    nama: 'Muhammad Rafi Ramdani',
    title: 'Home',
    mahasiswa,
    layout: 'layouts/main-layout'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    layout: 'layouts/main-layout'
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact',
    layout: 'layouts/main-layout'
  })
})

app.get('/product/:id', (req, res) => {
  res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`)
})

// app.use((req, res) => {
//   res.status(404)
//   res.send('<h1>404</h1>')
// })

app.listen(port, () => {
  console.log(`Server started http://localhost:${port}`)
})