const { MongoClient, ObjectId } = require('mongodb')

const uri = 'mongodb://127.0.0.1:27017'
const dbName = 'rafi'

const client = new MongoClient(uri)

client.connect((error, client) => {
  if (error) {
    return console.log('koneksi gagal')
  }

  // pilih db
  const db = client.db(dbName)

  // menambahkan 1 data ke collection mahasiswa
  // db.collection('mahasiswa').insertOne(
  //   {
  //     nama: 'rudi',
  //     email: 'rudi@gmail.com'
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log('data gagal ditambahkan!')
  //     }
  //     console.log(result)
  //   }
  // )


  // menambahkan lebih dari satu data
  // db.collection('mahasiswa').insertMany([
  //   {
  //     nama: 'rafi',
  //     email: 'raff@yahoo.com'
  //   },
  //   {
  //     nama: 'ginal',
  //     email: 'ginal@gmail.com'
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log('data gagal ditambahkan')
  //     }
  //     console.log(result)
  //   }
  // ])


  // menampilkan semua data
  // console.log(db.collection('mahasiswa').find().toArray((error, result) => {
  //   console.log(result)
  // }))


  // menampilkan data berdasarkan kriteria
  // console.log(db.collection('mahasiswa')
  //   .find({ _id: ObjectId("636d22ecc8d2b095e6c5554b") }).toArray((error, result) => {
  //     console.log(result)
  //   })
  // )


  // mengubah data berdasarkan id
  // const updatePromise = db.collection('mahasiswa').updateOne(
  //   {
  //     _id: ObjectId('636d22ecc8d2b095e6c5554b')
  //   },
  //   {
  //     $set: {
  //       email: 'cavin@yahoo.com'
  //     }
  //   }
  // )

  // updatePromise.then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })


  // mengubah data lebih dari satu berdasarkan kriteria
  // db.collection('mahasiswa').updateMany(
  //   {
  //     nama: 'rafi'
  //   },
  //   {
  //     $set: {
  //       email: 'rafiramdani@gmail.com'
  //     }
  //   }
  // )


  // mengahapus 1 data
  // db.collection('mahasiswa').deleteOne(
  //   {
  //     _id: ObjectId('636d30262b5ef073d26bae12')
  //   }
  // ).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })


  // mengahapus > 1
  db.collection('mahasiswa').deleteMany(
    {
      nama: 'rafi'
    }
  ).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })

})