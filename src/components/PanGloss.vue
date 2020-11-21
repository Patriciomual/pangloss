<template>
    <div>
        <v-card  elevation="20"   :width="data.width" flat>
            <v-stepper v-model="e1" :style="{'background-image': data.color }">
                <v-stepper-header>
                    <v-stepper-step
                        v-for="(step,id) in data.steps" :key="id"
                        :complete="e1 > id+1"
                        :step="id+1"
                    >
                        {{step}}
                    </v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                    <v-stepper-content v-for="(elem,idx) in data.content" :key="idx" :step="idx+1">
                        <div :style="{'height': data.height }">
                            <v-row>
                                <v-col v-if="elem.image !== null">
                                    <img :width="elem.imageSize" :src="elem.image" alt="">
                                </v-col>
                                <v-col class="cinzel" :style="{'font-size': elem.textSize }">
                                    <p  :style="{'text-align': elem.textPosition }"> 
                                        {{elem.text}}
                                    </p>
                                    <p :style="{'text-align': elem.btnPosition}">
                                        <v-btn  rounded text :style="{'color': elem.btnColor}" :href="elem.btnHref">
                                            {{elem.btnName}}
                                        </v-btn>                                   
                                    </p>
                                </v-col>
                            </v-row>
                        </div>
                        <span v-if="!finish">
                            <v-btn text
                            @click="e1 = next(idx)">
                                Continue
                            </v-btn>

                            <v-btn text>
                            Cancel
                            </v-btn>
                        </span>
                        <span v-else>
                            <v-btn text @click="$emit('finish',false)">
                                Listo
                            </v-btn>
                        </span>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-card>
    </div>
</template>
<script >
  export default {
    name: 'PanGloss',
    props: {
        textoTutorial: Array,
    },
    data () {
      return {
        e1: 1,
        finish: false,
        data: {
            width:'90%',
            height: '400px',
            color: 'linear-gradient(140deg, #aa0606, #0606aa)',
            steps : ['uno','','tres','cuatro','cinco'],
            content: [
                {
                    text:'Se le harán varias preguntas. Cuando se le pregunte cuál es su registro npm, acepte el predeterminado. Seleccione la autenticación "basada en token". Proporcione su nombre de usuario',
                    textPosition: 'center',
                    textSize: '25px',
                    image:'https://firebasestorage.googleapis.com/v0/b/trafla-24d65.appspot.com/o/trafla%2FNew%20Piskel%20(2).gif?alt=media&token=59884834-5748-4d2b-a3b5-040aee3ff30d',
                    imageSize: '70%',
                    btnName: 'conoce a pangloss',
                    btnHref: 'http://trafla.org/',
                    btnColor: 'grey',
                    btnPosition: 'left'
                },
                {
                    text:'segundo',
                    textPosition: 'left',
                    textSize: '15px',
                    image: null,
                    imageSize: '50%'
                },
                {
                    text:'tercero',
                    textPosition: 'center',
                    textSize: '15px',
                    image:'https://firebasestorage.googleapis.com/v0/b/trafla-24d65.appspot.com/o/trafla%2FNew%20Piskel%20(2).gif?alt=media&token=59884834-5748-4d2b-a3b5-040aee3ff30d',
                    imageSize: '50%'
                },
                {
                    text:'cuardo',
                    textPosition: 'right',
                    textSize: '15px',
                    image: null,
                    imageSize: '50%'
                },
                {
                    text:'quinto',
                    textPosition: 'center',
                    textSize: '15px',
                    image: null,
                    imageSize: '50%'
                },
            ],
        }
      }
    },
    methods:{
        next(idx){
            let num = idx+2
            let pos = this.data.steps.length 
            if(num > this.data.steps.length){
                let num1 = 1
                return num1
            }else{
                if(num === pos){
                    this.finish = true
                }
                return num
            }
        }
    }    
  }
</script>
<style scoped>


</style>