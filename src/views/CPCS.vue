<template>
    <v-container>
      <v-dialog
                v-model="dialog"
                max-width="700"
                >
                <v-card>
                    <v-card-title class="headline" >{{editedItem.title}}</v-card-title>

                    <v-card-text>
                        <h1 class="newPink--text">You</h1>
                        {{editedItem.you}}
                        <h1 class="newPink--text">Gain</h1>
                        {{editedItem.gain}}
                        <h1 class="newPink--text">Work</h1>
                        <p>{{editedItem.work}}</p>
                        {{editedItem.notes}}
                    </v-card-text>
                    <v-card-text>
                        Price: £{{editedItem.price}} - VAT price £{{editedItem.vprice}} 
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

        <v-layout row wrap justify-center="">
          <v-flex v-for="i in filterList" :key="`3${i}`"   xs12 sm4 md3>
                <div style="cursor: pointer"  class="px-3 py-3">              
                <v-hover>
                <v-card dark color="transparent" 
                slot-scope="{ hover }"
                :elevation="hover ? 12 : 2">
                <v-img  class ="mx-1 " :src="i.image"   @click="openItem(i)" :contain="true"  width="250px" height="300px" >
                  <v-card-text class="px-1">{{i.title}}</v-card-text>
                </v-img>
                </v-card>
                </v-hover>
                </div>
            </v-flex>
        </v-layout>
        <v-layout row wrap justify-center="">

        </v-layout>



    </v-container>

</template>

<script>
import db from '@/fb'
export default {
    data(){
        return{
           items:[],
        tab: null,
        dialog: false,
        editedIndex: -1,
        editedItem: {
        title:'',
        text:'',
        value:''
        
      },
        
        row1:[],
            /* row1:[
            {title:"A40 Slinger/Signaller", img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg' , flex: 3},
            {title:"A60 Mobile Crane", img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg' , flex: 3},
            {title:"A61 Appointed Person(Lifting Operations)inc. CPCS Technical Tests", img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg' , flex: 3},
            {title:"A62 Crane Supervisor", img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg' , flex: 3},
            {title:"A66 Compact Crane", img:'https://cdn.vuetifyjs.com/images/cards/docks.jpg' , flex: 3},
         ],*/
       }
    },
    created () {
    
      db.collection('items').onSnapshot(res =>{
        const changes = res.docChanges();
        changes.forEach(change =>{
          if(change.type === 'added'){
            this.row1.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
    },
    computed: {
    forSale1() { return this.$store.getters.forSale1; },
    inCart() { return this.$store.getters.inCart; },
    filterList(){
      var tempArr =[]
      for(var x=0 ;x<this.row1.length; x++){
        if(this.row1[x].type == 'CPCS'){
          tempArr.push(this.row1[x])
        }
      }
      tempArr.sort(this.compare_to_sort)
      return tempArr
    }
  },
    methods:{
      compare_to_sort(x,y) 
      {
        if (x.title < y.title)
          return -1;
        if (x.title > y.title)
          return 1;
        return 0;
      },
      openItem (item) {
        this.editedIndex = this.row1.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      addToCart (item) {
        this.items.push(item.id)
        this.$store.dispatch('addToCart', item.id);
        localStorage.setItem('cart',JSON.stringify(this.items))
        this.dialog = false        
      },
    }
}
</script>

<style>

</style>
