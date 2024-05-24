const db = require('./app/firebase/firebase');

const hola = require('./app/controllers/userControllers')

hola.getUsers()
  .then((users) => {
    console.log('Usuarios:', users);
  })
  .catch((error) => {
    console.error('Error:', error);
  });


