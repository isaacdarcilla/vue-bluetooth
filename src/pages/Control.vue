<template>
  <v-container fill-height>
    <v-container>
      <v-row>
        <v-col></v-col>
        <v-col class="text-center">
          <v-btn fab x-large @click="forward">
            <v-text>90⁰</v-text>
          </v-btn>
        </v-col>
        <v-col></v-col>
      </v-row>

      <v-row>
        <v-col class="text-right" @click="left">
          <v-btn fab x-large>
            <v-text>180⁰</v-text>
          </v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn fab x-large @click="stop">
            <v-icon>pause</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn fab x-large class="text-left" @click="right">
            <v-text>45⁰</v-text>
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col></v-col>
        <v-col class="text-center">
          <v-btn fab x-large @click="back">
            <v-text>0⁰</v-text>
          </v-btn>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  import bluetoothSerial from '../../src-cordova/node_modules/cordova-plugin-bluetooth-serial/www/bluetoothSerial'

  export default {
    methods: {
      forward() {
        bluetoothSerial.write('90;')
      },
      back() {
        bluetoothSerial.write('0;')
      },
      left() {
        bluetoothSerial.write('180;')
      },
      right() {
        bluetoothSerial.write('45;')
      },
      stop() {
        bluetoothSerial.write('s;')
      }
    }
  }
</script>
