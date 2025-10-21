const Berita = require('../models/berita');

// GET: Menampilkan semua data berita
exports.getAllBerita = async (req, res) => {
  try {
    const berita = await Berita.find().sort({ tanggal: -1 });
    res.status(200).json(berita);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST: Menambahkan data berita baru
exports.createBerita = async (req, res) => {
  const { judul, deskripsi, isi, tanggal } = req.body;

  const beritaBaru = new Berita({
    judul,
    deskripsi,
    isi,
    tanggal
  });

  try {
    const savedBerita = await beritaBaru.save();
    res.status(201).json(savedBerita);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};