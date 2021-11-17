// 1. creare un array di contatti da stampare in pagina
// 2. visualizzare tutti i messaggi relativi al contatto 
// 2.1 facendo click sui contatti si appaiono le conversazioni relative al contatto
// 3. digitando un testo nell'input e premendo il tasto enter il testo viene stampato in pagina
// 3.2 ad ogni inserimento di testo ci sarà una risposta "ok" 1 secondo dopo
// 4. far funzionare l'input di ricerca in modo da filtrare i contatti

var boolzapp = new Vue (
    {
        el: "#container",
        data: {
            activeContact: 0,
            newMessage: {
                date: "10/01/2020 15:30:55",
                text: "",
                status: "sent"
            },
            newAnswer: {
                date: "10/01/2020 15:30:55",
                text: "ok",
                status: "received"
            },
            contacts: [
                {
                    name: "Michele",
                    avatar: "img/avatar_1.jpg",
                    visible: "false",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Hai portato a spasso il cane?",
                            status: "sent"
                        },

                        {
                            date: "10/01/2020 15:50:00",
                            text: "Ricordati di dargli da mangiare",
                            status: "sent"
                        },

                        {
                            date: "28/03/2020 16:15:22",
                            text: "Tutto fatto!",
                            status: "received"
                        }
                    ],
                },

                {
                    name: "Fabio",
                    avatar: "img/avatar_2.jpg",
                    visible: "false",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Ciao come stai?",
                            status: "sent"
                        },

                        {
                            date: "10/01/2020 15:50:00",
                            text: "Bene grazie! stasera ci vediamo?",
                            status: "sent"
                        },

                        {
                            date: "10/01/2020 16:15:30",
                            text: "Mi piacerebbe ma devo lavorare!",
                            status: "received"
                        }
                    ],
                },

                {
                    name: "Samuele",
                    avatar: "img/avatar_3.jpg",
                    visible: "false",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "La Marianna va in campagna",
                            status: "sent"
                        },

                        {
                            date: "10/01/2020 15:50:00",
                            text: "Sicuro di non aver sbagliato chat?",
                            status: "sent"
                        },

                        {
                            date: "10/01/2020 16:15:15",
                            text: "Ah scusa!",
                            status: "received"
                        }
                    ],
                },

                {
                    name: "Mario",
                    avatar: "img/avatar_4.jpg",
                    visible: "false",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent"
                        },

                        {
                            date: "10/01/2020 16:15:11",
                            text: "Si, ma preferirei andare al cinema",
                            status: "received"
                        }
                    ],
                },
            ],
        },
        methods: {
            selectContact: function(index) {
                this.activeContact = index;
            },
            addMessage() {
                const element = this.contacts[this.activeContact];
                element.messages.push(this.newMessage);
                setTimeout(() => element.messages.push(this.newAnswer), 1000);

                this.newMessage = {
                    date: "10/01/2020 15:30:55",
                    text: "",
                    status: "sent"
                };
            }
        },         
    }
);
function research() {
var input; 
var filter;
var list;
var voices;
var x;
var i;
var text;
    input = document.getElementById("bar-research");
    filter = input.value.toUpperCase();
    list = document.getElementById("list");
    voices = list.getElementsByTagName("li");
    for (i = 0; i < voices.length; i++) {
        x = list.getElementsByTagName("h3")[i];
        text = x.textContent || x.innerText;
    if (text.toUpperCase().indexOf(filter) > -1) {
        voices[i].style.display = "";
    } else {
        voices[i].style.display = "none";
    }
    }
}