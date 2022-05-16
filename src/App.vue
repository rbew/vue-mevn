<template>
  <div>
    <!-- Nav Bar -->
    <nav
      class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
      <a class="navbar-brand float-left" href="/">学生信息管理系统</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/create">添加学生</router-link>
          </li>
          &nbsp;&nbsp;&nbsp;
          <li class="nav-item">
            <router-link class="nav-link" to="/view">
              查看学生信息
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
