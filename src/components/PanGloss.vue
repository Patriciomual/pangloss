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
                                <v-col v-if="elem.image !== null" class="d-none d-lg-block">
                                    <center>
                                        <img :width="elem.imageSize" :src="elem.image" alt="">
                                    </center>
                                </v-col>

                                <v-col cols="12" v-if="elem.image !== null" class="d-lg-none">
                                    <center>
                                        <img :width="elem.imageSize" :src="elem.image" alt="">
                                    </center>
                                </v-col>
                                
                                <v-col class="cinzel d-none d-lg-block" :style="{'font-size': elem.textSize }">
                                    <p  :style="{'text-align': elem.textPosition }"> 
                                        {{elem.text}}
                                    </p>
                                    <p :style="{'text-align': elem.btnPosition}">
                                        <v-btn  rounded text :style="{'color': elem.btnColor}" :href="elem.btnHref">
                                            {{elem.btnName}}
                                        </v-btn>                                   
                                    </p>
                                </v-col>

                                <v-col cols="12" class="cinzel d-lg-none" :style="{'font-size': elem.textSize }">
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
        data: Object
    },
    data () {
      return {
        e1: 1,
        finish: false,
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