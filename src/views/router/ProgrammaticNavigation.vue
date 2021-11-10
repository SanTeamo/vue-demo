<template>
  <div>
    <h2>编程式的导航</h2>
    <div>
      <button @click="push">push</button>
      <table>
        <tr>
          <td>声明式</td>
          <td>编程式</td>
        </tr>
        <tr>
          <td>&lt;router-link :to="..."&gt;</td>
          <td>router.push(...)</td>
        </tr>
      </table>

      <pre>
          // 字符串
          router.push('home')

          // 对象
          router.push({ path: 'home' })

          // 命名的路由
          router.push({ name: 'user', params: { userId: '123' }})

          // 带查询参数，变成 /register?plan=private
          router.push({ path: 'register', query: { plan: 'private' }})
      </pre>
      <p>
        注意：如果提供了 path，params 会被忽略，上述例子中的 query
        并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path：
      </p>
      <pre>
          const userId = '123'
          router.push({ name: 'user', params: { userId }}) // -> /user/123
          router.push({ path: `/user/${userId}` }) // -> /user/123
          // 这里的 params 不生效
          router.push({ path: '/user', params: { userId }}) // -> /user
      </pre>
    </div>
    <hr />
    <div>
      <button @click="replace">replace</button>
      <table>
        <tr>
          <td>声明式</td>
          <td>编程式</td>
        </tr>
        <tr>
          <td>&lt;router-link :to="..." replace&gt;</td>
          <td>router.replace(...)</td>
        </tr>
      </table>
    </div>
    <hr />
    <div>
      <button @click="goBack">back</button>
      <button @click="goPrev">prev</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basic',
  methods: {
    push() {
      this.$router.push('/router/nested/Bob')
    },
    replace() {
      this.$router.replace('/router/nested/Bob')
    },
    goBack() {
      this.$router.go(-1)
    },
    goPrev() {
      this.$router.go(1)
    },
  },
}
</script>

<style lang="css" scoped></style>
