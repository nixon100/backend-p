import express from 'express';
import db from './database.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json('hello this is the backend');
});

router.get('/data', (req, res) => {
  const q = 'SELECT * FROM referencevaluea';
  db.query(q, (err, data) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(data);
    }
  });
});

export default router;