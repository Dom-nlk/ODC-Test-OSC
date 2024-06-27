
   // URL de base de l'API
   const baseURL = 'http://localhost:3000/api';

   // Créer un nouvel article
   async function createArticle(article) {
     const response = await fetch(`${baseURL}/articles`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(article)
     });
     const data = await response.json();
     console.log('Article créé:', data);
   }

   // Afficher tous les articles
   async function getArticles() {
     const response = await fetch(`${baseURL}/articles`);
     const data = await response.json();
     console.log('Tous les articles:', data);
   }

   // Exemple d'utilisation
   createArticle({ title: 'Mon premier article', auteur: 'Dominique', content: 'Ceci est le contenu de l\'article.' });
   getArticles();