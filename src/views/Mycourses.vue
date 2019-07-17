<template>
    <v-container>
        <v-layout row wrap>
            <h1>My Courses</h1>
        </v-layout>
        <v-layout row wrap>
            <v-flex  xs12 >
          <v-toolbar flat dark>
            <v-toolbar-title>My Purchases/Courses</v-toolbar-title>
            <v-divider
              class="mx-2"
              inset
              vertical
            ></v-divider>      
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-data-table
            :headers="headers"
            :items="filterList"
            class="elevation-1"
            :search ="search"
            :dark ="true"
          >
          <template v-slot:items="props">
            
            <td class="text-xs-left"><li v-for="i in props.item.order" :key="`Order${i}`">{{i}}</li></td>
            <td class="text-xs-left">{{ props.item.date }}</td>                  
           <!-- <td class="px-1">
              <v-icon
                small
                @click="deleteItem(props.item)"
              >
                delete
              </v-icon>
            </td> -->
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" >Reset</v-btn>
          </template>
          <v-alert v-slot:no-results :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
          </v-alert>
      </v-data-table>
      </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import db from '@/fb'
import firebase from 'firebase'
export default {
    data () {
      return {
        messages:[],
        headers: [
        { text: 'Courses', align: 'left', value: 'name' , sortable: false},
        { text: 'Ordered On', align: 'left', value: 'email', sortable: false},
        { text: '', align: 'left', value: 'message', sortable: false},    
        ],
        headers2: [
        { text: 'Name', align: 'left', value: 'name' , sortable: false},
        { text: 'email', align: 'left', value: 'email', sortable: false},
        { text: 'Item Info', align: 'left', value: 'message', sortable: false},  
        ],
      }
    },
    computed:{
      filterList(){
        var tempArr =[]
        var uname = firebase.auth().currentUser.email
        for(var x=0; x<this.messages.length; x++){
          if(this.messages[x].email === uname){
            tempArr.push(this.messages[x])
          }
        }
        return tempArr
      }
    },
    created(){
      db.collection('orders').onSnapshot(res =>{
        const changes = res.docChanges();
        changes.forEach(change =>{
          if(change.type === 'added'){
            this.messages.push({
              ...change.doc.data(),
              id: change.doc.id
            })

          }
        })
      })
    },
    methods:{
      deleteItem (item) {
        const index = this.messages.indexOf(item)
        confirm('Are you sure you want to cancel this item?') && this.orders.splice(index, 1)
        db.collection('phonebook').doc(item.id).delete()
      },
    }
  }
</script>

<style>

</style>
