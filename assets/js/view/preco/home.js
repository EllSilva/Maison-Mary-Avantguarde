import get_template from "../../components/get_template.js";

export default {
    data: function () {
        return {
             pdfUrl: './assets/img/servicos/listagem-artigos.pdf',
            search: '',
            selectedCategory: '',
            categories: {

                '💇‍♀️ Cabelo & Tratamentos': [

                    { ref: 1, name: 'Misse cabelo curto acima dos ombros', price: 12500 },
                    { ref: 2, name: 'Misse cabelo médio até os ombros', price: 15000 },
                    { ref: 3, name: 'Misse cabelo longo abaixo dos ombros', price: 18000 },
                    { ref: 4, name: 'Penteado simples', price: 12000 },
                    { ref: 5, name: 'Penteado elaborado', price: 18000 },
                    { ref: 6, name: 'Penteado de evento', price: 25000 }

                ],

                '💅 Manicure & Pedicure': [

                    { ref: 18, name: 'Manicure gel', price: 10000 },
                    { ref: 19, name: 'Extensão de unhas', price: 15000 },
                    { ref: 20, name: 'Pedicure simples', price: 8500 },
                    { ref: 21, name: 'Pedicure spa', price: 15000 }

                ],

                '✨ Depilação & Estética': [

                    { ref: 22, name: 'Depilação sobrancelhas com cera', price: 3500 },
                    { ref: 23, name: 'Buço', price: 3000 },
                    { ref: 24, name: 'Depilação nas axilas', price: 5000 },
                    { ref: 25, name: 'Depilação meia perna', price: 7000 }

                ],

                '🧖‍♀️ Spa & Corpo': [

                    { ref: 29, name: 'Sauna Blanket', price: 15000 },
                    { ref: 30, name: 'Cavitação', price: 18000 },
                    { ref: 31, name: 'Radiofrequência', price: 18000 },
                    { ref: 32, name: 'Velashape', price: 25000 },
                    { ref: 33, name: 'Massagem relaxante', price: 20000 }

                ],

                '💈 Barber & Masculino': [

                    { ref: 38, name: 'Corte de cabelo clássico', price: 8000 },
                    { ref: 39, name: 'Corte moderno / Fade', price: 10000 },
                    { ref: 40, name: 'Corte premium', price: 12000 },
                    { ref: 42, name: 'Barba simples', price: 6000 }

                ],

                '👑 Pacotes VIP': [

                    { ref: 74, name: 'VIP Member', price: 90000 },
                    { ref: 75, name: 'VIP Gold', price: 150000 },
                    { ref: 76, name: 'Maison Men Club', price: 60000 }

                ],

                '🧒 Kids Services': [

                    { ref: 72, name: 'Mini Spa Princess / Prince', price: 20000 },
                    { ref: 73, name: 'Dia de Festa', price: 25000 }

                ],

                '💄 Maquilhagem': [

                    { ref: 104, name: 'Make up Nude', price: 10000 },
                    { ref: 105, name: 'Make up Festas', price: 15000 },
                    { ref: 106, name: 'Make up Aniversários', price: 18000 },
                    { ref: 107, name: 'Make up Noivas', price: 30000 }

                ],

                '👁️ Cílios & Sobrancelhas': [

                    { ref: 180, name: 'Design de sobrancelhas', price: 7500 },
                    { ref: 181, name: 'Design com linha', price: 10000 },
                    { ref: 182, name: 'Design e henna', price: 15000 },
                    { ref: 183, name: 'Brow Lamination', price: 35000 },
                    { ref: 189, name: 'Mega volume', price: 25000 }

                ]

            }
        };
    },


    computed: {

        filteredServices() {

            let result = {};

            for (let category in this.categories) {

                if (
                    this.selectedCategory &&
                    category !== this.selectedCategory
                ) {
                    continue;
                }

                let filtered = this.categories[category].filter(item =>

                    item.name.toLowerCase()
                        .includes(this.search.toLowerCase())

                );

                if (filtered.length) {

                    result[category] = filtered;

                }

            }

            return result;

        },

        totalFilteredServices() {

            let total = 0;

            for (let category in this.filteredServices) {

                total += this.filteredServices[category].length;

            }

            return total;

        }

    },

    methods: {

        formatPrice(value) {

            return value.toLocaleString('pt-PT');

        }

    },


    async mounted() {
        AOS.init({
            duration: 1000,
        });


    },
    template: await get_template("./assets/js/view/preco/home"),
};
