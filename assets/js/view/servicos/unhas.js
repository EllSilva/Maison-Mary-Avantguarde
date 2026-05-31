import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return {
        
            mostrarModal: false,
          pdfUrl: './assets/img/servicos/listagem-artigos.pdf',
                     categoriaAtiva: 'salao', 
                diferenciais: [
                    {
                        titulo: "Biossegurança e Esterilização",
                        descricao: "Priorizamos a sua saúde e segurança com instrumentos totalmente esterilizados em autoclave e materiais descartáveis, garantindo um atendimento seguro e confiável."
                    },
                    {
                        titulo: "Alongamentos e Fortalecimento de Unhas",
                        descricao: "Realizamos aplicações em Gel, Fibra de Vidro e Acrigel, proporcionando unhas resistentes, naturais e elegantes, com excelente durabilidade e acabamento sofisticado"
                    },
                    {
                        titulo: "Esmaltação Premium & Gel",
                        descricao: "Utilizamos produtos de elevada qualidade para oferecer brilho intenso, cores vibrantes e longa duração, mantendo suas unhas bonitas e impecáveis por muito mais tempo."
                    },
                    {
                        titulo: "Spa das Mãos e Pés",
                        descricao: "Experimente momentos de relaxamento com tratamentos hidratantes, esfoliação revitalizante e massagens que promovem conforto, suavidade e bem-estar."
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
                        nome: "Manicure & Extensões de Luxo",
                        tags: ["Gel Moldado", "Blindagem Diamante", "Nail Art Exclusiva","Fibra de Vidro","Acrigel Premium"],
                        descricao: " Da manicure especializada com acabamento impecável às extensões de última geração, oferecemos técnicas modernas que garantem elegância, resistência e aparência natural. Personalizamos cada detalhe para valorizar o formato das suas mãos, criando unhas sofisticadas nos estilos Almond, Stiletto, Quadrada, Bailarina e Oval.  ",
                        imagem: "./assets/img/servicos/unhas5.jpeg"
                    },

        
                    {
                        nome: "Pedicure & Cuidados Premium para Unhas",
                        tags: ["Pedicure em Gel", "Pedicure Spa", "Pedicure Luxury", "Nail Care Pedicure", "Pedicure Express"],
                        descricao: "Oferecemos um serviço completo de pedicure focado na saúde, beleza e valorização das unhas dos pés. Desde a limpeza e modelagem perfeita até à esmaltação premium, cada detalhe é executado com técnicas profissionais para garantir um acabamento elegante e duradouro.",
                        imagem: "./assets/img/servicos/unhas9.jpg"
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
