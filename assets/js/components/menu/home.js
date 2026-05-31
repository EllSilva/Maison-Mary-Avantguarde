import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return { 
       currentRoute: window.location.hash.replace('#', '')
     
    };
  },

  methods: {
    
  },

  

     mounted() {
    window.addEventListener('hashchange', () => {
      this.currentRoute = window.location.hash.replace('#', '');
    });   
  },

  template: await get_template("./assets/js/components/menu/home"),
};
