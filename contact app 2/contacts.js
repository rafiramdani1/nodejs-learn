const fs = require('node:fs')
const chalk = require('chalk')
const validator = require('validator')
const path = require('node:path')

const dirPath = './data'
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath)
}

const filePath = './data/contacts.json'
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, '[]', 'utf-8')
}

const loadContact = () => {
  const path = 'data/contacts.json'
  const file = fs.readFileSync(path, 'utf-8')
  const contacts = JSON.parse(file)
  return contacts
}

const saveContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP }
  const contacts = loadContact()

  const duplikat = contacts.find((contact) => contact.nama === nama)
  if (duplikat) {
    console.log(chalk.red.inverse.bold('Contact sudah terdaftar!, gunakan nama lain!'))
    return false
  }

  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold('Email tidak valid'))
      return false
    }
  }

  if (!validator.isMobilePhone(noHP, 'id-ID')) {
    console.log(chalk.red.inverse.bold('Nomor HP tidak valid!'))
    return false
  }

  contacts.push(contact)

  fs.writeFileSync(path, JSON.stringify(contacts), 'utf-8')
  console.log(chalk.blue.inverse.bold('Terimakasih sudah memasukkan data.'))

}

const listContact = () => {
  const contacts = loadContact()
  console.log(chalk.blue.inverse.bold('Daftar Kontak : '))
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`)
  });
}

const detailContact = (nama) => {
  const contacts = loadContact()
  const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())
  if (!contact) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`))
    return false
  }
  console.log(chalk.blue.inverse.bold(contact.nama))
  console.log(contact.noHP)
  if (contact.email) {
    console.log(contact.email)
  }
}

const deleteContact = (nama) => {
  const contacts = loadContact()
  const newContacts = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  )

  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`${nama} tidak terdaftar!`))
    return false
  }

  fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts))
  console.log(chalk.blue.inverse.bold(`Data kontak ${chalk.red.bold(nama)} berhasil dihapus!`))

}

module.exports = { saveContact, listContact, detailContact, deleteContact }