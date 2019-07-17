<template>
  <v-container>
    <v-layout row wrap>
      <v-carousel
    cycle
    height="450"
    hide-delimiter-background
    
  >
        <v-carousel-item
          >
            <v-sheet
              :color="colors[0]"
              height="100%"
            >
              <v-layout
                align-center
                class="pb-4"
              >
                
                    <v-img width="200" :contain="true" :src="require('@/assets/A1.jpg')"></v-img>
                
                
              </v-layout>
            </v-sheet>
          </v-carousel-item>
    <v-carousel-item
        >
          <v-sheet
            :color="colors[0]"
            height="100%"
          >
            <v-layout
              align-center
              fill-height
              justify-center
            >
              
                  <v-img width="500" :src="require('@/assets/redtobluenvq.jpg')"></v-img>
              
              
            </v-layout>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item
        >
          <v-sheet
            :color="colors[0]"
            height="100%"
          >
            <v-layout
              align-center
              fill-height
              justify-center
            >
              
                  <v-img width="500" :src="require('@/assets/carousel2.jpg')"></v-img>
              
              
            </v-layout>
          </v-sheet>
        </v-carousel-item>
  </v-carousel>

    </v-layout>
    <v-layout row class="pt-5 ">
      <v-flex xs1>
         <!--  <v-img  width="200" height="300" :src="require('@/assets/race.png')"></v-img> -->
      </v-flex>
      <v-flex xs11>
           <h2 class="newPink--text">WHO WE ARE</h2>
           <h4 class="texts--text">The Ansell Rose Partnership is exactly that, a partnership. We work as a team with our Candidates, Assessors and Back Office to ensure high quality training at a fair price, with excellent service, across all levels.  We work in affiliation with training providers across the country to find you the course that you are looking for in Health and Safety, Plant and Lifting Operations, providing you with the best training at a fair price.</h4>
           <br>
           <h2 class="newPink--text">HOW WE CAN HELP</h2>
           <h4 class="texts--text">The Ansell Rose Angels are here to help with any questions you have relating to your NVQ or to any other construction queries, training or card related, leaving you to concentrate on your job in hand. Call us on 07940 102525, if we are busy helping other customers, leave a message and we will be happy to call back.</h4>
      </v-flex>
      
        
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data () {
      return {
        colors: [
          'black',
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4'
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth'
        ]
      }
    }
  }
</script>

<style>

</style>
