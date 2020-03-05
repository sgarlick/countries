<template>
<v-app>
  <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation >
                  <v-text-field v-model="email" :rules="emailRules" label="E-mail" required ></v-text-field>

                  <v-text-field v-model="password" :rules="passwordRules" label="Password" required
                    :type="passwordShow ? 'text' : 'password'"></v-text-field>
                  <v-spacer />&nbsp;
                  <v-btn color="success" :to="'/register'">Register</v-btn>&nbsp;
                  <v-btn color="error" @click="reset">Reset</v-btn>&nbsp;
                  <v-btn :disabled="!valid" color="success" @click="validate">Login</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

</v-app>
</template>

<script>

export default {
  data: () => ({
    passwordShow: false,
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is Required'
    ]
  }),
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.loginWithFirebase()
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    
    loginWithFirebase () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('signInAction', user);
      //setTimeout(function(){ this.router.push('/results'); }, 300);
      this.$router.push('/results')
    }
  }
}
</script>