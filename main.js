//data di accesso
const dateOptions = {'weekday': 'long', 'month': 'short', 'day': '2-digit'};
const timeOptions = {'hour': '2-digit', 'minute': '2-digit'};
var date =  new Date().toLocaleString('it-IT', dateOptions) + " alle ore " + new Date().toLocaleTimeString('it-IT', timeOptions );

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
        ultimoAccesso: date,
        messaggi:[
          {
            text: 'Ciao, come stai?',
            type: 'received',
            orario: date,
          },
          {
            text:'Tutto bene, tu?',
            type: 'sent',
            orario: date,
          },
          {
            text: 'Non mi posso lamentare. Ci sei stasera?',
            type: 'received',
            orario: date,
          },
          {
            text: 'Non penso, sono al compleanno di una collega!',
            type: 'sent',
            orario: date,
          }
        ]
      },

      {
        nome: 'Fabio',
        avatar: 'img/avatar_2.jpg',
        ultimoAccesso: date,
        messaggi:[
          {
            text: 'Hai visto Flaffy?',
            type: 'received',
            orario: date,
          },
          {
            text:'No, perchè?',
            type: 'sent',
            orario: date,
          },
          {
            text: 'Non lo troviamo',
            type: 'received',
            orario: date,
          },
          {
            text: 'Magari è nascosto da qualche parte',
            type: 'sent',
            orario: date,
          },
          {
            text: 'Speriamo',
            type: 'received',
            orario: date,
          },
        ]
      },
      {
        nome: 'Fabrizio',
        avatar: 'img/avatar_3.jpg',
        ultimoAccesso: date,
        messaggi:[
          {
            text: 'Come sta andando al lavoro?',
            type: 'received',
            orario: date,
          },
          {
            text:'Disastro',
            type: 'sent',
            orario: date,
          },
          {
            text: 'Come mai?',
            type: 'received',
            orario: date,
          },
          {
            text: 'Capi pazzi, per fortuna i colleghi sono sani di mente',
            type: 'sent',
            orario: date,
          },
          {
            text: 'Vi fate compagnia almeno',
            type: 'received',
            orario: date,
          },
        ]
      },
      {
        nome: 'Alessandra',
        avatar: 'img/avatar_6.jpg',
        ultimoAccesso: date,
        messaggi:[
          {
            text: 'Passato il test!',
            type: 'received',
            orario: date,
          },
          {
            text:'Grande!',
            type: 'sent',
            orario: date,
          },
          {
            text: "Ho fatto un po' di confusione nella parte centrale ma ce l'ho fatta ugualmente",
            type: 'received',
            orario: date,
          },
          {
            text: 'Hai studiato tanto, te lo sei meritato',
            type: 'sent',
            orario: date,
          },
          {
            text: 'Yeees',
            type: 'received',
            orario: date,
          },
        ]
      },
      {
        nome: 'Enrico',
        avatar: 'img/avatar_7.jpg',
        ultimoAccesso: date,
        messaggi:[
          {
            text: 'Ci vediamo domani mattina allora',
            type: 'received',
            orario: date,
          },
          {
            text:'Confermo, viene anche Simona',
            type: 'sent',
            orario: date,
          },
          {
            text: 'Perfetto',
            type: 'received',
            orario: date,
          },
        ]
      },
      {
        nome: 'Giacomo',
        avatar: 'img/avatar_8.jpg',
        ultimoAccesso: date,
        messaggi:[
          {
            text:'Sei stato da Marco ieri?',
            type: 'sent',
            orario: date,
          },
          {
            text: 'No, ero col mio nipotino',
            type: 'received',
            orario: date,
          },
          {
            text: 'Aaah bravo zietto',
            type: 'sent',
            orario: date,
          },
          {
            text: 'Ormai non ho più speranza',
            type: 'received',
            orario: date,
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
