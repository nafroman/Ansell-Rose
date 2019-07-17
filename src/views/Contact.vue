<template>
    <v-container>

        <v-layout row justify-center="">
            <v-flex xs3></v-flex>
            <v-flex xs12 md5 >
                <v-form
                    ref="form"
                    
                    lazy-validation
                >
            <v-card class="mx-auto rounded-card"
              max-width = "auto"
              dark
              flat>
          <v-card-title >
          <v-layout row wrap>
            <v-flex xs12 mt-3 >
              <h4 class="headline pl-2">Contact Us</h4>
            </v-flex>
            <v-flex xs6 mt-3 >
              <h3 class=" pl-2"> E-mail: <a :href="`mailto:${'info@ansellrose.com'}`">info@ansellrose.com</a></h3>
            </v-flex>
          </v-layout>
          <v-layout row class="mt-3">
                  <v-btn-toggle
                  class="transparent"
                  >
                  <v-btn href="https://www.instagram.com/ansellroseltd/" flat>
                    <v-icon class="fab fa-instagram"></v-icon>
                  </v-btn>

                  <v-btn href="https://www.facebook.com/Ansell-Rose-Partnership-2184851654902000/" flat>
                    <v-icon class="fab fa-facebook-f"></v-icon>
                  </v-btn>

                  <v-btn href="https://twitter.com/AnsellRose1?lang=en-gb" flat>
                    <v-icon class="fab fa-twitter"></v-icon>
                  </v-btn>

                  <v-btn href="https://www.linkedin.com/in/sj-rose-236516163/" flat>
                    <v-icon class="fab fa-linkedin"></v-icon>
                  </v-btn>
                </v-btn-toggle>
          </v-layout>
        <!--  <v-layout row>
            <v-flex xs3>
              <v-btn small  href="https://www.instagram.com/ansellroseltd/"><v-icon class="fab fa-instagram"></v-icon></v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn small  href="https://www.facebook.com/Ansell-Rose-Partnership-2184851654902000/"><v-icon class="fab fa-facebook-f"></v-icon></v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn small  href="https://twitter.com/AnsellRose1?lang=en-gb"><v-icon class="fab fa-twitter"></v-icon></v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn small  href="https://www.linkedin.com/in/sj-rose-236516163/"><v-icon class="fab fa-linkedin"></v-icon></v-btn>
              </v-flex>
          </v-layout> -->
          
          </v-card-title>

          <v-card-text>
              <v-container grid-list-md >
              <v-layout row wrap>
                <v-flex xs6 >
                  <v-text-field v-model="name" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs6 >
                  <v-text-field v-model="email" label="email"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-textarea v-model="message" label="Leave us a message"></v-textarea>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12>
         <!--v-model="message"-->         
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Clear</v-btn>
            <v-btn color="blue darken-1" flat @click="send">Submit</v-btn>
          </v-card-actions>
        </v-card>
                </v-form>
            </v-flex>
            <v-flex xs4></v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import db from '@/fb'
export default {
  data(){
     return{
         name: '',
         message:'',
         email: '',
     }
 },
 computed:{

 },
 methods:{
            close(){
              this.name = '',
              this.message = '',
              this.email = ''
            },
            send(){
              var obj ={
                name: this.name,
                email: this.email,
                message: this.message
              }
              db.collection('contact').add(obj).then(()=>{
                                  console.log('ADDED to db')
                                  this.loading = false;
                                  this.dialog = false;
                                  this.$emit('orderCreated')
                            })

            }
      },
}
</script>

<style>
.rounded-card{
    border-radius:10px;
}
</style>
