const myApp = new Vue({
  el: "#root",
  data: {
    utentePrincipale: {
      utente: 'img/avatar_io.jpg',
      nome: 'Martina'
    },
    contatti: [
      {
        nome: 'Marco',
        avatar: 'img/avatar_1.jpg',

      },
      {
        nome: 'Fabio',
        avatar: 'img/avatar_2.jpg',

      },
      {
        nome: 'Fabrizio',
        avatar: 'img/avatar_3.jpg',
      },
      {
        nome: 'Alessandra',
        avatar: 'img/avatar_6.jpg',
      },
      {
        nome: 'Enrico',
        avatar: 'img/avatar_7.jpg',
      },
      {
        nome: 'Giacomo',
        avatar: 'img/avatar_8.jpg',
      }
    ]
  }
})
