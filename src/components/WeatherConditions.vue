<template>
  <v-container>
    <v-row justify="center">
      <v-col class="mb-5" cols="12">
        <p>{{ location.id }}</p>
        <p v-for="report in reports" :key="report" :report="report">
          {{ report }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WeatherService from '../services/WeatherService'

export default {
  name: 'HelloWorld',
  data() {
    return {
      reports: [],
      location: []
    }
  },
  created() {
    WeatherService.getWillyWeatherLocationId()
      .then(response => {
        return (this.location = response.data.json)
      })
      .catch(error => {
        console.error('There was an Error: ' + error.response)
      })
  },
  computed: {
    getWeather: WeatherService.getWillyWeather(this.location)
      .then(response => {
        console.log(JSON.stringify(response.data))
        return (this.reports = response.data)
      })
      .catch(error => {
        console.error('There was an Error: ' + error.response)
      })
  }
}
</script>
