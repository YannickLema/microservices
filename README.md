# 🛍️ Microservice Catalogue – E-commerce

Ce microservice gère les produits d'un système e-commerce. Il est développé en **Node.js** avec **Express.js** et communique avec le microservice **commande** via des appels HTTP REST.

---

## 📦 Fonctionnalités

- Lister tous les produits
- Récupérer un produit par son ID
- Ajouter un nouveau produit

---

## 🛠️ Technologies

- Node.js
- Express.js
- Docker & Docker Compose
- Jest & Supertest (tests unitaires)

---

## 🚀 Installation & Exécution

### Prérequis

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Lancement avec Docker

1. Cloner le dépôt :

   ```bash
   git clone https://github.com/tonutilisateur/microservices-ecommerce.git
   cd microservices-ecommerce

2. Construire et démarrer les services :

    ```bash
    docker-compose up --build

3. Le service catalogue sera accessible à l'adresse : http://localhost:8081/products


---

## 📖 API Endpoints

### Ajouter un produit
- **Méthode** : `POST`
- **URL** : `/products`
- **Corps de la requête** : 

    ```json
    {
        "id": 1,
        "name": "Écran",
        "price": 150
    }

### Lister tous les produits
- **Méthode** : `GET`
- **URL** : `/products`

### Récupérer un produit par ID
- **Méthode** : `GET`
- **URL** : `/products/{id}`

## 🧪 Tests

Les tests unitaires sont écrits avec **Jest et Supertest**.

### Exécution des tests 

1. Installer les dépendances : 

    ```bash
    npm install

2. Lancer les tests : 

    ```bash
    npm test

## 📁 Structure du projet

     ```bash
    microservices-ecommerce /
    ├── catalogue /
    │   ├── Dockerfile
    │   ├── index.js
    │   ├── package.json
    │   ├── tests /
    │   │   └── product.test.js
    ├── docker-compose.yml
    ├── README.md
     ```
## 🤝 Contribution

1. Forker le projet

2. Créer une branche pour votre fonctionnalité : 
    ```bash
    git checkout -b feature/new-feature

3. Commiter vos modifications : 
    ```bash
    git commit -m "Ajout de ma fonctionnalité"

4. Pousser la branche : 
    ```bash
    git push origin feature/ma-fonctionnalite

5. Ouvrir une pull request

## 📞 Support

Pour toute question ou probleme, veuillez ouvrir une issue.

## 📝 Licence
Ce projet est sous licence MIT. Vous pouvez le modifier et le partager.
