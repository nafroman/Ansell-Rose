<template>
    <v-container align-content-center grid-list-md>
        <v-layout row wrap justify-center="">
            
            <v-flex v-for="i in nvq6_7" :key="`3${i}`" xs4  >
                <div style="cursor: pointer" >              
                <v-hover>
                <v-card dark color="transparent" 
                slot-scope="{ hover }"
                :elevation="hover ? 12 : 2">
                 <v-img :src="i.image"  @click="openItem(i)" :contain="true"  width="300px" height="300px" >
                <v-card-text class="px-1">{{i.title}}</v-card-text>
                </v-img>
                </v-card>
                </v-hover>
                </div>
            </v-flex>
            
        </v-layout>
        <v-layout row wrap>
            
        </v-layout>
        <v-layout row wrap>
            
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data(){
      return{
        bookings:[
        ],
        tab: null,
        items: [
          'Appetizers', 'Entrees', 'Deserts', 'Cocktails'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        links: [
               {icon: 'home', text: 'NVQ Level 2-3'},
               {icon: 'folder', text: 'NVQ Level 4-5'},
               {icon: 'person', text: 'NVQ Level 5-6'},
            ],
    
        nvq6_7:[
            {title:"Level 6 NVQ Diploma in Construction Site Management", flex: 3, img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
            {title:"Level 7 NVQ Diploma in Senior Site Management", flex: 3, img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
        ],
        maxBookings: '30',
        totalBookings: 0,
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    methods:{
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      }
    },
}
</script>

<style>
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
