<template>
  <v-app>
    <router-view/>

    <v-bottom-navigation
        absolute
        grow
        color="primary"
    >
      <v-btn :to="{ name: 'Control'}" height="56">
        <span>Control</span>
        <v-icon>directions</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'Bluetooth'}" height="56">
        <span>Devices</span>
        <v-icon>bluetooth</v-icon>
      </v-btn>

      <!-- <v-btn :to="{ name: 'Settings'}" height="56">
        <span>Settings</span>
        <v-icon>settings</v-icon>
      </v-btn> -->
    </v-bottom-navigation>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
  }
</script>
