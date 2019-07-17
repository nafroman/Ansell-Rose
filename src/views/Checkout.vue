<template>
    <v-container>
        <v-layout row wrap justify-center class="my-5"> 
            <h1 class="newPink--text">Order Summary</h1>
            <h2></h2>
        </v-layout>
        <v-layout row wrap justify-center>
            <v-data-table
                :headers="headers"
                :items="cart"
                hide-default-header
                hide-default-footer
                :hide-actions="true"
                class="elevation-1"
            >
                <template v-slot:items="props">
            <td class="text-xs-center">
            {{ props.item.title }}
            </td>
            <td></td>
            <td >£{{ props.item.vprice }}</td> 
            
           
        </template>
            </v-data-table>
        <div>
   <!-- <vue-stripe-checkout
      ref="checkoutRef"
      :name="name"
      :description="description"
      :currency="currency"
      :amount="(total/2)*100"
      :allow-remember-me="false"
      @done="done"
      @opened="opened"
      @closed="closed"
      @canceled="canceled"
    ></vue-stripe-checkout>
    <button @click="checkout">Checkout</button>  -->
  </div>
        </v-layout>         
        
        <v-layout row  justify-center="" class="pt-4 mt-4">
            
            <v-flex xs1>
                <h1 class="white--text">Total deposit to pay £ {{total/2}}</h1>
            </v-flex>
            <v-btn @click="check">Pay Now</v-btn>
        </v-layout>
    </v-container>
</template>

<script>
import firebase from 'firebase'
import db from '@/fb'
import moment from 'moment'
export default {
    data(){
        return{
            headers:[
             
             {text: 'Title', align: 'center', value: 'title', sortable: false},
             {text:'', value:'', sortable: false},
             {text: 'Price', value: 'vprice', sortable: false },
             {text:'', value:'', sortable: false},
            ],
            items:[
            ],
            name: 'Order Courses',
            description: 'Total deposit to pay',
            currency: 'GBP',
              
        }
    },
    methods:{
        removeFromCart(val){
             this.$store.dispatch('removeFromCart', val)
        },
      /*  async checkout () {
      // token - is the token object
      // args - is an object containing the billing and shipping address if enabled
      const { token, args } = await this.$refs.checkoutRef.open();
        },
        done ({token, args}) {
        // token - is the token object
        // args - is an object containing the billing and shipping address if enabled
        // do stuff...
        },
        opened () {
        // do stuff 
        },
        closed () {
        // do stuff 
        },
        canceled () {
        // do stuff 
        }, */
        inCart(){
            return this.$store.getters.inCart.map((cartItem)=>{
               return this.$store.getters.forSale.find((saleItem)=>{
                   return cartItem === saleItem.id
               }) 
            })
        },
        check(){
            var list =[]
            var x = this.inCart()
            for(var y=0;y<x.length;y++){
                list.push(x[y].title)
            }
            
            var obj ={
                email: firebase.auth().currentUser.email,
                order: list,
                confirm: false,
                total: this.cart.reduce((acc, cur) => acc + cur.vprice, 0),
                date: moment(new Date()).format('YYYY-MM-DD')
            }
            db.collection('orders').add(obj).then(()=>{
                        console.log('ADDED to db')
            })    

        }
                  

    },
    computed:{
        cart(){
            return this.$store.getters.inCart.map((cartItem)=>{
               return this.$store.getters.forSale.find((saleItem)=>{
                   return cartItem === saleItem.id
               }) 
            })
        },
        total(){
            return this.cart.reduce((acc, cur) => acc + cur.vprice, 0)
        },
        
    },
    
}
</script>

<style>

</style>
