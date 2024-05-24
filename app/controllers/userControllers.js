const db = require('../firebase/firebase');
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

  module.exports = {
    getUsers,
}