<template>
    <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top colour="success">
        <span>Created!</span>
        <v-btn flat @click="snackbar = false">close</v-btn>
    </v-snackbar>

    <v-toolbar flat app dark color="black">
     <v-toolbar-side-icon  @click="drawer = !drawer"></v-toolbar-side-icon>
    <!--<v-toolbar-title>
        <span>The Ansell Rose</span>
        <span class="font-weight-light"> Partnership</span>
    </v-toolbar-title> -->
    <v-img :src="require('@/assets/ARlogo.png')" :contain="true" height="56px"  ></v-img>
    <v-toolbar-items>  
            <v-btn flat @click="$router.push('/')" class="newPink--text hidden-sm-and-down">
                    Home
            </v-btn>
            <v-menu
                bottom
                origin="center center"
                transition="scale-transition"
                
                >
                <template v-slot:activator="{ on }">
                    <v-btn
                    flat
                    v-on="on"
                     class="newPink--text hidden-sm-and-down"
                    >
                    NVQ
                     <v-icon dark right>arrow_drop_down</v-icon>
                    </v-btn>
                </template>

                <v-list dark>
                    <v-list-tile
                    v-for="(item, i) in nvqs"
                    :key="i"
                    router :to="item.route"
                    dark
                     class="newPink--text "
                    >
                    <v-list-tile-title color="black">{{ item.text }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
                </v-menu>
                <v-menu
                bottom
                origin="center center"
                transition="scale-transition"
                >
                <template v-slot:activator="{ on }">
                    <v-btn
                    flat
                    v-on="on"
                     class="newPink--text hidden-sm-and-down"
                    >
                    Courses
                     <v-icon dark right>arrow_drop_down</v-icon>
                    </v-btn>
                </template>

                <v-list dark>
                    <v-list-tile
                    v-for="(item, i) in courses"
                    :key="i"
                    router :to="item.route"
                    dark
                     class="newPink--text"
                    >
                    <v-list-tile-title color="black">{{ item.text }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
                </v-menu>


                <v-menu
                bottom
                origin="center center"
                transition="scale-transition"
                >
                <template v-slot:activator="{ on }">
                    <v-btn
                    flat
                    v-on="on"
                     class="newPink--text hidden-sm-and-down"
                    >
                    Useful Links
                     <v-icon dark right>arrow_drop_down</v-icon>
                    </v-btn>
                </template>

                <v-list dark>
                    <v-list-tile
                    v-for="(item, i) in usefulLinks"
                    :key="i"
                    router :to="item.route"
                    dark
                     class="newPink--text "
                    >
                    <v-list-tile-title color="black">{{ item.text }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
                </v-menu>


            <v-btn flat v-for="link in links" :key="link.text" router :to="link.route"  class="newPink--text hidden-sm-and-down">
                    {{link.text}}
            </v-btn>
    <!-- b00b81 -->
          <v-btn small flat v-if="!userLogedIn" @click="$router.push('/Login')"  class="newPink--text hidden-sm-and-down">Login</v-btn>
          <v-btn small flat v-if="userLogedIn" @click='logoutFromFirebase' class="newPink--text hidden-sm-and-down">Sign Out</v-btn>
          <v-btn small flat v-if="!userLogedIn" @click="$router.push('/Signup')"  class="newPink--text hidden-sm-and-down">Signup</v-btn>
          <v-btn small flat v-if="userLogedIn" @click="$router.push('/MyCourses')"  class="newPink--text hidden-sm-and-down">My Courses</v-btn> 
          <v-btn small flat v-if="userLogedIn" @click="logoutFromFirebase"  class="newPink--text hidden-sm-and-down">Signout</v-btn> 
          <v-btn small fab @click="$router.push('/Basket')"><v-badge right  color="grey darken-4">
            <template v-slot:badge>
                <span>{{inCart}}</span>
            </template>
                <v-icon large>shopping_basket</v-icon>
            </v-badge>
          </v-btn>
        </v-toolbar-items>
    <v-spacer></v-spacer>
        
        
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" :disable-resize-watcher="true" app class="black ">
        <v-layout column align-center>
            <v-flex class="mt-5">
                <p class = "white--text heading mt-1"> The Ansell Rose Partnership </p>
                <v-img  :src="require('@/assets/A.jpg')" ></v-img>
            </v-flex>
            
        </v-layout>
        <v-list>
            <v-list-tile :to="'/'">
                <v-list-tile-action> <v-icon class="newPink--text">label</v-icon></v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title class="white--text">
                                Home
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile :to="'/Nvq'">
                <v-list-tile-action> <v-icon class="newPink--text">label</v-icon></v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title class="white--text">
                                NVQ Level 2-3
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile :to="'/Nvq45'">
                <v-list-tile-action> <v-icon class="newPink--text">label</v-icon></v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title class="white--text">
                                NVQ Level 4-5-6-7
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile :to="'/first_aid'">
                <v-list-tile-action> <v-icon class="newPink--text">label</v-icon></v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title class="white--text">
                                Mental Health First Aid
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile :to="'/CPCS'">
                <v-list-tile-action> <v-icon class="newPink--text">label</v-icon></v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title class="white--text">
                                CPCS
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            
            <v-list-tile :to="'/H&S'">
                <v-list-tile-action> <v-icon class="newPink--text">label</v-icon></v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title class="white--text">
                               H&S Training
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile :to="'/Login'" v-if="!userLogedIn">
                <v-list-tile-action> <v-icon class="newPink--text">label</v-icon></v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title class="white--text">
                               Login
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile :to="'/MyCourses'" v-if="userLogedIn">
                <v-list-tile-action> <v-icon class="newPink--text">label</v-icon></v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title class="white--text">
                               My Courses
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile :to="'/Signup'" v-if="!userLogedIn">
                <v-list-tile-action> <v-icon class="newPink--text">label</v-icon></v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title class="white--text">
                               Signup
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-tile-action>
                    <v-icon class="newPink--text">label</v-icon>
                </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="white--text">
                    {{link.text}}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer> 


    </nav>
</template>

<script>

export default{
    data(){
        return{
            drawer: false,
            test:0,
            nvqs:[
                {text:"NVQ Level 2-3", route:"/Nvq"},
                {text:"NVQ Level 4-5-6-7", route:"/Nvq45"},
            ],
            courses:[
                
                { text: 'CPCS', route:'/CPCS'},
                //{ text: 'Plant Training', route:'/under'},
                { text: 'H&S Training', route:'/H&S'},
                {text:"Mental Health First Aid", route:'/first_aid' },
                {text:"CPC", route:'/under' },
                {text:"Counselling", route:'/under' },
            ],
            usefulLinks:[
                {text:"CSCS Cards", route:'/CSCScards' },
                { text: 'CPCS Cards', route:'/CPCScards'},
                {text: 'HS&E Test', route:'/HSETest'},
                { text: 'Recruitment', route:'/Recruitment'},
                { text: 'Funding', route:'/under'}
            ],
           /* { text: 'Home', route:'/'},*/
            links: [
               
               
              // { text: 'Mental Health First Aid', route:'/first_aid'},
              // { text: 'CPCS (Crane)', route:'/CPCS'},
              // { text: 'Plant Training', route:'/plant'},
              // { text: 'H&S training', route:'/H&S'},
              // { text: 'Cards', route:'/Cards'},
               { text: 'Admin', route:'/Admin'},
               { text: 'Contact Us', route:'/Contact'}
            ],
            snackbar: false,
            
        }
    },
    methods: {
          logoutFromFirebase () {
            this.$store.dispatch('signOutAction')
        },        
    },
     
     computed: {
            inCart() { return this.$store.getters.inCart.length; },
            userLogedIn () {
                return this.$store.getters.user
            }
        },
}
</script>
