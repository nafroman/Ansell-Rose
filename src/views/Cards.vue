<template>
<v-container>
        <v-layout row wrap justify-center="">
           <v-btn href="https://www.citb.co.uk/courses-and-qualifications/check-a-card-training-record/online-card-checker/">CARD CHECKER</v-btn>
           <v-btn href="www.agencycentral.co.uk">agencycentral</v-btn>
           <v-btn href="www.crcukltd.co.uk">crcukltd</v-btn>
           <v-btn href="www.careersinconstruction.com">careersinconstruction</v-btn>
           <v-btn href="www.indeed.co.uk">indeed</v-btn>
           <v-btn href="www.totaljobs.com">totaljobs</v-btn>
           <v-btn href="www.randstad.co.uk">randstad</v-btn>
           <v-btn href="www.adzuna.co.uk">adzuna</v-btn>
           <v-btn href="www.jobisjob.co.uk">jobisjob</v-btn>
           <v-btn href="www.manpower.co.uk">manpower</v-btn>
           <v-btn href="www.monster.co.uk">monster</v-btn>
           <v-btn href="www.skilledcareers.co.uk">skilledcareers</v-btn>
           <v-btn href="www.vgcgroup.co.uk">vgcgroup</v-btn>
           
           
          <v-btn class = primary href="www.pin-point.co.uk">pin-point</v-btn>
          <v-btn class = primary href="www.fomac.co.uk">fomac</v-btn>
          <v-btn class = primary href="www.talentspa.co.uk">talentspa</v-btn>
          <v-btn class = primary href="www.woodgroup.com">woodgroup</v-btn>
          <v-btn class = primary href="www.acrowrecruitment.com">arrowrecruitment</v-btn>
          <v-btn class = primary href="www.coyles.co.uk">coyles</v-btn>
          <v-btn class = primary href="www.oneway.co.uk">oneway</v-btn>
          <v-btn class = primary href="www.shorterm.co.uk">shorterm</v-btn>

          <v-btn class = secondary href="www.constructioncounselling.com">constructioncounselling</v-btn>
          
        </v-layout>
        <v-layout row wrap justify-center="">

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
            <v-flex v-for="i in grid" :key="`3${i}`" xs3>
                <v-hover>
                <v-card dark color="transparent" 
                slot-scope="{ hover }"
                :elevation="hover ? 12 : 2">
                 <v-img :src="i.img" @click="openItem(i)" :contain="true"  width="300px" height="300px">
                <v-card-text class="px-1">{{i.title}}</v-card-text>
                </v-img>
                </v-card>
                </v-hover>
            </v-flex>
        </v-layout>
    </v-container>
    
</template>

<script>
export default {
  data(){
      return{
        bookings:[
        ],
        links: [
               {icon: 'home', text: 'CPCS'},
               {icon: 'folder', text: 'CSCS'},
               {icon: 'person', text: 'HS&E'},
            ],
            editedItem: {
        title:'',
        text:'',
        value:''
      },
        grid:[
            {id:"l2dCO" ,title:"Level 2 Diploma in Construction Operations", img: require('@/assets/image002.png')  , flex: 3, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Pulvinar neque laoreet suspendisse interdum consectetur. Lacus vel facilisis volutpat est velit egestas dui id. Hac habitasse platea dictumst quisque. Volutpat diam ut venenatis tellus. Eget nullam non nisi est sit amet facilisis magna. Adipiscing diam donec adipiscing tristique risus. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Amet porttitor eget dolor morbi non arcu risus quis varius. Malesuada fames ac turpis egestas sed tempus urna et pharetra.", value:2222},
            {id:"l2dCO",title:"Level 3 NVQ Diploma in Occupational Work Supervision",img:require('@/assets/supervisor.jpg'), flex: 3, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Pulvinar neque laoreet suspendisse interdum consectetur. Lacus vel facilisis volutpat est velit egestas dui id. Hac habitasse platea dictumst quisque. Volutpat diam ut venenatis tellus. Eget nullam non nisi est sit amet facilisis magna. Adipiscing diam donec adipiscing tristique risus. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Amet porttitor eget dolor morbi non arcu risus quis varius. Malesuada fames ac turpis egestas sed tempus urna et pharetra.", value:2222},
            {id:"l2dWO", title:"Level 2 NVQ Diploma in Wood Occupations", img:require('@/assets/woodwork.jpg') , flex: 3, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Pulvinar neque laoreet suspendisse interdum consectetur. Lacus vel facilisis volutpat est velit egestas dui id. Hac habitasse platea dictumst quisque. Volutpat diam ut venenatis tellus. Eget nullam non nisi est sit amet facilisis magna. Adipiscing diam donec adipiscing tristique risus. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Amet porttitor eget dolor morbi non arcu risus quis varius. Malesuada fames ac turpis egestas sed tempus urna et pharetra.", value:2222},
            {id:"Extra", title:"Level 2 NVQ Diploma in Trowel Occupations", img:require('@/assets/image003.png') , flex: 3, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Pulvinar neque laoreet suspendisse interdum consectetur. Lacus vel facilisis volutpat est velit egestas dui id. Hac habitasse platea dictumst quisque. Volutpat diam ut venenatis tellus. Eget nullam non nisi est sit amet facilisis magna. Adipiscing diam donec adipiscing tristique risus. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Amet porttitor eget dolor morbi non arcu risus quis varius. Malesuada fames ac turpis egestas sed tempus urna et pharetra.", value:2222},
        ], 
        maxBookings: '30',
        totalBookings: 0,
        active: null,
        dialog:false,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    methods:{
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      },
      openItem (item) {
        this.editedIndex = this.grid.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      addToCart (item) {
        this.items.push(item.id)
        this.$store.dispatch('addToCart', item.id);
        localStorage.setItem('cart',JSON.stringify(this.items))
        this.dialog = false
        this.$router.replace('Nvq')
        
      }
    },
}
</script>

<style>

</style>
