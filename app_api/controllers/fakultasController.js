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

// fungsi untuk mengambil isi collection fakultas berdasarkan parameter id
const getFakultasById = async (req, res) => {
    try {
        // GET collection fakultas berdasarkan id  
        const result = await fakultasSchema.findById(req.params.id)
        if(!result){
            // Jika data fakultas tidak ada pada MongoDB
            res.status(404).json({message: "Fakultas tidak ditemukan"})
        } else {
            // Jika data fakultas ada
            res.status(200).json(result)
        }
    }catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateFakultasById = async (req, res) => {
    try {
        // GET collection fakultas berdasarkan id  
        const result = await fakultasSchema.findById(req.params.id)
        if(!result){
            // Jika data fakultas tidak ada pada MongoDB
            res.status(404).json({message: "Fakultas tidak ditemukan"})
        } else {
            // Jika data fakultas ada
            // jika ada request perubahan nama
            if (req.body.nama != null) {
                result.nama = req.body.nama
            }
            // jika ada request perubahan singkatan
            if (req.body.singkatan != null) {
                result.singkatan = req.body.singkatan
            }
            // update data fakultas
            const updatedFakultas = await result.save()
            res.status(200).json(result)
        }
    }catch (error) {
        res.status(500).json({message: error.message})
    }
}

 const deleteFakultasById = async (req, res) => {
    try {
        // GET collection fakultas berdasarkan id  
        const result = await fakultasSchema.findById(req.params.id)
        if(!result){
            // Jika data fakultas tidak ada pada MongoDB
            res.status(404).json({message: "Fakultas tidak ditemukan"})
        } else {
            // Jika data fakultas ada, maka hapus data fakultas berdasarkan id
            await result.deleteOne();
            res.status(200).json({message: "Fakultas berhasil dihapus"})
        }
    }catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createfakultas = async (req, res) => {
    //buat instance fakultas baru
    const fakultas = new fakultasSchema ({
        nama: req.body.nama,
        singkatan: req.body .singkatan
    })
    const hasil = await fakultas.save();
    res.status(201).json(hasil);
}

// export
module.exports = {getAllFakultas, getFakultasById, createfakultas, deleteFakultasById, updateFakultasById}