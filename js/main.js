
const myApp = new Vue({
  el: "#root",
  data: {
    utentePrincipale: {
      utente: 'img/avatar_io.jpg',
      nome: 'Martina'
    },
    contatti,
    activeContact: null,
    filteredContacts: [],
    input: {
      text: '',
      type: 'sent',
      orario: date,
    },
    search: '',
    isActive : false,
    emoji,
    // isListActive : false,
  },
  beforeCreate(){
  },
  created(){
    this.activeContact = this.contatti[0];
  },
  mounted(){
  },
  methods:{
    activateContact: function(contatto){
      this.activeContact = contatto;
    },
    // pannello emoji
    emojiPanel: function() {
      this.isActive = !this.isActive;
    },
    //inserire emoji nell'input
    sendEmoji: function(index){
      this.input.text += this.emoji[index];
    },
    //spedire messaggio dall'input
    submit: function(index){
      if(this.input.text != ""){
        let newMessage = {...this.input}
        this.activeContact.messaggi.push(newMessage);
        this.input.text = "";
        //si scrolla al messaggio appena inviato
        setTimeout(this.scroll, 20);
        //risposta automatica
        setTimeout(this.replyMessage, 3000);
      }
      //se il pannello nell'emoticon è aperto con enter si chiude, se invece è chiuso rimane tale
      if(this.isActive === true){
        this.emojiPanel();
      }
    },
    //creazione risposte randomiche
    replyMessage: function(index){
      const randomMessages = ['Ok', 'Non ho capito', 'Spiegati', 'Come vuoi', 'Top'];
      const randomIndex = Math.floor(Math.random() * 5);
      this.activeContact.messaggi.push({
        text:randomMessages[randomIndex],
        type: 'received',
        orario: date
      })
    },
    //scroll
  scroll: function(){
    let chat = this.$el.querySelector(".messages");
    chat.scrollTop = chat.scrollHeight;
  },
},
//contatti filtrati per la search bar
computed: {
  filterContatti: function () {
    return this.contatti.filter(contatto => {
      return contatto.nome.toLowerCase().includes(this.search.toLowerCase())
    })
  }
}
})
