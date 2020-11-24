const access = new Date();

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
        ultimoAccesso: access,
        messaggi:[
          {
            text: 'Ciao, come stai?', type: 'received'
          },
          {
            text:'Tutto bene, tu?',
            type: 'sent',
          },
          {
            text: 'Non mi posso lamentare. Ci sei stasera?',
            type: 'received',
          },
          {
            text: 'Non penso, sono al compleanno di una collega!',
            type: 'sent'
          }
        ]
      },

      {
        nome: 'Fabio',
        avatar: 'img/avatar_2.jpg',
        ultimoAccesso:'9.35',
        messaggi:[
          {
            text: 'Hai visto Flaffy?',
            type: 'received'
          },
          {
            text:'No, perchè?',
            type: 'sent',
          },
          {
            text: 'Non lo troviamo',
            type: 'received',
          },
          {
            text: 'Magari è nascosto da qualche parte',
            type: 'sent'
          },
          {
            text: 'Speriamo',
            type: 'received',
          },
        ]
      },
      {
        nome: 'Fabrizio',
        avatar: 'img/avatar_3.jpg',
        ultimoAccesso:'12.23',
        messaggi:[
          {
            text: 'Come sta andando al lavoro?',
            type: 'received'
          },
          {
            text:'Disastro',
            type: 'sent',
          },
          {
            text: 'Come mai?',
            type: 'received',
          },
          {
            text: 'Capi pazzi, per fortuna i colleghi sono sani di mente',
            type: 'sent'
          },
          {
            text: 'Vi fate compagnia almeno',
            type: 'received',
          },
        ]
      },
      {
        nome: 'Alessandra',
        avatar: 'img/avatar_6.jpg',
        ultimoAccesso:'',
        messaggi:[
          {
            text: 'Passato il test!',
            type: 'received'
          },
          {
            text:'Grande!',
            type: 'sent',
          },
          {
            text: "Ho fatto un po' di confusione nella parte centrale ma ce l'ho fatta ugualmente",
            type: 'received',
          },
          {
            text: 'Hai studiato tanto, te lo sei meritato',
            type: 'sent'
          },
          {
            text: 'Yeees',
            type: 'received',
          },
        ]
      },
      {
        nome: 'Enrico',
        avatar: 'img/avatar_7.jpg',
        ultimoAccesso:'',
        messaggi:[
          {
            text: 'Ci vediamo domani mattina allora',
            type: 'received'
          },
          {
            text:'Confermo, viene anche Simona',
            type: 'sent',
          },
          {
            text: 'Perfetto',
            type: 'received',
          },
        ]
      },
      {
        nome: 'Giacomo',
        avatar: 'img/avatar_8.jpg',
        ultimoAccesso:'',
        messaggi:[
          {
            text:'Sei stato da Marco ieri?',
            type: 'sent',
          },
          {
            text: 'No, ero col mio nipotino',
            type: 'received',
          },
          {
            text: 'Aaah bravo zietto',
            type: 'sent'
          },
          {
            text: 'Ormai non ho più speranza',
            type: 'received',
          },
        ]
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
