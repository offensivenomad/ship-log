<template>
  <div>
    <div class="log-header">
      <span class="eyebrow">@{{ log.time }} on {{ log.date }}</span>
      <h1 class="title">{{ log.title }}</h1>
      <h5>Organized by {{ log.organizer ? log.organizer.name : '' }}</h5>
      <h5>Category: {{ log.category }}</h5>
    </div>

    <BaseIcon name="map"><h2>Location</h2></BaseIcon>

    <address>{{ log.location }}</address>

    <h2>Log details</h2>
    <p>{{ log.description }}</p>

    <h2>Attendees
      <span class="badge -fill-gradient">{{ log.attendees ? log.attendees.length : 0 }}</span>
    </h2>
    <ul class="list-group">
      <li v-for="(attendee, index) in log.attendees" :key="index" class="list-item">
        <b>{{ attendee.name }}</b>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: ['id'],
  created() {
    this.fetchLog(this.id)
  },
  computed: mapState({
    log: state => state.log.log
  }),
  methods: mapActions('log', ['fetchLog'])
}
</script>
<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.log-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>