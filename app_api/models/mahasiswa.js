const mongoose = require('mongoose');

const MahasiswaSchema = new mongoose.Schema(
  {
    npm: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 8,
      maxlength: 15,
      match: [/^[0-9]+$/, 'NPM harus angka']
    },
    nama: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },
    tempat_lahir: {
      type: String,
      required: true,
      trim: true,
      maxlength: 60
    },
    tanggal_lahir: {
      type: Date,
      required: true,
      validate: {
        validator: (v) => v <= new Date(),
        message: 'Tanggal lahir tidak boleh di masa depan'
      }
    },
    prodi_id: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
      // enum: ['Teknik', 'Ekonomi', 'Kedokteran', 'Hukum', 'FISIP', 'FKIP']
    }
  },
  { timestamps: true } // otomatis createdAt & updatedAt
);

// Index fakultas (opsional)
MahasiswaSchema.index({ fakultas: 1 });

module.exports = mongoose.model('Mahasiswa', MahasiswaSchema);