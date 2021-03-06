// 1. creare un array di contatti da stampare in pagina
// 2. visualizzare tutti i messaggi relativi al contatto 
// 2.1 facendo click sui contatti si appaiono le conversazioni relative al contatto
// 3. digitando un testo nell'input e premendo il tasto enter il testo viene stampato in pagina
// 3.2 ad ogni inserimento di testo ci sarà una risposta "ok" 1 secondo dopo
// 4. far funzionare l'input di ricerca in modo da filtrare i contatti
// 5. crea un menù a tendina sulle chat, con la possibilità di eliminare il messaggio

var boolzapp = new Vue (
    {
        el: "#container",
        data: {
            activeContact: 0,
            newMessage: {
                date: "15/11/2020 alle 15:30",
                text: "",
                status: "sent"
            },
            newAnswer: {
                date: "15/11/2020 alle 15:30",
                text: "ok",
                status: "received"
            },
            researchContact: "",
            contacts: [
                {
                    name: "Michele",
                    avatar: "img/avatar_1.jpg",
                    visible: "false",
                    messages: [
                        {
                            date: "15/11/2020 alle 15:30",
                            text: "Hai portato a spasso il cane?",
                            status: "sent"
                        },

                        {
                            date: "15/11/2020 alle 15:50",
                            text: "Ricordati di dargli da mangiare",
                            status: "sent"
                        },

                        {
                            date: "15/11/2020 alle 16:37",
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
                            date: "15/11/2020 alle 15:30",
                            text: "Ciao come stai?",
                            status: "sent"
                        },

                        {
                            date: "15/11/2020 alle 15:50",
                            text: "Bene grazie! stasera ci vediamo?",
                            status: "received"
                        },

                        {
                            date: "15/11/2020 alle 17:15",
                            text: "Mi piacerebbe ma devo studiare!",
                            status: "sent"
                        }
                    ],
                },

                {
                    name: "Samuele",
                    avatar: "img/avatar_3.jpg",
                    visible: "false",
                    messages: [
                        {
                            date: "15/11/2020 alle 15:30",
                            text: "La Marianna va in campagna",
                            status: "sent"
                        },

                        {
                            date: "15/11/2020 alle 15:50",
                            text: "Sicuro di non aver sbagliato chat?",
                            status: "received"
                        },

                        {
                            date: "15/11/2020 alle 16:15",
                            text: "Ah scusa!",
                            status: "sent"
                        }
                    ],
                },

                {
                    name: "Mario",
                    avatar: "img/avatar_4.jpg",
                    visible: "false",
                    messages: [
                        {
                            date: "15/11/2020 alle 15:30",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent"
                        },

                        {
                            date: "15/11/2020 alle 18:15",
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
            },
            removeMessage(index) {
                const element = this.contacts[this.activeContact];
                element.messages.splice(index, 1);
                console.log(i);
            }
        },         
    }
);