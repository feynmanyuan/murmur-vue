<template>
  <div>
    <el-container class="main">
      <el-aside :width="tabWidth+'px'">
        <div>
          <div class="isClossTab" @click="isClossTabFun">
            <i :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"></i>
          </div>
          <el-menu :class="'menu'"
                   default-active="1-1"
                   class="el-menu-vertical-demo"
                   @open="handleOpen"
                   @close="handleClose"
                   :collapse="isCollapse"
                   background-color="#FFFFFF"
                   text-color="#000"
                   router="router"
                   active-text-color="#000">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">Content Manage</span>
              </template>
              <el-menu-item index="1-1" :route="{ name: 'profile-mine' }">Profile</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header class="main-header">
          <el-dropdown>
            <span class="el-dropdown-link">
                <img src="/static/imgs/avatar.jpg" alt="">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Logout</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <div>
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
  * {
    padding: 0;
    margin: 0;
  }

</style>
<style scoped lang="scss">
  $header-height: 60px;
  $background-color: #409eff;
  $color: #FFF;

  .main {
    height: 100vh;
    min-width: 800px;
    min-height: 600px;
    overflow: hidden;

    aside {
      overflow: visible;
      height: 100%;
      background-color: #FFF;
      color: $color;

      .isClossTab {
        width: 100%;
        height: $header-height;
        cursor: pointer;
        font-size: 25px;
        text-align: center;
        line-height: $header-height;
        font-weight: bold;
        border-right: 1px solid #3D93EB;
        box-sizing: border-box;
        background-color: $background-color;
      }
      .menu {
        width: 100%;
        border-right: 0;

      }

    }

    .main-header {
      background-color: $background-color;
      color: $color;

      .el-dropdown {
        cursor: pointer;
        float: right;
      }
      .el-dropdown-link {

        img {
          $imgMargin: (($header-height - 50)/2);
          display: inline-block;
          width: 50px;
          height: 50px;
          border-radius: 25px;
          background-color: #FFF;
          margin-top: $imgMargin;
        }
      }
    }

    .crumbs {
      margin-bottom: 20px;
    }

    .main-footer {
      text-align: center;
      background-color: $background-color;
      color: $color;
      line-height: 50px;
    }

  }

</style>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      tabWidth: 200,
      test1: 1,
      intelval: null
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    isClossTabFun () {
      clearInterval(this.intelval)
      if (!this.isCollapse) {
        this.intelval = setInterval(() => {
          if (this.tabWidth <= 64) {
            clearInterval(this.intelval)
          }
          this.tabWidth -= 1
        }, 1)
      } else {
        this.tabWidth = 200
      }
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
