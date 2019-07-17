<template>
    <v-container>
      <v-dialog
         v-model="dialog"
         max-width="600"
         >
         <v-card>
             <v-card-title class="headline" >{{editedItem.title}}</v-card-title>

             <v-card-text>
                 {{editedItem.text}}
             </v-card-text>
             <v-card-text>
                 £{{editedItem.value}}
             </v-card-text>
             <v-card-actions>
             <v-btn
                 color="green darken-1"
                 text
                 @click="dialog = false"
             >
                 Close
             </v-btn>

             <v-spacer></v-spacer>

             <v-btn
                 color="green darken-1"
                 text
                 @click="addToCart(editedItem)"
             >
                 Add to cart
             </v-btn>
             </v-card-actions>
         </v-card>
         </v-dialog>
        <v-layout row wrap>
          <v-flex v-for="i in row1" :key="`3${i}`" xs4  >
              <div style="cursor: pointer" >
              <v-hover>
              <v-card dark color="transparent"
              slot-scope="{ hover }"
              :elevation="hover ? 12 : 2">
               <v-img :src="i.img"  @click="openItem(i)" :contain="true"  width="300px" height="300px" >
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
          tab: null,
          dialog: false,
          editedIndex: -1,
          editedItem: {
          title:'',
          text:'',
          value:''
        },
        row1:[
            {title:"A02 Crawler Crane", img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg' , flex: 3},
            {title:"A09a+A09b Forward Tipping Dumper(tracked)", img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg' , flex: 3},
            {title:"A17c Telescopic Handler", img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg' , flex: 3},
            {title:"A20a/b/c Hoist", img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg' , flex: 3},
            {title:"A31 Ride on Roller", img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg' , flex: 3},
            {title:"A32 Soil-Landfill Compactor", img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg' , flex: 3},
            {title:"A36 Lorry Loader", img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg' , flex: 3},
            {title:"A45 Piling Rig Below 15 Tonnes -A47 Piling Rig Bored Below 15 Tonnes - A48 Piling Rig Bored Above 15 Tonnes", img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg' , flex: 3},
            {title:"A56 Dump Truck: Articulated Chassis(Endorsements A and B)", img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg' , flex: 3},
            {title:"A57a/b/c/d – Dump Truck Rigid Chassis", img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg' , flex: 3},
            {title:"A58 - A59 360 Excavator (Below 10 tonnes)/(Above 10 tonnes)", img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg' , flex: 3},
            {title:"A73 Vehicle Banksman", img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg' , flex: 3},

         ]
        }
    },
    methods:{
      openItem (item) {
        this.editedIndex = this.row1.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
    }
}
</script>

<style>

</style>
