<template>
    <div>
        <nav
            class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
        >
            <div class="container">
                <a class="navbar-brand float-left" href="/home"
                    >学生信息管理系统</a
                >
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

        <div class="row justify-content-center mt-3">
            <div class="col-md-6">
                <!-- Contents -->
                <h3 class="text-center">添加学生信息</h3>
                <form @submit.prevent="handleSubmitForm">
                    <div class="form-group">
                        <label>学号</label>
                        <input
                            @keypress="onlyNumber"
                            v-model="student.sid"
                            type="text"
                            class="form-control"
                            minlength="10"
                            maxlength="10"
                            placeholder="输入10位数字"
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
                            @keypress="onlyNumber"
                            type="text"
                            class="form-control"
                            required
                            minlength="11"
                            maxlength="11"
                            placeholder="输入11位数字"
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
                            minlength="18"
                            maxlength="18"
                            required
                            placeholder="输入18位数字或字母（x）"
                        />
                    </div>

                    <div class="form-group mt-3 text-center">
                        <button class="btn btn-danger btn-block" type="submit">
                            新建
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    data() {
        return {
            student: {
                sid: '',
                name: '',
                class: '',
                phone: '',
                addr: '',
                id_card: '',
            },
        }
    },
    methods: {
        onlyNumber($event) {
            // https://stackoverflow.com/a/52456430/12539782
            let keyCode = $event.keyCode ? $event.keyCode : $event.which
            if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
                // 46 is dot
                $event.preventDefault()
            }
        },
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
                        addr: '',
                        id_card: '',
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
            Swal.fire({
                title: '信息创建成功',
                icon: 'success',
            })
        },
        logUserOut() {
            localStorage.removeItem('jwt')
            this.$router.push('/')
        },
    },
}
</script>
