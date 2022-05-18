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

    <div class="container mt-5 ms-6">
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
      <p>
        <Button color="blue" icon="h-icon-plus" @click="add(datas)"
          >Add a line</Button
        >
      </p>
      <Table :datas="datas" stripe checkbox>
        <TableItem title="学号" prop="$index"></TableItem>
        <TableItem title="姓名" prop="$serial"></TableItem>
        <TableItem title="班级" prop="name" sort="auto"></TableItem>
        <TableItem title="电话" prop="age"></TableItem>
        <TableItem title="操作">
          <template slot-scope="{ data }">
            {{ data.name }}: Custom display
          </template>
        </TableItem>
        <div slot="empty">Custom reminder: no data at this time</div>
      </Table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      Students: [],
      datas: [
        { id: 5, name: 'test 5', age: 12, address: 'Shanghai' },
        { id: 6, name: 'test 6', age: 13, address: 'Shanghai' },
        { id: 7, name: 'test 7', age: 14, address: 'Shanghai' },
        { id: 5, name: 'test 5', age: 15, address: 'Shanghai' },
        { id: 6, name: 'test 6', age: 16, address: 'Shanghai' },
        { id: 7, name: 'test 7', age: 17, address: 'Shanghai' }
      ]
    }
  },
  created() {
    let apiURL = `http://localhost:4000/api`
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
      let apiURL = `http://localhost:4000/api/delete-student/${id}`
      let indexOfArrayItem = this.Students.findIndex((i) => i._id === id)

      if (window.confirm('确认删除？')) {
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
    logUserOut() {
      localStorage.removeItem('jwt')
      this.$router.push('/')
    },
    add(datas) {
      datas.push({ id: 7, name: 'Add to', age: 12, address: 'Then added' });
    }
  },
}
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>
