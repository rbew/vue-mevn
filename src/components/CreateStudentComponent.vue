<template>
  <div>
    <nav
      class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <a class="navbar-brand float-left" href="/">学生信息管理系统</a>
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

    <div class="row justify-content-center mt-3 ">
      <div class="col-md-6">
        <!-- Contents -->
        <h3 class="text-center">添加学生信息</h3>
        <form @submit.prevent="handleSubmitForm">
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

          <div class="form-group mt-3 text-center">
            <button class="btn btn-danger btn-block">新建</button>
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
      student: {
        sid: '',
        name: '',
        class: '',
        phone: '',
      },
    }
  },
  methods: {
    handleSubmitForm() {
      let apiURL = `http://localhost:4000/api/create-student`

      axios
        .post(apiURL, this.student)
        .then(() => {
          this.$router.push('/view')
          this.student = {
            sid: '',
            name: '',
            class: '',
            phone: '',
          }
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
