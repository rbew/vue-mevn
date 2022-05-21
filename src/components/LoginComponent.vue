<template>
  <div>
    <nav
      class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <a class="navbar-brand float-left" href="/">学生信息管理系统</a>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
          <form
            class="text-center border border-primary p-5"
            style="
              margin-top: 70px;
              height: auto;
              padding-top: 100px !important;
            "
            @submit.prevent="loginUser"
          >
            <label for="userid">工号/学号</label>
            <input
              type="text"
              id="userid"
              class="form-control mb-5"
              placeholder="User Id"
              v-model="login.userid"
              required
            />

            <!-- Password -->
            <label for="password">密码</label>

            <input
              type="password"
              id="password"
              class="form-control mb-5"
              placeholder="Password"
              v-model="login.password"
              autocomplete="on"
              required
            />

            <p>
              还没有账户吗？<router-link to="/register" class="link-primary">点这里注册</router-link>
            </p>

            <!-- Sign in button -->
            <center>
              <button class="btn btn-primary btn-block w-75 my-4" type="submit">
                登录
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      login: {
        userid: '',
        password: '',
      },
    }
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.axios.post(
          'http://localhost:4000/api/login',
          this.login
        )
        let token = response.data.token
        localStorage.setItem('jwt', token)
        if (token) {
          Swal.fire({
            title: '登录成功',
            icon: 'success',
          })
          this.$router.push('/home')
        }
      } catch (err) {
        Swal.fire({
          title: '当前账户未注册',
          icon: 'error',
        })
        console.log(err.response)
      }
    },
  },
}
</script>
