const express = require('express');
const app = express();
const port = 3000;

// Définir un dossier pour les fichiers statiques
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

