<template>
  <pangloss :textoTutorial="array"></pangloss>
</template>

<script>
import pangloss from './PanGloss.vue';

  export default {
    name: 'HelloWorld',
    components:{
        pangloss
    },
    data: () => ({
      array: ['hola']
    }),
  }
</script>
