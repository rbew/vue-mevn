<template>
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
          <button class="btn btn-danger btn-block">修改</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = process.env.API_URL

export default {
  data() {
    return {
      student: {},
    }
  },
  created() {
    let apiURL = `http://${API_URL}/api/edit-student/${this.$route.params.id}`

    axios.get(apiURL).then((res) => {
      this.student = res.data
    })
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://${API_URL}/api/update-student/${this.$route.params.id}`

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
  },
}
</script>
