// 1. creare un array di contatti da stampare in pagina
// 2. visualizzare tutti i messaggi relativi al contatto 
// 2.1 facendo click sui contatti si appaiono le conversazioni relative al contatto
// 3. digitando un testo nell'input e premendo il tasto enter il testo viene stampato in pagina
// 3.2 ad ogni inserimento di testo ci sarà una risposta "ok" 1 secondo dopo

var boolzapp = new Vue (
    {
        el: "#container",
        data: {
            activeContact: 0,
            newMessage: [
                {
                    date: "10/01/2020 15:30:55",
                    text: "",
                    status: "sent"
                }
            ],
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
                            text: "Hai portato a spasso il cane?",
                            status: "sent"
                        },

                        {
                            date: "10/01/2020 15:50:00",
                            text: "Ricordati di dargli da mangiare",
                            status: "sent"
                        },

                        {
                            date: "10/01/2020 16:15:30",
                            text: "Mi piacerebbe ma devo andare",
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
                            text: "Hai portato a spasso il cane?",
                            status: "sent"
                        },

                        {
                            date: "10/01/2020 15:50:00",
                            text: "Ricordati di dargli da mangiare",
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
                            text: "Hai portato a spasso il cane?",
                            status: "sent"
                        },

                        {
                            date: "10/01/2020 15:50:00",
                            text: "Ricordati di dargli da mangiare",
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
                this.activeContact= index;
            },
            addMessage() {
                if (this.newMessage !== '') {
                    this.messages.push(this.newMessage);
                    this.newMessage = "";
                }
            },
        }
            
    }
);