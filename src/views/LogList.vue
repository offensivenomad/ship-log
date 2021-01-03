<template>
  <div>
    <h1>Logs for {{ user.user.name }}</h1>
    <LogCard v-for="log in log.logs" :key="log.id" :log="log" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'log-list', query: { page: page - 1 } }"
        rel="prev"
      >
        Prev Page</router-link
      >
      <template v-if="hasNextPage"> | </template>
    </template>
    <router-link
      v-if="hasNextPage"
      :to="{ name: 'log-list', query: { page: page + 1 } }"
      rel="next"
    >
      Next Page</router-link
    >
  </div>
</template>

<script>
import LogCard from '@/components/LogCard.vue'
import { mapState } from 'vuex'
export default {
  components: {
    LogCard
  },
  created() {
    this.perPage = 3 // Setting perPage here and not in data means it won't be reactive.
    // We don't need it to be reactive, and this way our component has access to it.
    this.$store.dispatch('log/fetchLogs', {
      perPage: this.perPage,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    hasNextPage() {
      return this.log.logsTotal > this.page * this.perPage
    },
    ...mapState(['log', 'logsTotal', 'user'])
  }
}
</script>
