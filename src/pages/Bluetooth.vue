<template>
  <v-list>
    <v-list-item-group color="primary">
      <v-list-item
          v-for="(device, i) in devices"
          :key="i"
          @click="connect(device)"
      >
        <v-list-item-icon>
          <v-icon
              :color="(connected && device.id === connected.id) ? 'primary' : 'grey'"
          >bluetooth
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="device.name"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>

    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-list>
</template>

<script>
  import bluetoothSerial from '../../src-cordova/node_modules/cordova-plugin-bluetooth-serial/www/bluetoothSerial'

  export default {
    data() {
      return {
        devices: [],
        connected: null,
        loading: false,
      }
    },
    mounted() {
      document.addEventListener("deviceready", () => {
        bluetoothSerial.isEnabled(
          () => {
            bluetoothSerial.list(devices => {
              this.devices = devices
            })
          },
          () => {
            alert('Bluetooth is not enabled. Please turn on bluetooth first.')
          }
        )
      })
    },
    methods: {
      async connect(device) {
        this.loading = true

        await bluetoothSerial.isConnected(
          async () => {
            await bluetoothSerial.disconnect(this.connected.id)
            this.connected = null
          }
        )

        bluetoothSerial.connect(
          device.id,
          () => {
            this.connected = device
            this.loading = false
          },
          () => {
            this.loading = false
            alert('Error connecting to selected device.')
          })
      }
    }
  }
</script>
