<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>
              <h1 class="display-1">Welcome to Vuetify</h1>
            </v-card-title>
            <v-card-text>
              <h2 class="headline font-weight-light">For help and collaboration with other Vuetify developers,
                <br>please join the official Discord server.</h2>
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                color="indigo"
                text
                href="https://discord.gg/M9yYKpN"
                target="_blank"
              >
                Discord
              </v-btn>
              <v-btn
                color="indigo"
                text
                href=""
                >GitHub</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
//import navbar from "@/components/login/user/navbar.vue";
export default {
  name: "userInterfaceView",
  components: {
    //navbar
  },
}
</script>

<style scoped>

</style>