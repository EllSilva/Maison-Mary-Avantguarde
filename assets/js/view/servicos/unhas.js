import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return {
          pdfUrl: './assets/img/servicos/listagem-artigos.pdf',
                     categoriaAtiva: 'salao', 
                diferenciais: [
                    {
                        titulo: "Atendimento Especializado Unissex",
                        descricao: "Duas atmosferas completas no mesmo espaço: a delicadeza e as técnicas avançadas do salão de alta costura ao lado do ambiente focado na velha escola de barbeiros."
                    },
                    {
                        titulo: "Produtos de Padrão Internacional",
                        descricao: "Utilizamos pomadas importadas, óleos vegetais de alta performance e as marcas de coloração e tratamento mais consagradas do mercado mundial."
                    },
                    {
                        titulo: "Conforto e Concorrência Zero",
                        descricao: "Bebidas exclusivas, espaço de convivência aconchegante e um agendamento inteligente para você nunca precisar esperar."
                    }
                ],
                solucoes: {
                    salao: {
                        titulo: "Salão de Alta Performance",
                        tags: ["Corte Visagista", "Penteados","Coloração e Tonalização", "Mechas & Balayage","Alisamento","Escova e Modelagem", "Reconstrução da Fibra Capila","Nutrição Capilar", "Terapia Capilar"],
                        descricao: "Transformações cromáticas, mechas sutis e os cortes que estão moldando as passarelas urbanas. Nossos especialistas mapeiam sua simetria facial para alinhar cortes e cores que valorizam a sua essência natural.",
                        imagem: "./assets/img/servicos/cabelo5.jpeg"
                    },
                    barbearia: {
                        titulo: "Barbearia de Elite",
                        tags: ["Corte e Modelagem", "Definição de Barba","Corte Razor Fade", "Barba com Toalha Quente", "Pigmentação"],
                        descricao: "Especialistas em cortes masculinos modernos e definição de barba, oferecemos acabamentos precisos, degradês impecáveis e contornos personalizados. Cada serviço é pensado para destacar o seu estilo e garantir uma aparência sofisticada e confiante.",
                        imagem: "./assets/img/servicos/cabelo6.jpeg"
                    }
                },
                tratamentos: [
                    {
                        nome: "Tratamento da Barba & Cabelo",
                        tags: ["Saúde Capilar Masculina", "Hidratação Capilar", "Fortalecimento dos Fios","Tratamento da Barba"],
                        descricao: "Um cuidado profissional pensado para manter a imagem masculina sempre impecável, saudável e bem definida. Este tratamento combina técnicas de higiene, hidratação e precisão para realçar o estilo natural da barba e do cabelo.",
                        imagem: "./assets/img/servicos/cabelo9.jpg"
                    },

        
                    {
                        nome: "Tratamento Capilar & Glow",
                        tags: ["Hidratação profunda", "Nutrição dos fios", "Reconstrução da fibra capilar", "Loiro Confraria", "Morena Iluminada", "Loiro Confraria", "Plex Protector"],
                        descricao: "Técnica exclusiva de clareamento pontual desenhada para criar pontos de luz naturais ao redor do rosto. Acompanha nosso protetor de ligações químicas para blindar os fios contra o ressecamento.",
                        imagem: "./assets/img/servicos/cabelo8.jpeg"
                    }
                ],
                
    };
  },

    computed: {
                 conteudoCategoria() {
                    return this.solucoes[this.categoriaAtiva];
                }
            },

 
  template: await get_template("./assets/js/view/servicos/unhas"),
};
