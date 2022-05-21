# A student information management system

## 功能实现

- [x] 注册登录
- [x] 仅登录可访问页面 restrict access to page
- [x] 提供数据接口：`http://localhost:4000/api`

## 未完成且想完成

1. 用 sweetalert2 代替 window.confirm
2. 响应式布局（PC + Mobile）
3. 按班级筛选学生
4. 不能在 heyui 组件内部使用
5. 在密码输入框处，放一个眼睛，点击一下可显示密码

```vue
<td>
  <router-link :to="{ name: 'edit', params: { id: student._id } }" class="btn btn-success">修改</router-link>
  <button class="btn btn-danger" @click.prevent="deleteStudent(student._id)">删除</button>
</td>
```

## Frontend

## Backend

`.env`:

```env
USER=""
DATABASE=""
PASSWORD=""
```

## Acknowledgement

1. https://www.npmjs.com/package/vue-axios
