<template>
    <v-container>
      
      <v-layout>
          <v-flex xs3></v-flex>
          <v-flex xs12 md5>
              <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
              >
                  <v-card class="mx-auto rounded-card"
              dark
              flat>
        <v-card-title >
        <v-layout wrap>
          <v-flex xs12>
            <h4 class="headline pl-3">Sign Into Your Account</h4>
          </v-flex>
        </v-layout>
        </v-card-title>

        <v-card-text>
            <v-container grid-list-md >
            <v-layout  wrap >
              <v-flex xs12 >
                <v-text-field v-model="email" label="Email"></v-text-field>
              </v-flex>
              <v-flex xs12 >
                <v-text-field v-model="password" type="Password" label="password"></v-text-field>
              </v-flex>
            </v-layout>
            
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="$router.push('Signup')">Sign Up</v-btn>
      
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
              </v-form>
          </v-flex>
          <v-flex xs4></v-flex>
      </v-layout>
    </v-container>

</template>

<script>

import firebase from 'firebase'
//import moment from 'moment'
//import db from '@/fb'



export default {
 data(){
     return{

         password:'',
         email: '',
         roles: null,
         list:  []
     }
 },
 /*created () {
        db.collection('users').onSnapshot(res =>{
        const changes = res.docChanges();
        changes.forEach(change =>{
          if(change.type === 'added'){
            this.list.push({
              ...change.doc.data(),
              id: change.doc.id
            })

          }
        })
      })
    },*/
 methods:{

      login(){

        for(var x=0; x<this.list.length; x++){
            if(this.email === this.list[x].email){
              this.roles = this.list[x].roles
            }
        }
        const user = {
          email: this.email,
          password: this.password,
          roles: this.roles
        }
        //console.log(user)
        this.$store.dispatch('signInAction', user)
      }
    }
}





</script>

<style>

</style>
