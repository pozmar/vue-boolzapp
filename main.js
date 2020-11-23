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
        ultimoAccesso:''
      },
      {
        nome: 'Fabio',
        avatar: 'img/avatar_2.jpg',
        ultimoAccesso:''
      },
      {
        nome: 'Fabrizio',
        avatar: 'img/avatar_3.jpg',
        ultimoAccesso:''
      },
      {
        nome: 'Alessandra',
        avatar: 'img/avatar_6.jpg',
        ultimoAccesso:''
      },
      {
        nome: 'Enrico',
        avatar: 'img/avatar_7.jpg',
        ultimoAccesso:''
      },
      {
        nome: 'Giacomo',
        avatar: 'img/avatar_8.jpg',
        ultimoAccesso:''
      }
    ],
    listInput: [],
    input: '',
  },
  methods:{
    takeInput: function(){
      this.listInput.push(this.input);
      this.input = '';
    }
  }
})
