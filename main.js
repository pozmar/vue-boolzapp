const data = new Date();
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
        ultimoAccesso: data,
        messaggi:[
          {
          messaggiInviati: ['Ciao, come stai?', 'Mi fa piacere, io tutto bene', 'Volentieri!']
        },
        {
          messaggiRicevuti:['Tutto bene, tu?', 'Ci becchiamo per un caffè?', 'Ci aggiorniamo allora']
        }],
        },
      {
        nome: 'Fabio',
        avatar: 'img/avatar_2.jpg',
        ultimoAccesso:'9.35',
        messaggiInviati: ['Hai visto Leo?', 'Ok', 'Non lo troviamo'],
        messaggiRicevuti:['No', 'Vhe è sucesso?', 'Fammi sapere'],
      },
      {
        nome: 'Fabrizio',
        avatar: 'img/avatar_3.jpg',
        ultimoAccesso:'12.23'
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
    openContactIndex: 0,
    listInput: [],
    input: '',
  },
  methods:{
    takeInput: function(){
      this.listInput.push(this.input);
      this.input = '';
    },
    changeIndexContatto: function(index){
      this.openContactIndex = index;
    }

  }
})
