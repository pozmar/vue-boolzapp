
const myApp = new Vue({
  el: "#root",
  data: {
    utentePrincipale: {
      utente: 'img/avatar_io.jpg',
      nome: 'Martina'
    },
    contatti,
    openContactIndex: 0,
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
  methods:{
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
        this.contatti[this.openContactIndex].messaggi.push(newMessage);
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
    //creo funzione per trovare la posizione del contatto
    changeIndexContatto: function(index){
      this.openContactIndex = index;
    },
    //creazione risposte randomiche
    replyMessage: function(index){
      const randomMessages = ['Ok', 'Non ho capito', 'Spiegati', 'Come vuoi', 'Top'];
      const randomIndex = Math.floor(Math.random() * 5);
      this.contatti[this.openContactIndex].messaggi.push({
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
  filteredContatti: function () {
    return this.contatti.filter(contatto => {
      return contatto.nome.toLowerCase().includes(this.search.toLowerCase())
    })
  }
}
})
