<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>学号</th>
            <th>姓名</th>
            <th>班级</th>
            <th>电话</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in Students" :key="student._id">
            <td>{{ student.sid }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.class }}</td>
            <td>{{ student.phone }}</td>
            <td>
              <router-link
                :to="{ name: 'edit', params: { id: student._id } }"
                class="btn btn-success"
                >修改
              </router-link>
              <button
                class="btn btn-danger"
                @click.prevent="deleteStudent(student._id)"
              >
                删除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = process.env.API_URL

export default {
  data() {
    return {
      Students: [],
    }
  },
  created() {
    let apiURL = `http://${API_URL}/api`
    axios
      .get(apiURL)
      .then((res) => {
        this.Students = res.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    deleteStudent(id) {
      let apiURL = `http://${API_URL}/api/delete-student/${id}`
      let indexOfArrayItem = this.Students.findIndex((i) => i._id === id)

      if (window.confirm('Do you really want to delete?')) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Students.splice(indexOfArrayItem, 1)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
  },
}
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>
