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
            text:'Benissimo, ambiente fantastico',
            type: 'sent',
            orario: date,
          },
          {
            text: 'Dai, che bello!',
            type: 'received',
            orario: date,
          },
          {
            text: 'Sì, mi trovo benissimo con tutti. Caffè a gratis',
            type: 'sent',
            orario: date,
          },
          {
            text: 'Si vola',
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

    input: {
      text: '',
      type: 'sent',
      orario: date,
    },
  },
  methods:{
    submit: function(index){
      let newMessage = {...this.input}
      this.contatti[this.openContactIndex].messaggi.push(newMessage);
      this.input.text = "";
      setTimeout(this.replyMessage, 3000);
    },
    changeIndexContatto: function(index){
      this.openContactIndex = index;
    },
    replyMessage: function(index){
      const randomMessages = ['Ok', 'Non ho capito', 'Spiegati', 'Come vuoi', 'Top'];
      const randomIndex = Math.floor(Math.random() * 5);
      this.contatti[this.openContactIndex].messaggi.push({
        text:randomMessages[randomIndex],
        type: 'received',
        orario: date
      })
    }
  }
})
