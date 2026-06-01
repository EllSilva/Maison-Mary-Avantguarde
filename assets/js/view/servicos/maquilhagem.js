import get_template from "../../components/get_template.js";

export default {
    data: function () {
        return {
            // Estado das Abas do Bloco "Where can a Hot Stone Massage help?"
              mostrarModal: false,
            activeBenefitTab: 1,
            categoriaAtiva: 'social',
            benefitTabs: [
                { id: 1, title: 'Muscle Relaxation', text: 'O calor gerado pelas pedras quentes ajuda a relaxar os músculos tensos, permitindo que o massoterapeuta acesse tecidos mais profundos de forma indolor e eficaz.' },
                { id: 2, title: 'Stress Relief', text: 'O calor terapêutico acalma o sistema nervoso central, reduzindo significativamente os níveis de cortisol e proporcionando um alívio mental profundo contra a ansiedade do dia a dia.' },
                { id: 3, title: 'Circulation', text: 'À medida que o calor se expande pelos vasos sanguíneos, ele melhora o fluxo de circulação por todo o corpo, oxigenando melhor as células e acelerando a recuperação muscular.' }
            ],

            // Estado das Abas do Bloco "Your massage, made personal"
            activePersonalTab: 1,
            personalTabs: [
                { id: 1, title: 'Classic', text: 'Uma abordagem tradicional que equilibra o deslizamento suave das pedras com pressões pontuais em áreas de acúmulo de estresse comum, como costas e ombros.' },
                { id: 2, title: 'Deep Tissue', text: 'Focado em dores crônicas. O calor das pedras prepara a musculatura rígida para que pressões mais profundas e firmes resolvam nós de tensão persistentes.' },
                { id: 3, title: 'Relief', text: 'Ideal para quem busca reenergização completa. Foco total em reestabelecer o bem-estar físico e mental de forma leve e totalmente revigorante.' }
            ],

             solucoes: {
                    social: {
                        titulo: "Maquilhagem Social & Gala",
                        tags: ["Eventos Noturnos", "Contorno Glow", "Olhos Esfumados"],
                        descricao: "Perfeita para convidadas de casamentos, festas de gala ou jantares importantes. Uma maquilhagem marcante na medida certa, combinando sofisticação com texturas acetinadas e um olhar expressivo.",
                        imagem: "./assets/img/servicos/maquilhagem8.jpg"
                    },
                    noivas: {
                        titulo: "Noivas & Alta Definição",
                        tags: ["Fotografia 4K", "Beleza Atemporal", "Efeito Airbrush"],
                        descricao: "Desenvolvida especialmente para resistir a lágrimas, abraços e luzes de flash. Uma maquilhagem de alta definição fotográfica que equilibra a beleza clássica da noiva com a durabilidade extrema sob as câmaras.",
                        imagem: "./assets/img/servicos/maquilhagem9.jpg"
                    }
                },

            // Estado do Accordion (Seção Final)
            accordionOpen: 1
        };
    },

    computed: {
        currentBenefitText() {
            const tab = this.benefitTabs.find(t => t.id === this.activeBenefitTab);
            return tab ? tab.text : '';
        },
        currentPersonalText() {
            const tab = this.personalTabs.find(t => t.id === this.activePersonalTab);
            return tab ? tab.text : '';
        },
            conteudoCategoria() {
                    return this.solucoes[this.categoriaAtiva];
                }
    },
    methods: {
        toggleAccordion(id) {
            // Se clicar no que já está aberto, fecha. Se não, abre o selecionado.
            this.accordionOpen = this.accordionOpen === id ? null : id;
        }
    },


    template: await get_template("./assets/js/view/servicos/maquilhagem"),
};
