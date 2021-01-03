<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container fluid>
        <router-view :key="$route.fullPath" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import { Plugins } from '@capacitor/core'
const { Device } = Plugins

export default {
  name: 'App',

  components: {
    NavBar
  },

  data() {
    return {
      info: null
    }
  },

  methods: {
    async getDeviceInfo() {
      this.info = await Device.getInfo()
    }
  }
}
</script>
