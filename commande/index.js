// commande/index.js
const express = require('express');
const axios   = require('axios');

const app = express();
app.use(express.json());

// Stockage en mémoire des commandes
const orders = new Map();
let nextOrderId = 1;

// URL de ton service Catalogue (à ajuster si besoin)
const CATALOGUE_URL = process.env.CATALOGUE_URL || 'http://localhost:8081';

// POST /orders
// Body attendu : [1, 2, 3]  (tableau d'IDs de produits)
app.post('/orders', async (req, res) => {
  const productIds = req.body;
  if (!Array.isArray(productIds)) {
    return res.status(400).json({ error: 'Body doit être un tableau d’IDs de produits' });
  }

  try {
    const products = [];
    let total = 0;

    // Pour chaque ID, on appelle le service Catalogue
    for (const id of productIds) {
      const response = await axios.get(`${CATALOGUE_URL}/products/${id}`);
      products.push(response.data);
      total += response.data.price;
    }

    // Création de la commande
    const order = { id: nextOrderId++, products, total };
    orders.set(order.id, order);

    res.status(201).json(order);
  } catch (err) {
    // Si Catalogue renvoie 404
    if (err.response?.status === 404) {
      return res.status(404).json({ error: `Produit avec ID=${err.config.url.split('/').pop()} introuvable` });
    }
    console.error(err);
    res.status(500).json({ error: 'Erreur interne lors de la création de la commande' });
  }
});

// GET /orders/:id
app.get('/orders/:id', (req, res) => {
  const id = Number(req.params.id);
  const order = orders.get(id);

  if (!order) {
    return res.status(404).json({ error: `Commande ${id} non trouvée` });
  }

  res.json(order);
});

// Si on exécute directement ce fichier, on démarre le serveur
const PORT = process.env.PORT || 8082;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Service Commande écoute sur le port ${PORT}`);
  });
}

// Pour pouvoir l'importer dans des tests unitaires
module.exports = app;
