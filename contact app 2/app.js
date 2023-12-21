const { argv } = require("yargs");
const yargs = require("yargs");
const contacts = require("./contacts");

yargs.command({
  command: 'add',
  describe: 'Menambahkan contact baru',
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: 'string'
    },
    email: {
      describe: 'Email',
      demandOption: false,
      type: 'string'
    },
    noHP: {
      describe: 'No Handphone',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    contacts.saveContact(argv.nama, argv.email, argv.noHP)

  },
}).demandCommand()


yargs.command({
  command: 'list',
  describe: 'Menampilkan semua nama dan no HP contact',
  handler() {
    contacts.listContact()
  }
})

yargs.command({
  command: 'detail',
  describe: 'Menampilkan detail contact berdasarkan nama',
  builder: {
    nama: {
      describe: 'Nama lengkap',
      demandCommand: true,
      type: 'string'
    },
  },
  handler() {
    contacts.detailContact(argv.nama)
  }
})

yargs.command({
  command: 'delete',
  describe: 'Menghapus contact berdasarkan nama',
  builder: {
    nama: {
      describe: 'Nama lengkap',
      demandCommand: true,
      type: 'string'
    },
  },
  handler() {
    contacts.deleteContact(argv.nama)
  }

})

yargs.parse()