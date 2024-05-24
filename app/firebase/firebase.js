const admin = require('firebase-admin');

const serviceAccount = require('../config/firebaseConfig.json'); // Ruta al archivo JSON de la clave privada

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db
