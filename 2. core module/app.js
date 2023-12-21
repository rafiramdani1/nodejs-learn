// core module
// File System
const chalk = require('chalk')
const fs = require('node:fs')

// menuliskan string ke dalam file secara synchorounous
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World secara synchorounous')
// } catch (e) {
//     console.log(e)
// }

// menuliskan string ke file secara asynchrounous
// fs.writeFile('data/test.txt', 'Hello World secara asynchoronous', (e) => {
//     console.log(e)
// })




// membaca isi file synchrounous
// const data = fs.readFileSync('data/test.txt', 'utf-8')
// console.log(data)

// membaca isi file asynchrounous
// fs.readFile('datas/test.txt', 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })



// readline
const readline = require('node:readline')
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
})
rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan no HP anda : ', (noHP) => {
        const contact = { nama, noHP }
        const path = 'data/contact.json'
        const file = fs.readFileSync(path, 'utf-8');
        const contacts = JSON.parse(file)
        contacts.push(contact)

        fs.writeFileSync(path, JSON.stringify(contacts))
        console.log(`Terimakasih ${nama}, sudah menginputkan ${noHP}. data berhasil disimpa pada "${chalk.blue(path)}"`)
        rl.close()
    })
})