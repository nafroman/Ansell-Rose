<template>
    <v-container>
      <v-layout row>
          <v-flex  xs12 >
            <v-dialog v-model="editFixed" max-width="500px">
                        <v-form ref="form6" lazy-validation="">
                        <v-card>
                        <v-card-title>
                            <span class="headline">Edit Purchase Order</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12>
                                <v-text-field v-model="editedItem.code" label="Order#"></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                <v-text-field v-model="editedItem.title" label="Supplier"></v-text-field>
                                </v-flex>
                                 <v-flex xs12>
                                      <v-select
                                          v-model="editedItem.type"
                                          :items="items"
                                          :rules="[v => !!v || 'Type is required']"
                                          prepend-icon="whatshot"
                                          label="Select Item"
                                          required
                                          chips
                                          dense
                                    ></v-select>
                                </v-flex>
                   
                  <!--  <v-flex xs6>
                          <v-text-field v-model.number="editedItem.image" label="Enter image filename inc extension"></v-text-field>
                          
                    </v-flex> -->
                    <v-flex xs6>
                          <v-text-field v-model.number="editedItem.price" label="Price"></v-text-field>
                          <v-text-field v-model.number="editedItem.vprice" label="Vat Price"></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                          <v-textarea v-model="editedItem.you" label="You"></v-textarea>
                    </v-flex>
                    <v-flex xs12>
                          <v-textarea v-model="editedItem.gain" label="Gain"></v-textarea>
                    </v-flex>
                    <v-flex xs12>
                          <v-textarea v-model="editedItem.work" label="Work"></v-textarea>
                    </v-flex>
                    <v-flex xs12>
                          <v-textarea v-model="editedItem.notes" label="Notes"></v-textarea>
                    </v-flex>
                    <v-flex xs12>
                          <v-text-field v-model="editedItem.links" label="Links"></v-text-field>
                    </v-flex>
                            </v-layout>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" flat @click="cancel">Cancel</v-btn>
                            <v-btn color="blue darken-1" flat @click="updateFixed">Save</v-btn>
                        </v-card-actions>
                        </v-card>
                        </v-form>
                    </v-dialog>

            <v-dialog v-model="add" persistent max-width="600px">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">Add Item</v-btn>
              </template>
              <v-form ref="form2" lazy-validation="">
            <v-card>
            <v-card-title>
            <span class="headline">New Item</span>
            </v-card-title>
            <v-card-text>
            <v-container grid-list-md>
                <v-layout column="">
                  <v-flex xs12>
                          <v-text-field v-model="orderItem.code" label="Code"></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                          <v-text-field v-model="orderItem.title" label="Title"></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                          <v-select
                              v-model="orderItem.type"
                              :items="items"
                              :rules="[v => !!v || 'Type is required']"
                              prepend-icon="whatshot"
                              label="Select Item"
                              required
                              chips
                              dense
                        ></v-select>
                    </v-flex>
                  
                  <!-- https://www.proqualab.com/wp-content/uploads/2016/10/ProQual-L2-NVQ-Diploma-in-Cladding-Occupations-1.pdf -->
                    <v-flex xs6>
                          <v-text-field v-model.number="orderItem.price" label="Price"></v-text-field>
                          <v-text-field v-model.number="orderItem.vprice" label="Vat Price"></v-text-field>
                    </v-flex>
                
                    <v-flex xs12>
                          <v-textarea v-model="orderItem.you" label="You"></v-textarea>
                    </v-flex>
                    <v-flex xs12>
                          <v-textarea v-model="orderItem.gain" label="Gain"></v-textarea>
                    </v-flex>
                    <v-flex xs12>
                          <v-textarea v-model="orderItem.work" label="Work"></v-textarea>
                    </v-flex>
                    <v-flex xs12>
                          <v-textarea v-model="orderItem.notes" label="Notes"></v-textarea>
                    </v-flex>
                    <v-flex xs12>
                          <v-text-field v-model="orderItem.links" label="Links"></v-text-field>
                    </v-flex>
                    

                </v-layout>
            </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="cancel">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
            </v-card-actions>
        </v-card>
        </v-form>
        </v-dialog>

          <v-toolbar flat dark>
            <v-toolbar-title>Items</v-toolbar-title>
            <v-divider
              class="mx-2"
              inset
              vertical
            ></v-divider>      
            <v-spacer></v-spacer>
          </v-toolbar>
          <!-- :search ="search" -->
          <v-data-table
            :headers="headers"
            :items="list"
            class="elevation-1"
            
            :dark ="true"
          >
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.code }}</td>
            <td class="text-xs-left">{{ props.item.title }}</td>
            <td class="text-xs-left">{{ props.item.type }}</td>
            <td class="text-xs-left">{{ props.item.price }}</td>
            <td class="text-xs-left">{{ props.item.vprice }}</td>                  
            <td class="px-3">
              <v-icon
                medium
                @click="fixedEdit(props.item)"
              >
                edit
          </v-icon>
              <v-icon
                medium
                @click="deleteItem(props.item)"
              >
                delete
              </v-icon>
              
            </td>
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


      <v-layout row>
          <v-flex  xs12 >
          <v-toolbar flat dark>
            <v-toolbar-title>Orders</v-toolbar-title>
            <v-divider
              class="mx-2"
              inset
              vertical
            ></v-divider>      
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-data-table
            :headers="headers2"
            :items="orders"
            class="elevation-1"
           
            :dark ="true"
          >
          <template v-slot:items="props">

            <td class="text-xs-left" ><a :href="`mailto:${props.item.email}`">{{props.item.email}}</a> </td>
            <td class="text-xs-left"><li v-for="i in props.item.order" :key="`Order${i}`">{{i}}</li></td>
            <td>
               <v-checkbox  :input-value="props.item.confirm" v-model="props.item.confirm" @change="check2($event, props.item.id)"></v-checkbox>
            </td>
            <td class="text-xs-left">{{ props.item.total }}</td>                  
            <td class="px-1">
              <v-icon
                small
                @click="deleteItem2(props.item)"
              >
                delete
              </v-icon>
            </td>
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

      






    <v-layout row>
          <v-flex  xs12 >
          <v-toolbar flat dark>
            <v-toolbar-title>Messages</v-toolbar-title>
            <v-divider
              class="mx-2"
              inset
              vertical
            ></v-divider>      
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-data-table
            :headers="headers3"
            :items="messages"
            class="elevation-1"
            
            :dark ="true"
          >
          <template v-slot:items="props">
            
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left" ><a :href="`mailto:${props.item.email}`">{{props.item.email}}</a> </td>
            <td class="text-xs-left">{{ props.item.message }}</td>                  
            <td class="px-1">
              <v-icon
                medium
                @click="deleteItem3(props.item)"
              >
                delete
              </v-icon>
              
            </td>
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
import { storage } from 'firebase';
export default {
    data () {
      return {
        messages:[],
        add:false,
        title:'',
        type: '',
        list:[],
        price: 0,
        vprice:0,
        you:'',
        gain:'',
        notes:'',
        image: null,
        editFixed:false,
        orderItem: {
              code: '',
              title:'',
              type:'',
              price:0,
              vprice:0,
              you:'',
              gain:'',
              notes:'',
              work:'',
              links:'',
        },
        defaultItem: {
              code: '',
              title:'',
              type:'',
              price:0,
              vprice:0,
              you:'',
              gain:'',
              notes:'',
              work:'',
              image:'',
              links:'',
        },
        editedItem: {
              code: '',
              title:'',
              type:'',
              price:0,
              vprice:0,
              you:'',
              gain:'',
              work:'',
              notes:'',
              image:null,
              links:'',
        },
        orders:[],
        items:['NVQ Level 2-3', 'NVQ Levels 4,5,6,7', 'Health & Safety Training','CPCS','Plant Training','Mental Health & First aid'],
        headers: [
        { text: 'Code', align: 'left', value: 'code' , sortable: false},
        { text: 'Title', align: 'left', value: 'name' , sortable: false},
        { text: 'Type', align: 'left', value: 'email', sortable: false},
        { text: 'price', align: 'left', value: 'message', sortable: false},
        { text: 'vprice',  align: 'left', sortable: false},
        { text: 'Actions', align: 'left', sortable:false},   
        ],
        headers2: [
        { text: 'email', align: 'left', value: 'email', sortable: false},
        { text: 'Order', align: 'left', value: 'message', sortable: false},
        { text: 'Seen',  align: 'left', sortable: false},
        {text:'Actions', align: 'left',sortable: false},   
        ],
        headers3: [
        { text: 'Name', align: 'left', value: 'name' , sortable: false},
        { text: 'email', align: 'left', value: 'email', sortable: false},
        { text: 'Message', align: 'left', value: 'message', sortable: false},
        { text: 'Delete',  align: 'left', sortable: false},   
        ],
      }
    },
    computed:{
        getItems(){
          var arr = []
          var obj ={}
          for(var x = 0; x<this.list.length;x++){
            obj ={
              id:this.list[x].code,
              title: this.list[x].title,
              value: this.list[x].vprice
            }
            arr.push(obj)
          }
          console.log(arr)
        }

    },
    created(){
      db.collection('contact').onSnapshot(res =>{
        const changes = res.docChanges();
        changes.forEach(change =>{
          if(change.type === 'added'){
            this.messages.push({
              ...change.doc.data(),
              id: change.doc.id
            })
            
          }
        })
      }),
      db.collection('items').onSnapshot(res =>{
        const changes = res.docChanges();
        changes.forEach(change =>{
          if(change.type === 'added'){
            this.list.push({
              ...change.doc.data(),
              id: change.doc.id
            })

          }
        })
      }),
      db.collection('orders').onSnapshot(res =>{
        const changes = res.docChanges();
        changes.forEach(change =>{
          if(change.type === 'added'){
            this.orders.push({
              ...change.doc.data(),
              id: change.doc.id
            })

          }
        })
      })
    },
    methods:{
      onPickFile(){
        this.$refs.fileInput.click();
      },
      check2 (e, item) {
           db.collection('orders').doc(item).update({
                    checked:e,

                }).then(()=>{
                    console.log("CHANGED")
                })
        },
      onFilePicked(event){
        const files = event.target.files
        let filename = files[0].name;
        if(filename.lastIndexOf('.')<=0){
          return alert("Please add a valid file")
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load',()=>{
          this.orderItem.imageUrl = fileReader.result
          this.editedItem.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
      },
      
      deleteItem (item) {
        const index = this.list.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.list.splice(index, 1)
        db.collection('items').doc(item.id).delete()
      },
      deleteItem2 (item) {
        const index = this.orders.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.orders.splice(index, 1)
        db.collection('orders').doc(item.id).delete()
      },
      deleteItem3 (item) {
        const index = this.messages.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.messages.splice(index, 1)
        db.collection('contact').doc(item.id).delete()
      },
      fixedEdit(item){
            this.editedIndex = this.list.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.editFixed = true
      },
      updateFixed(){
            if(this.$refs.form6.validate()){
            if (this.editedIndex > -1) {
            Object.assign(this.list[this.editedIndex], this.editedItem)
            } else {
                this.list.push(this.editedItem)
            }
            db.collection('items').doc(this.list[this.editedIndex].id).update({
                code: this.editedItem.code,
                title:this.editedItem.title,
                type:this.editedItem.type,
                price:this.editedItem.price,
                vprice: this.editedItem.vprice,
                you: this.editedItem.you,
                gain: this.editedItem.gain,
                work: this.editedItem.work,
                notes: this.editedItem.notes,
                //image: require('@/assets/' + this.editedItem.image ),
                links:this.editedItem.links
            }).then(()=>{
                this.$emit('Delivered')
                this.editFixed = false
            })
            setTimeout(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            }, 300)
            this.editFixed = false;
            }
           
        },
      save(){
            if(this.$refs.form2.validate()){
            if (this.editedIndex > -1) {
            Object.assign(this.list[this.editedIndex], this.orderItem)
            } else {

                db.collection('items').add(this.orderItem).then(()=>{
                    console.log('ADDED to db')
                })

            }
            setTimeout(() => {
            this.orderItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            }, 300)
            this.add = false;
            }
      },
      cancel () {
            this.add = false
            this.editFixed = false
            setTimeout(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.orderItem = Object.assign({}, this.defaultItem)
            }, 300)
        },
    }
  }
</script>

<style>

</style>
