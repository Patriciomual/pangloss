/* eslint-disable */
import pangloss from './components/PanGloss.vue';

// Exportación de los componentes individualmente
export { pangloss}

// Instalación de la librería como un plugin
export function install(Vue) {
  Vue.component('pangloss', pangloss)
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use({ install });
}

// Exportación de la librería como plugin
export default { install: install }

