import axios from 'axios'
import { apiKey } from './apiKey'
const lat = -33.85
const lng = 151.63
const units = 'distance:km'
let dataURI = {
  location: `/search.json?lat=${lat}&lng=${lng}&units=${units}`,
  weatherConditions: `/weather.json?observational=-true`
}

const apiClient = axios.create({
  baseURL: `https://api.willyweather.com.au/v2/` + apiKey,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getWeatherConditions(id) {
    return apiClient.get('/locations/' + id + dataURI.weatherConditions)
  },

  getLocation(lat, lng, units) {
    return apiClient.get(
      `/search.json?lat=` + lat + `&lng=` + lng + `&units=` + units
    )
  }
}
