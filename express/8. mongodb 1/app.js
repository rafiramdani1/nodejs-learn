const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

require('./utils/db')
const Contact = require('./model/contact')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Config Flash
app.use(cookieParser('secret'));
app.use(session({
  cookie: { maxAge: 6000 },
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))
app.use(flash())

// PAGE HOME
app.get('/', (req, res) => {
  const mahasiswa = [
    {
      nama: 'Muhammad Rafi Ramdani',
      email: 'rafiramdani@gmail.com'
    },
    {
      nama: 'Alif Muhammad Akmal',
      email: 'akmal@gmail.com'
    },
    {
      nama: 'Calvin CS Hutasoit',
      email: 'calvin@gmail.com'
    }
  ]
  res.render('index', {
    nama: 'Muhammad Rafi Ramdani',
    title: 'Halaman Home',
    mahasiswa,
    layout: 'layouts/main-layout'
  })
})

// PAGE ABOUT
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Halaman About',
    layout: 'layouts/main-layout'
  })
})

// CONTACT PAGE
app.get('/contact', async (req, res) => {

  // Contact.find().then((contact) => {
  //   res.send(contact)
  // })

  const contacts = await Contact.find()

  res.render('contact', {
    title: 'Halaman Contact',
    layout: 'layouts/main-layout',
    contacts,
    msg: req.flash('msg')
  })
})

// Halaman detail contact
app.get('/contact/:nama', async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama })

  res.render('detail', {
    title: 'Halaman Detail Contact',
    layout: 'layouts/main-layout',
    contact
  })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})