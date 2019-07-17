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
        <v-layout>
          <v-flex xs12>
            <h4 class="headline pl-5">Sign Up</h4>
          </v-flex>
        </v-layout>
        </v-card-title>

        <v-card-text>
            <v-container grid-list-md >
            <v-layout row wrap>
              <v-flex xs6 >
                <v-text-field v-model="fname" label="Firstname"></v-text-field>
                <v-text-field v-model="email" label="Email"></v-text-field>
              </v-flex>

              <v-flex xs6 >
                <v-text-field v-model="lname" label="Lastname"></v-text-field>
              </v-flex>
              <v-flex xs6 >
                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'visibility' : 'visibility_off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Password"
                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-flex>
              <v-flex xs6 >
                <v-text-field
                  v-model="cPassword"
                  :append-icon="show4 ? 'visibility' : 'visibility_off'"
                  :rules="[rules.required, rules.passwordMatch]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Confirm Password"
                  @click:append="show4 = !show4"
                ></v-text-field>
              </v-flex>
            
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="$router.push('Login')">Log In</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="login">Sign Up</v-btn>
        </v-card-actions>
      </v-card>
              </v-form>
          </v-flex>
          <v-flex xs4></v-flex>
      </v-layout>

    </v-container>

</template>

<script>

import firebase from 'firebase/app'
//import moment from 'moment'
//import db from '@/fb'



export default {
 data(){
     return{
          show1: false,
          show2: true,
          show3: false,
          show4: false,
          rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            passwordMatch: () => (this.password === this.cPassword) || 'Confirmation Password does not match'
          },
         password:null,
         email: null,
         cPassword:null,
         fname: null,
         lname: null,
         roles: null,
         list:  []
     }
 },
/* created () {
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
    }, */
 methods:{

      login(){

       const user = {
            email: this.email,
            password: this.password
          }
          /*const entry={
                    email: this.email,
                    fname: this.fname,
                    roles:{upstairs: false, factory: true}
              }*/
          this.$store.dispatch('signUpAction', user)


      }
    }
}





</script>

<style>

</style>
