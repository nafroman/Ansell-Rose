<template>
    <v-container>
        <v-layout row wrap> </v-layout>
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
            <td class="justify-center layout px-0">
                
            <v-icon
                small
                @click="removeFromCart(index)"
            >
                delete
            </v-icon>
            </td>
           
        </template>
            </v-data-table>
        </v-layout>         
        
        <v-layout row wrap justify-center="" class="pt-4 mt-4">
            <h1 class="white--text">total £ {{total}}</h1>
            <v-btn @click="checkout">Order Courses</v-btn>
        </v-layout>
    </v-container>
</template>

<script>
import firebase from 'firebase'
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
           
        }
    },
    methods:{
        removeFromCart(val){
             this.$store.dispatch('removeFromCart', val)
        },
        checkout(){
            const currentUser = firebase.auth().currentUser;
            if(currentUser){
                this.$router.push('Checkout')
            }else{
                 this.$router.push('Login')
            }
            
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
