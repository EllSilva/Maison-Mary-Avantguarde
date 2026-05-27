import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return {
       categoriaAtiva: 'facial', // Controla qual aba inicia aberta ('facial' ou 'corporal')
                diferenciais: [
                    {
                        titulo: "Feito para a sua pele",
                        descricao: "Profissionais especialistas personalizam cada sessão facial ou corporal de acordo com suas necessidades únicas."
                    },
                    {
                        titulo: "Calma de dentro para fora",
                        descricao: "Relaxe a sua mente enquanto cuidamos da estética do seu corpo. Sinta-se renovada por inteiro."
                    },
                    {
                        titulo: "Uma rotina fácil de manter",
                        descricao: "Resultados duradouros com agendamentos flexíveis que se encaixam perfeitamente na sua rotina real."
                    }
                ],
                // Dados das soluções especializadas que alternam dinamicamente
                solucoes: {
                    facial: {
                        titulo: "Tratamentos Faciais",
                        tags: ["Limpeza Profunda", "Rejuvenescimento", "Peeling Químico"],
                        descricao: "Focados na saúde do rosto, nossos procedimentos faciais combatem marcas de expressão, acne e manchas, devolvendo a luminosidade natural e promovendo uma textura suave e uniforme desde a primeira visita.",
                        imagem: "./assets/img/servicos/estetica2.jpeg"
                    },
                    corporal: {
                        titulo: "Tratamentos Corporais",
                        tags: ["Modelagem Corporal", "Redução de Medidas", "Drenagem Terapêutica"],
                        descricao: "Desenvolvido para combater a retenção de líquidos, gordura localizada e flacidez. Nossos protocolos corporais utilizam técnicas avançadas de massagem e tecnologias firmadoras para desenhar silhuetas e promover leveza imediata.",
                        imagem: "./assets/img/servicos/estetica3.jpg"
                    }
                },
                tratamentos: [
                    {
                        nome: "Limpeza de Pele Clássica",
                        tags: ["Renovação celular", "Glow", "Hidratação"],
                        descricao: "Nosso tratamento assinatura em 5 etapas limpa profundamente, esfolia gentilmente e reabastece a hidratação essencial — devolvendo o brilho natural e deixando a pele macia, equilibrada e radiante.",
                        imagem: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800"
                    },
                    {
                        nome: "Protocolo Hidratação Choque",
                        tags: ["Firmeza", "Hidratação", "Para o dia a dia"],
                        descricao: "Recupere a umidade e revigore o tônus a cada sessão. Essa experiência de toque terapêutico deixa a pele visivelmente viçosa, macia e rejuvenescida, combatendo o ressecamento.",
                        imagem: "./assets/img/servicos/estetica8.jpeg"
                    }
                ]
    };
  },

    computed: {
                // Propriedade computada que monitora qual categoria está ativa e retorna o conteúdo correto
                conteudoCategoria() {
                    return this.solucoes[this.categoriaAtiva];
                }
            },

 
  template: await get_template("./assets/js/view/servicos/estetica"),
};
