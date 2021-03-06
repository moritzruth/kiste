import { getFullTheme } from "kiste/js/theming";
import RippleDirective from "vue-ripple-directive";

const Kiste = {
  install(Vue, options = {}) {
    Vue.directive("ripple", RippleDirective);

    Vue.prototype.$kiste = new Vue({
      data: {
        theme: options.theme || {},
        navigationItems: options.navigationItems || [],
        footerItems: options.footerItems || [],
        navigationBar: null
      },
      computed: {
        fullTheme() {
          return getFullTheme(this.theme)
        }
      },
      methods: {
        resetTheme() {
          this.theme = options.theme;
        }
      }
    });
  }
};

export default Kiste;
