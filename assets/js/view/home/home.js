import get_template from "../../components/get_template.js";

export default {
    data: function () {
        return {
              nome: '',
    email: '',
    telefone: '',
    servico: '',
    dataConsulta: '',
    horaConsulta: '',
    mensagem: '',
    servicos: [
        'Massagem Relaxante',
        'Massagem Terapêutica',
        'Limpeza de Pele',
        'Tratamento Facial',
        'Manicure',
        'Pedicure',
        'Cabeleireiro',
        'Maquilhagem',
        'Design de Sobrancelhas',
        'SPA Completo'
    ],
    
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
                    image: "./assets/img/testimonial-1.jpg",
                    name: "Ana Silva",
                },
                {
                    text: "Serviço de unhas excelente! Muito capricho e atenção aos detalhes. Recomendo bastante.",
                    image: "./assets/img/testimonial-2.jpg",
                    name: "Maria João",
                },
                {
                    text: "Fiz massagem relaxante e saí totalmente renovada. Experiência incrível!",
                    image: "./assets/img/testimonial-3.jpg",
                    name: "Carla Pedro",
                }, {
                    text: "Gostei muito do serviço de estética facial, minha pele ficou muito mais limpa e brilhante.",
                    image: "./assets/img/testimonial-4.jpg",
                    name: "Sónia Ramos",
                },
                {
                    text: "Atendimento rápido e muito simpático. Fiz cabelo e unhas no mesmo dia e adorei o resultado.",
                    image: "./assets/img/testimonial-5.jpg",
                    name: "Patrícia Lemos",
                },
                {
                    text: "Maquilhagem impecável para evento especial. Durou a noite toda sem falhas, Receber varios elogios",
                    image: "./assets/img/testimonial-6.jpg",
                    name: "Beatriz António",
                },
                {
                    text: "Melhor salão da zona! Sempre saio satisfeita com as tranças e o atendimento.",
                    image: "./assets/img/testimonial-7.jpg",
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

        enviarWhatsApp() {

            const numero = '244973087336'; // Seu número
 
            const texto =
                `*📅 NOVO AGENDAMENTO*

👤 Nome: ${this.nome}
📧 E-mail: ${this.email}
📞 Telefone: ${this.telefone}

💆 Serviço: ${this.servico}

📅 Data: ${this.dataConsulta}
🕒 Hora: ${this.horaConsulta}`;

            const url =
                `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

            window.open(url, '_blank');
        },

               scrollTo(id) {
            const target = document.getElementById(id);
            if (!target) return;

            const start = window.scrollY;
            const end = target.offsetTop - 60;
            const distance = end - start;

            let startTime = null;

            const duration = 1200; // velocidade do scroll

            function easeInOutCubic(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            }

            function animation(currentTime) {
                if (!startTime) startTime = currentTime;

                const timeElapsed = currentTime - startTime;
                const run = easeInOutCubic(timeElapsed, start, distance, duration);

                window.scrollTo(0, run);

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }

            requestAnimationFrame(animation);
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
