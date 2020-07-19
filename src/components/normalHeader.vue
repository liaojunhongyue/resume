<template>
  <div class="header">
    <header>
      <div class="headerContent">
        <div class="back" @click="goHistory()">
          <img src="../assets/images/back.png" />
        </div>
        <p class="title">{{ title }}</p>
        <div class="navigation">
          <img src="../assets/images/navigation.png" />
        </div>
      </div>
      <div class="headerBlock"></div>
    </header>
    <div class="navMask"></div>
    <nav class="nav">
      <router-link class="navLink" to="/basic">基本信息</router-link>
      <router-link class="navLink" to="/skill">掌握技能</router-link>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: function () {
        return ''
      }
    }
  },
  methods: {
    goHistory () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
header .headerContent {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12vw;
  background-color: #7aa0f6;
}
header .back {
  position: absolute;
  left: 0;
  top: 0;
  width: 12vw;
  height: 12vw;
  text-align: center;
}
header .back img {
  margin-top: 2vw;
  height: 8vw;
}
header .title {
  margin: 0;
  height: 12vw;
  line-height: 12vw;
  text-align: center;
  color: #ffffff;
}
header .navigation {
  position: absolute;
  right: 0;
  top: 0;
  width: 12vw;
  height: 12vw;
  text-align: center;
}
header .navigation img {
  margin-top: 2vw;
  height: 8vw;
}
header .headerBlock {
  width: 100%;
  height: 12vw;
}
.navMask {
  position: fixed;
  top: 12vw;
  left: 0;
  width: 100%;
  height: calc(100vh - 12vw);
  background-color: #000;
  opacity: 0.7;
  z-index: 1;
}
.nav {
  position: fixed;
  top: 12vw;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 2;
}
.nav .navLink {
  display: block;
  width: 100%;
  height: 12vw;
  line-height: 12vw;
  color: #666666;
  text-align: center;
  border-bottom: 1px solid #f9f9f9;
}
</style>
