const db = require('../Model/models');

const CV = db.me

exports.create = async (req, res) => { 

  console.log(req)
  
   const Curiculum = {
  
      elemenData: req.body.elemenData,
  
      name: req.body.name,
  
      description: req.body.description,
  
  }
  
  console.log("data_peserta",Curiculum)  
  
    await CV.create(Curiculum) //menyimpan data_peserta ke table peserta
  
    .then(data => {
  
      res.send({
  
        message: "Data was insert successfully."
  
      })
  
      })
  
    .catch(err => {
  
      res.status(500).send({
  
        message:
  
          err.message || "Some error occurred while creating data."
  
      });
  
    })
  
  }
// Import database model  

// Function untuk menambah data CV (POST Request)
exports.create = async (req, res) => { 
  // Ngambil data dari request body
  const curiculum = {
    elemenData: req.body.elemenData || '', // kalau elemenData kosong, set default empty string
    name: req.body.name,
    description: req.body.description,
  };

  // Cek data yang masuk lewat console
  console.log("Data masuk:", curiculum);

  // Simpen data ke database
  try {
    await CV.create(curiculum);
    res.status(201).send({
      message: "Data berhasil ditambahkan!"
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Terjadi kesalahan saat menyimpan data."
    });
  }
};

// Function untuk mengupdate data CV (PUT Request)
exports.update = async (req, res) => {
  const id = req.params.id; // ambil ID dari parameter URL

  try {
    const updatedRows = await CV.update(req.body, { where: { id: id } });

    if (updatedRows[0] === 1) {
      res.send({
        message: "Data berhasil diupdate!"
      });
    } else {
      res.send({
        message: `Tidak bisa update data dengan id=${id}. Data tidak ditemukan atau request body kosong!`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: `Terjadi kesalahan saat update data dengan id=${id}.`,
      error: err
    });
  }
};
// Import database model

// Function untuk menambah data CV (POST Request)
exports.create = async (req, res) => { 
  // Ngambil data dari request body
  const curiculum = {
    elemenData: req.body.elemenData || '', // kalau elemenData kosong, set default empty string
    name: req.body.name,
    description: req.body.description,
  };

  // Cek data yang masuk lewat console
  console.log("Data masuk:", curiculum);

  // Simpen data ke database
  try {
    await CV.create(curiculum);
    res.status(201).send({
      message: "Data berhasil ditambahkan!"
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Terjadi kesalahan saat menyimpan data."
    });
  }
};

// Function untuk mengupdate data CV (PUT Request)
exports.update = async (req, res) => {
  const id = req.params.id; // ambil ID dari parameter URL

  try {
    const updatedRows = await CV.update(req.body, { where: { id: id } });

    if (updatedRows[0] === 1) {
      res.send({
        message: "Data berhasil diupdate!"
      });
    } else {
      res.send({
        message: `Tidak bisa update data dengan id=${id}. Data tidak ditemukan atau request body kosong!`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: `Terjadi kesalahan saat update data dengan id=${id}.`,
      error: err
    });
  }
};


//updato
exports.update = async (req, res) => {

  const id = req.params.id

  await CV.update(req.body, { where: { id: id}})

  .then(num => {

      num === 1 ? res.send({

        message: "Data was updated successfully."

      }) : res.send({

        message: `Cannot update Data with id=${id}. Maybe Data was not found or req.body is empty!`

      });

  })

  .catch(err => {

    res.status(500).send({

      message: `Error updating Data with id=${id}`,

      error: err

    })

  })

}


exports.get = async (req, res) => {
  try {
    const data = await CV.findOne(); // Ambil satu data CV
    res.send({ content: data });
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving CV data",
      error: err,
    });
  }
};

//tanda takon