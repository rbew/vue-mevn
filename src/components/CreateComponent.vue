<template>
  <div class="row justify-content-center">
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

        <div class="form-group">
          <button class="btn btn-danger btn-block">新建</button>
        </div>
      </form>
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
      const API_URL = process.env.API_URL
      let apiURL = `http://${API_URL}/api/create-student`

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
  },
}
</script>
