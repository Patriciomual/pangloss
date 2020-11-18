<template>
    <div>
        <v-card id="grad" elevation="20" style="border-radius:20px"  width="60%" > <!--Tarjeta pangloss-->
            <v-card-actions>
                <v-btn fab text x-small elevation="0" >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-actions>
            <v-card-text >
                <v-row>
                    <v-col>
                        <img width="70%" src="https://firebasestorage.googleapis.com/v0/b/trafla-24d65.appspot.com/o/trafla%2FNew%20Piskel%20(2).gif?alt=media&token=59884834-5748-4d2b-a3b5-040aee3ff30d" alt="">
                    </v-col>
                    <v-col class="cinzel" style="font-size:20px;">

                        <p v-for="(item,idx) in textoTutorial" :key="idx">
                            {{item}}
                        </p>

                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>

                <v-btn small class="cinzel" text style="border-radius:30px">
                    Agregar tareas
                </v-btn>
                <v-btn small class="cinzel" text style="border-radius:30px">
                    Notas rápidas
                </v-btn>
                <v-btn small class="cinzel" text style="border-radius:30px">
                    Lógica
                </v-btn>          
                <v-btn small color="#aaaa06" class="cinzel" text style="border-radius:30px">
                    Conoce a Pangloss
                </v-btn>    
            </v-card-text>

        </v-card>
    </div>
</template>
<script >
  export default {
    name: 'PanGloss',
    
    props: {
        textoTutorial: Array
    }
  }
</script>
<style scoped>
#grad{
    background-image: linear-gradient(140deg, #aa0606, #0606aa);
}
</style>