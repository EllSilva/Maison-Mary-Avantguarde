import get_template from '../../components/get_template.js'

export default {
  data: function () {
    return {
      menuItems: [
        'Todas',
        'Salão de Beleza',
        'SPA',
        'Serviços Especial'
      ],
      activeIndex: 0
    }
  },
       methods: {
        setActive(index) {
          this.activeIndex = index;
        }
      },
  async mounted() {


    AOS.init({
      duration: 1000,
    });
  },

  template: await get_template('./assets/js/view/galeria/home')
}