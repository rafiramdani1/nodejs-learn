const contacts = require('./contacts')

const main = async () => {
  const nama = await contacts.questions('Masukkan nama anda : ')
  const email = await contacts.questions('Masukkan email anda : ')
  const noHP = await contacts.questions('Masukkan noHP anda : ')

  contacts.saveContact(nama, email, noHP)
}
main()