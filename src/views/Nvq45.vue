<template>
    <v-container align-content-center grid-list-md>
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
        <v-layout row wrap>
            
        </v-layout>
        <v-layout row wrap>
            
        </v-layout>
    </v-container>
</template>

<script>
import db from '@/fb'
export default {
  data(){
      return{
        bookings:[
        ],
        tab: null,
        items:[],
        dialog: false,
         editedItem: {
        title:'',
        text:'',
        value:''
        },
        nvq4_5:[],
       /* nvq4_5:[
            
            {id:"L4dCSS",title:"NVQ Level 4 Diploma in Construction Site Supervision", img: require('@/assets/lvl4cranes.png'),level:4, price:1250,vprice:1500,text:"You will be acting as one of the following and will have the technical skills and an appropriate level of knowledge for the role.",list:["First Line Supervisor","Assistant Site Supervisor","Related Construction Supervisor"]},
            {id:"L4dCLO",title:"NVQ Level 4 Diploma in Controlling Lifing Operations", img: require('@/assets/lvl5crane.jpg'),level:4,price:1250,vprice:1500,text:"You will be acting as a Crane Supervisor and will have a Red Operators CPCS card as well as the technical skills and an appropriate level of knowledge for the role."},
            {id:"L5dCLO",title:"NVQ Level 5 Diploma in Controlling Lifting Operations – Planning Lifts (Construction)",img: require('@/assets/lvl5crane.jpg'), level:5, price:1350,vprice:1620, text:"You will be acting as an Appointed Person and will have a Red Operators CPCS card as well as the technical skills and an appropriate level of knowledge for the role.",gain:["CPCS Blue Competent Operators Card – Appointed Person – A61"]},
            {id:"L6dCSM",title:"NVQ Level 6 Diploma in Construcion Site Management",img: require('@/assets/management.png'),level:6,price:1850,vprice:2220,text:"You will be a construction manager or have senior management responsibilities with the technical skills and an appropriate level of knowledfge for the role",gain:["CSCS Black Card"]},
            {id:"L6dOH&S",title:"NVQ Level 6 Diploma in Occupational Health & Safety Practice",img: require('@/assets/management.png'), price:1850,vprice:2220,text:"To undertake this qualification you will be:",list:["Acting as part of a senior managerial team","Be responsible for developing and ensuring compliance of Health and Safety procedures","SHEQ Manager or working towards"],gain:["GradIOSH","CMIOSH"]},
            {id:"L7dCSM",title:"NVQ Level 7 Diploma in Construction Senior Management",img: require('@/assets/lvl6Bluebuilding.png'), price:1950,vprice:2340,text:"You will be working at a senior level within the company as one of the following :",list:["Project Manager","Quantity Manager","Construction Site Manager" , "Estimator" , "Engineer" , "Director" , "Contracts Manager"]}

        ], */
        
        maxBookings: '30',
        totalBookings: 0,
        active: null,
        dialog: false,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    created () {
    
      db.collection('items').onSnapshot(res =>{
        const changes = res.docChanges();
        changes.forEach(change =>{
          if(change.type === 'added'){
            this.nvq4_5.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
      
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
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      },
      openItem (item) {
        this.editedIndex = this.nvq4_5.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      addToCart (item) {
        this.items.push(item.id)
        this.$store.dispatch('addToCart', item.id);
        localStorage.setItem('cart',JSON.stringify(this.items))
        this.dialog = false
        
        
      },
    },computed: {
    
    forSale1() { return this.$store.getters.forSale1; },
    inCart() { return this.$store.getters.inCart; },
    filterList(){
      var tempArr =[]
      for(var x=0 ;x<this.nvq4_5.length; x++){
        if(this.nvq4_5[x].type == 'NVQ Levels 4,5,6,7'){
          tempArr.push(this.nvq4_5[x])
        }
      }
      tempArr.sort(this.compare_to_sort)
      return tempArr
    }
  }
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

