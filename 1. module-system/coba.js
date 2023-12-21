function cetakNama(nama) {
    return `nama saya ${nama}`
}

const PI = 3.14

const mahasiswa = {
    nama: 'Muhammad Rafi Ramdani',
    umur: 23,
    cetakMhs() {
        return `nama saya ${this.nama} ${this.umur} tahun`
    }
}

class Orang {
    constructor() {
        console.log('Objek orang telah dibuat')
    }
}

// module.exports.cetakNama = cetakNama
// module.exports.PI = PI
// module.exports.mahasiswa = mahasiswa
// module.exports.Orang = Orang

module.exports = {
    cetakNama,
    PI,
    mahasiswa,
    Orang
}