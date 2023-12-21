const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')
const fs = require('node:fs')
const chalk = require('chalk')
const rl = readline.createInterface({ input, output })

const dirPath = './data'
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath)
}

const filePath = './data/contacts.json'
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, '[]', 'utf-8')
}

const questions = (ques) => {
  return new Promise((resolve, reject) => {
    rl.question(ques, (args) => {
      resolve(args)
    })
  })
}

const saveContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP }
  const path = 'data/contacts.json'
  const file = fs.readFileSync(path, 'utf-8')
  const contacts = JSON.parse(file)
  contacts.push(contact)

  fs.writeFileSync(path, JSON.stringify(contacts), 'utf-8')
  console.log(`Terimakasih ${chalk.blue(nama)}, telah menginputkan ${chalk.blue(email, noHP)}. data berhasil disimpan pada "${chalk.blue(path)}"`)

  rl.close()
}

module.exports = { questions, saveContact }