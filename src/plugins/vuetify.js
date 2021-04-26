import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/es5/locale/es'

// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            
              primary: '#4caf50',
              secondary: '#3f51b5',
              accent: '#009688',
              error: '#f44336',
              warning: '#ffc107',
              info: '#03a9f4',
              success: '#cddc39'
              
          },
        },
      },
      lang: {
        locales: { es },
        current: 'es',
      },
});
