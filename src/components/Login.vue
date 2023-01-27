<template>
  <div class="home">
    <v-container>
      <v-snackbar
          dark
          top
          right
          :color="snackbarColor"
          v-model="snackbar"
      >
        {{ snackbarText }}
        <v-btn
            color="blue darken-4"
            text
            @click="snackbar = false"
            dark
        >
          Kapat
        </v-btn>
      </v-snackbar>
      <v-row>
        <v-col cols="15">
          <v-card
              class="kart mt-12 mx-auto rounded-xl pa-8 animate__animated animate__jackInTheBox"
              color="blue lighten-5"
              elevation="7"
              style="max-width: 100%">
            <v-text-field
                dense
                autofocus
                color="blue darken-2"
                label="Kullanıcı Adı"
                style="max-width: 30%"
                class="mx-auto font-weight-bold"
                v-model="kullanici"></v-text-field>
            <v-spacer/>
            <v-text-field
                dense
                color="blue darken-2"
                label="Şifre"
                style="max-width: 30%"
                type="password"
                class="mx-auto mt-16"
                v-model="password"></v-text-field>
            <v-spacer/>
            <v-card-actions>
                <v-btn
                    class="register animate__animated animate__fadeInDown text-right text--white"
                    color="red accent-4"
                    elevation="3"
                    style="color: aliceblue"
                    @click="registergo()"
                >
                  Kayıt Ol
                  <Icon icon="mdi:register" class="v-icon v-icon--right" />
                </v-btn>
                <v-spacer/>
                <v-btn
                    class="login animate__animated animate__fadeInDown text-right text--white"
                    color="red accent-4"
                    elevation="3"
                    style="color: aliceblue"
                    @click="logingo()"

                >
                  Login
                  <Icon icon="pixelarticons:login" class="v-icon v-icon--right" />
                </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-img
            class="logo animate__animated animate__bounceIn d-inline-block"
            width="500px"
            height="525px"
            :src="$store.state.login.logo"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
import 'animate.css';
  export default {
    name: 'loginView',
    data: () => ({
      snackbar: false,
      snackbarText: "",
      snackbarColor: "primary",
      kullanici: null,
      password: null,
    }),

    components: {
      Icon,
    },
    methods:{
      registergo(){
        this.$router.push('/register')
      },
      logingo(){
        this.$router.push('/home')
      }
    }
  }
</script>

<style scoped>
.kart{
  animation-delay: 0.5s;
}
.register{
  animation-delay: 1.5s;
}
.login{
  animation-delay: 1.5s;
}
.logo{
  animation-delay: 1.5s;
}
.home{
  background-image:url("@/assets/background.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

}
</style>
