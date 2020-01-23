<template>
  <v-container fill-height>
    <v-container>
      <v-row>
        <v-col>
          <h2 class="mb-5">Car back lights</h2>

          <v-switch
              v-model="backLights"
              :label="switchLabel"
              inset
              @click="changeBackLights"
          ></v-switch>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h2 class="mb-5">Car back lights</h2>

          <v-slider
              v-model="frontLights"
              prepend-icon="highlight"
              @change="changeFrontLights"
          ></v-slider>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  import bluetoothSerial from '../../src-cordova/node_modules/cordova-plugin-bluetooth-serial/www/bluetoothSerial'

  export default {
    data() {
      return {
        backLights: true,
        frontLights: 30,
      }
    },
    computed: {
      switchLabel() {
        return 'Car back lights ' + (this.backLights ? 'on' : 'off')
      }
    },
    methods: {
      changeBackLights() {
        bluetoothSerial.write(this.backLights ? 'o;' : 'i;')
      },
      changeFrontLights() {
        let message = {
          'name': 'frontLights',
          'value': this.frontLights,
        };

        bluetoothSerial.write(JSON.stringify(message) + ';')
      }
    }
  }
</script>
