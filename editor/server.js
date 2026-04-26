const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const DATA_PATH = path.join(__dirname, '../public/data.json');

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Serve the editor UI
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// GET /api/data — read data.json
app.get('/api/data', (req, res) => {
  try {
    const raw = fs.readFileSync(DATA_PATH, 'utf8');
    res.json(JSON.parse(raw));
  } catch (err) {
    res.status(500).json({ error: 'Could not read data.json', detail: err.message });
  }
});

// POST /api/data — write data.json
app.post('/api/data', (req, res) => {
  try {
    const json = JSON.stringify(req.body, null, 2);
    fs.writeFileSync(DATA_PATH, json, 'utf8');
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Could not write data.json', detail: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✏️  Portfolio editor running at http://localhost:${PORT}`);
});
