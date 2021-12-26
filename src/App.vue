<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-aside width="0">Aside</el-aside>
      <el-container>
        <el-header>
          <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left" @click="back">后退</el-button>
            <el-button type="primary" @click="pre">
              前进
              <i class="el-icon-arrow-right el-icon--right"></i>
            </el-button>
          </el-button-group>
        </el-header>
        <el-main>
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    back() {
      this.$router.go(-1)
    },
    pre() {
      this.$router.go(1)
    },
  },
}
</script>

<style scoped></style>
