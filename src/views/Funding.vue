<template>
  <v-container>
    <v-layout row wrap>
      <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    
  >
    <v-carousel-item
    >
      <v-sheet
        :color="colors[2]"
        height="100%"
      >
        <v-layout
          align-center
          fill-height
          justify-center
        >
          <div class="display-3">{{ slide }} Slide</div>
        </v-layout>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

    </v-layout>
    <v-layout row wrap>
      <div class="pt-5 ">
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </h2>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4'
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth'
        ]
      }
    }
  }
</script>

<style>

</style>
