const mongoose = require('mongoose') // impor mongoose

// skema untuk collection prodi
const prodiSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true, //wajib diisi
        trim: true
    },
    singkatan: {
        type: String,
        required: true,
        trim: true
    },
    fakultas_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Fakultas",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Prodi = mongoose.model("Prodi", prodiSchema)
// expor model prodi
module.exports = Prodi