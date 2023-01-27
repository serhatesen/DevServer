<template>
  <div class="register">
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
        <v-col cols="16">
          <v-card
          class="kart mx-auto mt-16 ml-16 rounded-xl pa-9 animate__animated animate__jackInTheBox"
          color="indigo lighten-5"
          width="200vh"
          elevation="10"
          >
           <v-row>
             <v-col cols="4">
                <v-img
                    class="mt-10"
                    width="200px"
                    height="200px"
                    :src="$store.state.register.logo"
                />
             </v-col>
             <v-col cols="8">
              <v-text-field
                  dense
                  autofocus
                  label="Kullanıcı Adını Oluştur"
                  color="blue darken-2"
                  style="max-width: 90%"
                  class="mx-auto font-weight-bold"
                  v-model="kullanıcı"
                  />
                <v-text-field
                    dense
                    label="E-mail Oluştur"
                    color="blue darken-2"
                    style="max-width: 90%"
                    type="mail"
                    class="mx-auto font-weight-bold"
                    v-model="email"
                />
                <v-text-field
                    dense
                    label="Parola Gir"
                    color="blue darken-2"
                    style="max-width: 90%"
                    type="password"
                    class="mx-auto font-weight-bold"
                    v-model="password"
                />
                <v-text-field
                    dense
                    label="Parolayı Yeniden Gir"
                    color="blue darken-2"
                    style="max-width: 90%"
                    type="password"
                    class="mx-auto font-weight-bold"
                    v-model="password2"
                />

                <v-card-actions>
                  <v-btn
                  class="back animate__animated animate__fadeInDown text-right text--white"
                  color="red accent-4"
                  elevation="3"
                  style="color: aliceblue"
                  @click="back()"
                  >
                    Geri Dön
                    <Icon icon="mdi:arrow-left" class="v-icon v-icon--right" />
                  </v-btn>
                  <v-spacer/>
                  <v-btn
                      class="registerbtn animate__animated animate__fadeInDown text--white text-center"
                      color="red accent-4"
                      elevation="3"
                      style="color: aliceblue"
                      @click="register()"

                  >
                    Kayıt Ol
                    <Icon icon="mdi:register" class="v-icon v-icon--right" />
                  </v-btn>
                  <v-spacer/>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <template>
      <div>
        <v-dialog class="backdrop" v-model="dialogVisible" max-width="500px">
          <v-card
              class="mx-auto rounded-xl pa-9"
              color="amber lighten-5"
              width="200vh"
              elevation="10"
          >
            <v-card-title
                class="headline font-weight-bold text-center text--primary text--darken-2"
                primary-title
            >
              Kayıt Başarılı
            </v-card-title>
            <v-card-text
                class="text-center text--primary text--darken-2"
            >
              Kayıt işleminiz başarıyla gerçekleşti. Lütfen mail adresinizi kontrol ediniz.! <br>
              Giriş yapmak için lütfen giriş sayfasına yönlendiriliyorsunuz.
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn color="blue darken-1" text @click="dialogVisible = false">Kapat</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
  name: "registerView",
  components:{
    Icon
  },
  data: () => ({
    snackbar: false,
    snackbarText: "",
    snackbarColor: "primary",
    dialogVisible: false,
    kullanici: null,
    email: null,
    password: null,
  }),
  methods:{
    back(){
      this.$router.push('/');
      },
    register() {
      if (this.password !== this.password2) {
        this.snackbarText = "Parolalar Eşleşmiyor"
        this.snackbar = true
        this.snackbarColor = "orange"
      }
      else if (!this.email.includes('@')){
        this.snackbarText = "Geçersiz E-mail"
        this.snackbar = true
        this.snackbarColor = "red"
      }
      else if (this.$store.state.users.find(user => user.kullanici === this.kullanici)) {
        this.snackbarText = "Bu Kullanıcı Adı Zaten Alınmış"
        this.snackbar = true
        this.snackbarColor = "red"
      }
      else if (this.$store.state.users.find(users => users.email === this.email)) {
        this.snackbarText = 'Bu e-posta zaten mevcut! Lütfen farklı bir tane seçin.'
        this.snackbar = true
        this.snackbarColor = "red"
      }
      else if(this.password.length < 6){
        this.snackbarText = "Parola En Az 6 Karakter Olmalıdır"
        this.snackbar = true
        this.snackbarColor = "red"}
      else if (this.kullanıcı === null || this.email === null || this.password === null) {
        this.snackbarText="Lütfen tüm alanları doldurunuz."
        this.snackbar=true
        this.snackbarColor="orange"
      }
      else {
        this.snackbarText = "Kayıt Başarılı"
        this.snackbar = true
        this.snackbarColor = "green"
        this.$store.state.users.push({kullanici: this.kullanici, email: this.email, password: this.password})
        setTimeout(() =>{
          this.dialogVisible= true
        } , 500)
        setTimeout(() => {
          this.$router.push('/')
        }, 5000)
      }
    },
  },
}
</script>

<style scoped>
.kart{
  animation-delay: 0.2s;
}
.registerbtn{
  animation-delay: 1.5s;
}
.back {
  animation-delay: 1.5s;
}
.backdrop{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>