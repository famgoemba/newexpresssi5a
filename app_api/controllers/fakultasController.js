// impor model fakultas
const fakultasSchema = require("../models/fakultas")

// fungsi untuk mengambil semua isi collection fakultas
const getAllFakultas = async (req, res) => {
    try {
        // GET collection fakultas
        const result = await fakultasSchema.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createfakultas = async (req, res) => {
    //buat instance fakultas baru
    const fakultas = new fakultasSchema ({
        nama: req.body.nama.singkatan
    })
    const hasil = await fakultas.save();
    res.status(201).json(hasil);
}

// export
module.exports = {getAllFakultas, createfakultas}