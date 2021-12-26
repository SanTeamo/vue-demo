<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-aside width="20%">
        <side-menu></side-menu>
      </el-aside>
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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SideMenu from '@/router/page/side-menu.vue'

@Component({
  name: 'App',
  components: {
    SideMenu,
  },
})
export default class App extends Vue {
  back(): void {
    this.$router.go(-1)
  }
  pre(): void {
    this.$router.go(1)
  }
}
</script>

<style scoped></style>
