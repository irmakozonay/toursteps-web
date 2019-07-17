<template>
  <div id="signin">
    <p>SIGN IN</p>
    <div class="signin-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Mail</label>
          <input type="email" id="email" v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password">
        </div>
        <div class="submit">
          <button type="submit">SIGN IN</button>
        </div>
        <br>
        <button type="submit" @click.prevent="openSignup">GO TO SIGN UP</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('auth', [
      'signin'
    ]),
    onSubmit () {
      const formData = {
        email: this.email,
        password: this.password
      }
      this.signin(formData)
    },
    openSignup () {
      this.$router.push('/create/info')
    }
  }
}
</script>
