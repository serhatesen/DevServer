<template>
  <v-app-bar
  dense
  app
  dark
  color="blue darken-4"
  >
    <v-app-bar-nav-icon/>
    <v-spacer/>
    <span>Dev Game <Icon icon="emojione-v1:video-game" /></span>
  </v-app-bar>
</template>
import { Icon } from '@iconify/vue2';
<script>
export default {
  name: "navbar-component",
  components: {
    // eslint-disable-next-line no-undef
    Icon,
  },
}
</script>

<style scoped>

</style>