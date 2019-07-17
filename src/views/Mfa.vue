<template>
    
    <v-container align-content-center grid-list-md>
        <v-dialog
                v-model="dialog"
                max-width="600"
                >
                <v-card>
                    <v-card-title class="headline newPink--text" >{{editedItem.title}}</v-card-title>

                    <v-card-text>
                        <h1 class="newPink--text">You</h1>
                        {{editedItem.you}}
                        <h1  class="newPink--text">Gain</h1>
                        {{editedItem.gain}}
                        <h1  class="newPink--text">Work</h1>
                        {{editedItem.work}}
                        <h1 class="newPink--text">Notes</h1>  
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
                 <!-- <v-card-text class="px-1 ">{{i.title}}</v-card-text> -->
                </v-img>
                </v-card>
                </v-hover>
                </div>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <h2 class="newPink--text py-3">Course Summary</h2>
            <p class="texts--text">
              The Level 2 Award in Mental Health Awareness is appropriate for individuals working in all sectors and aims to develop knowledge and understanding of mental health issues.
            </p>
            <p class="texts--text">
              The course teaches people to recognise the signs that someone may need help / support with their mental health and offer help on a first aid basis. It will give individuals a depth of understanding of mental health and help them to spot the triggers and signs of a range of mental health issues and give them confidence to step in, reassure and support a person in distress using the Mental Health First Aid knowledge.
            </p>
            <p class="texts--text">
              The awarding organisation for this qualification is ProQual Awarding Body and the regulatory body is the Office of Qualifications and Examinations Regulation (Ofqual). This qualification has been accredited onto the Regulated Qualifications Framework.
            </p>
          </v-layout>
        <v-layout row>
           <h2 class="newPink--text py-2"> Topics covered</h2>
        </v-layout>
        <v-layout row wrap>
            <p class="texts--text">The qualification covers various topics including: </p>
            <p class="texts--text">Understanding what is meant by mental health including looking at aims of mental health first aid and contributing factors of others.</p>
            <p class="texts--text">Understanding common mental health conditions including depression, substance misuse, addiction, anxiety disorders, post-traumatic stress disorder (PTSD), self-harm, suicide, eating disorders, personality disorders & psychotic disorders.</p>
            <p class="texts--text">Understand the role of the mental health first aider including skills / strengths of a mental health first aider and how to support individuals showing signs or symptoms of mental health.</p>
        </v-layout>
        <v-layout row wrap>
          <h2 class="newPink--text"> Pre-requisites</h2>
        </v-layout>
        <v-layout row wrap>
          <p class="texts--text">There are no pre-requisites to attend this course. However, we will carry out an initial assessment of candidate skills and knowledge to identify any gaps and help plan the assessment.</p>
        </v-layout>
        <v-layout row wrap>
          <h2 class="newPink--text"> Validity of Course</h2>
        </v-layout>
        <v-layout row wrap>
          <p class="texts--text"> This qualification does not expire although the candidate is expected to attend one CPD (Continuing Professional Development) training event per year.</p>
        </v-layout>
        <v-layout row wrap>
          <h2 class="newPink--text"> Duration</h2>
        </v-layout>
        <v-layout row wrap>
          <p class="texts--text"> 2 Days – 20 Hours (15 guided learning hours)</p>
        </v-layout>
        <v-layout row wrap>
          <h2 class="newPink--text"> Assessment</h2>
        </v-layout>
        <v-layout row wrap>
          <p class="texts--text"> Candidates must demonstrate the level of knowledge described in the unit. Assessment is the process of measuring a candidate’s knowledge and understanding against the standards set in the qualification. Each candidate is required to complete a simple workbook which demonstrates their achievements for each unit.</p>
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
        bookings:[
        ],
        tab: null,
        
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
        if(this.nvq4_5[x].type == 'Mental Health & First aid'){
          tempArr.push(this.nvq4_5[x])
        }
      }
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
