<template>
  <div>
    <nav
      class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <a class="navbar-brand float-left" href="/home">学生信息管理系统</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/create"
              >添加学生</router-link
            >
          </li>
          &nbsp;&nbsp;&nbsp;
          <li class="nav-item">
            <router-link class="nav-link" to="/view">
              查看学生信息
            </router-link>
          </li>
          &nbsp;&nbsp;&nbsp;
          <li class="nav-item">
            <a class="nav-link" @click="logUserOut">登出</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">修改学生信息</h3>
        <form @submit.prevent="handleUpdateForm">
          <div class="form-group">
            <label>学号</label>
            <input
              v-model="student.sid"
              type="text"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label>姓名</label>
            <input
              v-model="student.name"
              type="text"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label>班级</label>
            <input
              v-model="student.class"
              type="text"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label>电话</label>
            <input
              v-model="student.phone"
              type="text"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label>生源地</label>
            <input
              v-model="student.addr"
              type="text"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label>身份证号</label>
            <input
              v-model="student.id_card"
              type="text"
              class="form-control"
              required
            />
          </div>

          <div class="form-group mt-3 text-center">
            <button class="btn btn-danger btn-block">修改</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      student: {},
    }
  },
  created() {
    let apiURL = `http://localhost:4000/api/edit-student/${this.$route.params.id}`

    axios.get(apiURL).then((res) => {
      this.student = res.data
    })
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-student/${this.$route.params.id}`

      axios
        .put(apiURL, this.student) // 总是无法更新数据，最后在这里找到错误 本应该是 put 但写成 post
        .then((res) => {
          console.log(res)
          this.$router.push('/view')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    logUserOut() {
      localStorage.removeItem('jwt')
      this.$router.push('/')
    },
  },
}
</script>
