import get_template from "../../components/get_template.js";

export default {
    data: function () {
        return {
            subtitle: 'Maison Mary Avantguarde',
            title: 'Beleza. Confiança. Elegância.',
            description: 'Realce a sua beleza, renove a sua confiança e desfrute de momentos únicos de bem-estar. Aproveite as nossas ofertas especiais e permita-se viver uma experiência de cuidado, sofisticação e elegância. 💖✨',
 

            slides: [
                {
                    title: 'Modern Haircut',
                    subtitle: 'Experience Luxury',
                    img: './assets/img/salao.jpeg'
                },
                {
                    title: 'Skin Care',
                    subtitle: 'Pure Relaxation',
                    img: './assets/img/manicure.jpeg'
                },
                {
                    title: 'Skin Care',
                    subtitle: 'Pure Relaxation',
                    img: './assets/img/salao1.jpeg'
                },
                {
                    title: 'Skin Care',
                    subtitle: 'Pure Relaxation',
                    img: './assets/img/produto.jpeg'
                }
            ],

            testimonials: [
                {
                    text: "Adorei o atendimento! Fiz tranças e o resultado ficou perfeito. Muito profissionais e ambiente acolhedor.",
                    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
                    name: "Ana Silva",
                },
                {
                    text: "Serviço de unhas excelente! Muito capricho e atenção aos detalhes. Recomendo bastante.",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
                    name: "Maria João",
                },
                {
                    text: "Fiz massagem relaxante e saí totalmente renovada. Experiência incrível!",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
                    name: "Carla Pedro",
                }, {
                    text: "Gostei muito do serviço de estética facial, minha pele ficou muito mais limpa e brilhante.",
                    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
                    name: "Sónia Ramos",
                },
                {
                    text: "Atendimento rápido e muito simpático. Fiz cabelo e unhas no mesmo dia e adorei o resultado.",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
                    name: "Patrícia Lemos",
                },
                {
                    text: "Maquilhagem impecável para evento especial. Durou a noite toda sem falhas!",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
                    name: "Beatriz António",
                },
                {
                    text: "Melhor salão da zona! Sempre saio satisfeita com as tranças e o atendimento.",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
                    name: "Joana Miguel",
                }
            ]


        };
    },
    computed: {
        formattedTitle: function () {
            return this.title.split('. ').join('.<br>');
        }
    },
    methods: {
        learnMoreAction: function () {
            console.log('Botão Learn More clicado (Vue 2)');
        },
        joinTeamAction: function () {
            console.log('Botão Join Our Team clicado (Vue 2)');
        }
    },

    async mounted() {
        // Inicializa o Swiper após o Vue montar o DOM
        const swiper = new Swiper(".mySwiper", {
            loop: true,
            effect: 'fade', // Transição suave elegante
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
            },
        });


        // Inicialização do Swiper após o Vue injetar o template no DOM
        new Swiper(".mySwiper_textemunha", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,

            speed: 800, // Transição de deslize mais suave

            autoplay: {
                delay: 4000, // Tempo de espera em cada slide (4 segundos)
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });


    },
    template: await get_template("./assets/js/view/home/home"),
};
