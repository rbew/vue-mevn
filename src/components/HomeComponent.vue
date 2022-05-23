<template>
    <div>
        <nav
            class="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between"
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

        <section class="container mt-5">
            <p>欢迎进入主页面</p>
            <p>
                在这里，你可以<router-link class="link-primary" to="/view">
                    查看所有学生信息 </router-link
                >，并修改。
            </p>
            <p>当前登陆用户：</p>
            <div class="row">
                <div class="col-md-12">
                    <ul class="list-group">
                        <li class="list-group-item">
                            学号/工号：{{ user.userid }}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import VueJwtDecode from 'vue-jwt-decode'

export default {
    data() {
        return {
            user: {},
        }
    },
    methods: {
        getUserDetails() {
            let token = localStorage.getItem('jwt')
            let decoded = VueJwtDecode.decode(token)
            this.user = decoded
        },
        logUserOut() {
            localStorage.removeItem('jwt')
            this.$router.push('/')
        },
    },

    created() {
        this.getUserDetails()
    },
}
</script>
