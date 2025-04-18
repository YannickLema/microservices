const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let counter = 1;
const store = new Map();

// Model « Product »
class Product {
  constructor({ id, name, price }) {
    this.id = id ?? counter++;
    this.name = name;
    this.price = price;
  }
}

// GET /products – retourne tous les produits
app.get('/products', (req, res) => {
  const all = Array.from(store.values());
  res.json(all);
});

// GET /products/:id – retourne un produit par son ID
app.get('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const p = store.get(id);
  if (!p) return res.status(404).json({ error: 'Produit non trouvé' });
  res.json(p);
});

// POST /products – ajoute un produit
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  if (typeof name !== 'string' || typeof price !== 'number') {
    return res.status(400).json({ error: 'name doit être string et price un number' });
  }
  const prod = new Product({ name, price });
  store.set(prod.id, prod);
  res.status(201).json(prod);
});

// Démarrage
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Catalogue service écoutant sur le port ${PORT}`);
});
