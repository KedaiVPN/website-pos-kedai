const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// API lead collection (Opsional untuk kontak/demo)
app.post('/api/lead', (req, res) => {
  const { nama, hp, nama_toko } = req.body;
  if (!nama || !hp) {
    return res.status(400).json({ success: false, message: 'Nama dan Nomor WA wajib diisi.' });
  }
  console.log(`[LEAD BARU] ${nama} (${nama_toko || 'Toko'}) - WA: ${hp}`);
  return res.json({ success: true, message: 'Terima kasih! Tim POS Kedai akan segera menghubungi Anda.' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Website POS Kedai berjalan di http://localhost:${PORT}`);
});
