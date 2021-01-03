<template>
  <router-link class="log-link" :to="{ name: 'log-show', params: { id: log.id } }">
    <div class="log-card -shadow">
      <span class="eyebrow">@{{ log.time }} on {{ log.date }}</span>
      <h4 class="title">{{ log.title }}</h4>
      <BaseIcon name="users">{{ log.attendees.length }} attending</BaseIcon>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    log: Object
  }
}
</script>

<style scoped>
.log-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.log-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.log-card > .title {
  margin: 0;
}
.log-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>