<template>
    <v-container align-content-center grid-list-md>
        <v-layout row wrap>
            
        </v-layout>
        <v-layout row wrap>
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
                        <a :href="editedItem.links">{{editedItem.links}}</a>
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
           <!-- {{inCart}} -->
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
        items:[],
        tab: null,
        dialog: false,
        editedIndex: -1,
        editedItem: {
        title:'',
        text:'',
        value:''
        
      },
      newList:[],
      nvq2_31:[],
       
        /*nvq2_31:[
            

            {id:"L2dCn", title:"NVQ Level 2 Diplomas in Construction", level: 2 ,price:800, vprice:960, img: require('@/assets/image002.png')  , flex: 3, text:"An NVQ can be taken for many different roles within the construction industry. You choose the best NVQ to suit your current construction role and then the one most specific to your job. This leads to you being able to gain a CSCS card, which many construction sites across the UK ask for before allowing you on site."},
            {id:"L2dWO", title:"Level 2 NVQ Diplomas in Wood Occupations (Site Carpentry)", img:require('@/assets/woodwork.jpg') , flex: 3, level: 2 , price:800, vprice:960, text:"This diploma covers carpentry in the following areas, you choose which one that is the best fit for the work that you do: ", list:["Site Carpentry – including architectural","Timber Framing or Timber Erection or Decks and Cladding","Post and Beam Carpentry"]},
            {id:"L2dPO", title:"Level 2 NVQ Diplomas in Plant Operations", img:require('@/assets/image007.png'), flex: 3, level:2, price:800, vprice:960, text:"This diploma covers the following areas, you choose the one that is the best fit for the job you are doing: ", list:["Cranes and Specialist Lifting - Crawler or Mobile or Tower Cranes","Excavating- including excavators 180 or 360 and tractors","Extracting ","Construction and Forming","Transporting Loads – includes concrete pumps","Road/Rail","Attachments – includes telehandler","Road Plant / Machinery "]},            
            {id:"L2dIS", title:"Level 2 NVQ Diploma in Interior Systems", img:require('@/assets/image001.png'), flex: 3, level:2, price:800, vprice:960, text:"This diploma covers the following areas, you choose the one which is the best fit for the job you are doing:", list:["Dry Lining Fixing", "Acoustic Installations", "Partitioning Operable or Demountable or Glass"]},
            {id:"L2dIMC", title:"Level 2 NVQ Diplomas in Innovated Methods of Construction",img:require('@/assets/image006.png'), flex: 3, level:2, price:800, vprice:960, text:"This diploma covers the following areas, you choose the one which is the best fit for the job you are doing: ", list:["Autoclaved Concrete","Modular or Portable Building", "Membrane Cladding"]},
            {id:"L2dSIO", title:"Level 2 NVQ Diplomas in Specialist Installations Occupations", img:require('@/assets/image006.png'), flex: 3, level:2, price:800, vprice:960, text:"This diploma covers the following areas, you choose the one which is the best fit for the job you are doing:",list:["Enclosures","Pathway","Door or Shutter Systems","Blinds","Solar Shading"]},
            {id:"L2dCO", title:"Level 2 NVQ Diplomas in Construction Operations", img:require('@/assets/image006.png'), flex: 3, level:2, price:800, vprice:960, text:"This diploma covers following areas, you choose which one that is the best fit for the work that you do: ", list:["Modular Paving Pavement", "Kerbs and Channels", "Excavation", "Pathways"]},
            {id:"L2dCe", title:"Level 2 NVQ Diplomas in Concrete", img:require('@/assets/image006.png'), flex: 3, level: 2, price:800, vprice:960, text:"This diploma covers following areas, you choose which one that is the best fit for the work that you do. There are two Level 2 qualifications: Specialist Concrete Operations and Pre-Cast Concrete Installations, which can cover the following: ", list:["Concrete Repair", "In Situ Flooring", "Including screed or resin", "Decorative Concrete", "Concrete Drilling or Sawing"]},
            {id:"L2dP&D", title:"Level 2 NVQ Diploma in Decorative Finishing and Industrial Painting Occupations (Painting & Decorating)", img:require('@/assets/interior.png'), flex: 3 ,level: 2, price:800, vprice:960,text:"This diploma covers following areas, you choose which one is most suitable for the work that you do: ", list:["General Painter","Industrial Painter", "Heritage Painter"]},
            {id:"L2dTO", title:"Level 2 NVQ Diploma in Trowel Occupations(Brick Laying)",img:require('@/assets/image003.png') , flex: 3, level:2, price:800,vprice:960, text:"This diploma covers certain elements of bricklaying for all candidates, with the rest of the qualification being made up with other selected units chosen as the best fit for the work that you do."},
            {id:"L2dWT", title:"Level 2 NVQ Diploma in Wall Tiling",img:require('@/assets/image006.png'), flex: 3, level:2, price:800,vprice:960, text:"This diploma covers specific elements of tiling and health and safety for all candidates working or training in the tiling industry."},
            {id:"L2dSO", title:"Level 2 NVQ Diplomas in Steel Occupations", img:require('@/assets/image006.png'), flex: 3, level: 2 , price:800,vprice:960, text:"This diploma covers specific elements of steel occupations and health and safety for all candidates working or training in the steel fixing industry."},
            {id:"L2dCd", title:"Level 2 NVQ Diploma in Cladding(Roof Sheeting and Cladding)" , img:require('@/assets/image006.png'), flex: 3, level:2, price:800,vprice:960,text:"This diploma covers specific elements of cladding occupations and health and safety for all candidates working or training in the roof sheeting / cladding industries, including specialist cladding."},
            {id:"L3dWO", title:"Level 3 NVQ Diplomas in Wood Occupations", img:require('@/assets/image006.png'), flex: 3, level:3, price:800,vprice:960, text:"This diploma covers carpentry in the following areas, you choose which one that is the best fit for the work that you do: ", list:["Site Carpentry","Architectiral Joinery", "Shopfitting Site Work", "Shopfitting Bench Work", "Structural Post and Beam Carpentry Timber Frame Erection"]},
            {id:"L3dTO", title:"Level 3 NVQ Diploma in Trowel Occupations (Brick Laying)",img:require('@/assets/image003.png') , flex: 3, level:3, price:800,vprice:960, text:"This diploma covers certain elements of trowel occupations for all candidates, with the rest of the qualification being made up with other selected units chosen as the best fit for thework that you do, relating to more challenging masonry tasks."},
            {id:"L3dCd", title:"Level 3 NVQ Diploma in Cladding (Roof Sheeting and Cladding)", img:require('@/assets/image006.png'), flex: 3, level:3, price:800,vprice:960, text:"This diploma covers specific elements of cladding occupations and health and safety for all candidates working or training in the roof sheeting / cladding industries, including use of plant lifting machinery such as MEWP."},
            {id:"L3dSO", title:"Level 3 NVQ Diplomas in Steel Occupations", img:require('@/assets/steelfix.jpg'), flex: 3, level:3, price:800,vprice:960, text:"There are two Level 3 diplomas relating to the construction steel industry with category specific units for steel erecting and fabrication of steel structures."},
          ],  */ 
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    created () {
    
      db.collection('items').onSnapshot(res =>{
        const changes = res.docChanges();
        changes.forEach(change =>{
          if(change.type === 'added'){
            this.nvq2_31.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      }),
      this.nvq2_31.sort()
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
        this.editedIndex = this.nvq2_31.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      addToCart (item) {
        this.items.push(item.id)
        this.$store.dispatch('addToCart', item.id);
        localStorage.setItem('cart',JSON.stringify(this.items))
        this.dialog = false
        this.$router.replace('Nvq')
        
      },
      

    },
    computed: {
    forSale1() { return this.$store.getters.forSale1; },
    inCart() { return this.$store.getters.inCart; },
    filterList(){
      var tempArr =[]
      for(var x=0 ;x<this.nvq2_31.length; x++){
        if(this.nvq2_31[x].type == 'NVQ Level 2-3'){
          tempArr.push(this.nvq2_31[x])
        }
      }
      tempArr.sort(this.compare_to_sort)
      return tempArr
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
