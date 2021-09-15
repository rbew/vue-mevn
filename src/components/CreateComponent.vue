<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Contents -->
      <h3 class="text-center">Create Student</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Name</label>
          <input
            v-model="student.name"
            type="text"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input
            v-model="student.email"
            type="email"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input
            v-model="student.phone"
            type="text"
            class="form-control"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Create</button>
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
        name: '',
        email: '',
        phone: '',
      },
    }
  },
  methods: {
    handleSubmitForm() {
      let apiURL = 'http://localhost:4000/api/create-student'

      axios
        .post(apiURL, this.student)
        .then(() => {
          this.$router.push('/view')
          this.student = {
            name: '',
            email: '',
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
