<template>
<v-app id="register">
  <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark >
                <v-toolbar-title>Registration form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                  <v-text-field v-model="password" :rules="passwordRules" label="Password" required 
                    :type="passwordShow ? 'text' : 'password'"></v-text-field>

                  <v-text-field v-model="confirmPassword" label="confirm Password" :rules="passwordRules" required
                    :type="confirmPasswordShow ? 'text' : 'password'"></v-text-field>

                  <v-spacer />
                  <v-btn color="error" @click="reset">Reset Form</v-btn>&nbsp;
                  <v-btn :disabled="!valid" color="success" @click="validate">Register</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</v-app>
</template>

<script>
export default {
  
  data: () => ({
    passwordShow: false,
    confirmPasswordShow: false,
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    confirmPassword: '',
    passwordRules: [
      v => !!v || 'Password and Confirm password Required'
    ]
  }),
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.registerWithFirebase()
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    registerWithFirebase () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('signUpAction', user)
      this.$router.push('/results')
    }
  }
}
</script>