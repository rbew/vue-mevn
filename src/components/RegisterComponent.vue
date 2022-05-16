<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top: 70px; height: auto; padding-top: 100px !important"
          @submit.prevent="registerUser"
        >
          <label for="userid">工号/学号</label>
          <input
            type="text"
            id="userid"
            class="form-control mb-5"
            placeholder="工号/学号"
            v-model="register.userid"
            required
          />

          <!-- Password -->
          <label for="password">密码</label>
          <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Password"
            v-model="register.password"
          />
          <p>
            Already have an account??<router-link to="/"
              >click here</router-link
            >

            <!-- Sign in button -->
            <center>
              <button class="btn btn-primary btn-block w-75 my-4" type="submit">
                Sign in
              </button>
            </center>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  data() {
    return {
      register: {
        userid: '',
        password: '',
      },
    }
  },
  methods: {
    async registerUser() {
      try {
        let response = await this.axios.post('http://localhost:4000/user/register', this.register)
        console.log(response)
        let token = response.data.token
        if (token) {
          localStorage.setItem('jwt', token)
          this.$router.push('/')
          swal('Success', 'Registration Was successful', 'success')
        } else {
          swal('Error', 'Something Went Wrong', 'Error')
        }
      } catch (err) {
        let error = err.response
        if (error.status == 409) {
          swal('Error', error.data.message, 'error')
        } else {
          swal('Error', error.data.err.message, 'error')
        }
      }
    },
  },
}
</script>
