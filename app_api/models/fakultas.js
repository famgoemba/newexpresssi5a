const mongoose = require('mongoose'); // impor mongoose

// skema untuk collection fakultas
const fakultasSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true, // wajib diisi
        trim: true
    },
    singkatan: {
        type: String,
        require: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
// sertakan skema fakultas ke dalam fakultas
const Fakultas = mongoose.model("Fakultas", fakultasSchema)
// expor model Fakultas
module.exports = Fakultas