// 1. creare un array di contatti da stampare in pagina

var boolzapp = new Vue (
    {
        el: "#container",
        data: {
            contacts: [
                {
                    name: "Michele",
                    avatar: "img/avatar_1.jpg",
                    visible: "true",
                    message: [
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
                            date: "10/01/2020 16:15:22",
                            text: "Tutto fatto!",
                            status: "received"
                        }
                    ],

                    name: "Fabio",
                    avatar: "img/avatar_2.jpg",
                    visible: "true",
                    message: [
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
                            date: "10/01/2020 16:15:22",
                            text: "Tutto fatto!",
                            status: "received"
                        }
                    ],

                    name: "Samuele",
                    avatar: "img/avatar_3.jpg",
                    visible: "true",
                    message: [
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
                            date: "10/01/2020 16:15:22",
                            text: "Tutto fatto!",
                            status: "received"
                        }
                    ],

                    name: "Mario",
                    avatar: "img/avatar_4.jpg",
                    visible: "true",
                    message: [
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
                            date: "10/01/2020 16:15:22",
                            text: "Tutto fatto!",
                            status: "received"
                        }
                    ],
                }
            ]
        }
            
    }
);