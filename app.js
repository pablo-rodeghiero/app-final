const admin = require('firebase-admin');

const serviceAccount = require('./app/config/firebaseConfig.json'); // Ruta al archivo JSON de la clave privada

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Función para obtener la colección 'users'
async function getUsers() {
  try {
    const usersSnapshot = await db.collection('users').get();
    const users = [];
    usersSnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return users;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
}

// Llamada a la función para obtener la colección 'users'
getUsers()
  .then((users) => {
    console.log('Usuarios:', users);
  })
  .catch((error) => {
    console.error('Error:', error);
  });