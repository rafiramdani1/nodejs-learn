const { constants } = require('node:buffer')
const fs = require('node:fs')

const dirPath = './data'
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath)
}

const filePath = './data/contacts.json'
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, '[]', 'utf-8')
}

// ambil semua data contact.json
const loadContact = () => {
  const path = 'data/contacts.json'
  const file = fs.readFileSync(path, 'utf-8')
  const contacts = JSON.parse(file)
  return contacts
}

// cari contact berdasarkan nama
const findContact = (nama) => {
  const contacts = loadContact()
  const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())
  return contact
}

// menuliskan / menimpa file contacts.json dengan data yang baru
const saveContacts = (contacts) => {
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
}

//menambahkan data contact baru
const addContact = (contact) => {
  const contacts = loadContact()
  contacts.push(contact)
  saveContacts(contacts)
}

// cek nama yang duplikat
const cekDuplikat = (nama) => {
  const contacts = loadContact()
  return contacts.find((contact) => contact.nama === nama)
}

module.exports = { loadContact, findContact, addContact, cekDuplikat }