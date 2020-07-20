<template>
  <div class="header">
    <header>
      <div class="headerContent">
        <div class="back" @click="goHistory()">
          <img src="../assets/images/back.png" />
        </div>
        <p class="title">{{ title }}</p>
        <div class="navigation" @click="showMenu()">
          <img src="../assets/images/navigation.png" />
        </div>
      </div>
      <div class="headerBlock"></div>
    </header>
    <div class="navMask" :class="isShowMenu ? 'navMaskAnimate' : ''"></div>
    <!-- <nav class="nav">
      <router-link v-for="item in navData" :key="item.title" class="navLink" :to="item.link">{{item.title}}</router-link>
    </nav> -->
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
  data () {
    return {
      currentRouter: '',
      isShowMenu: false,
      navData: [
        {
          title: '基本信息',
          link: '/basic'
        },
        {
          title: '掌握技能',
          link: '/skill'
        },
        {
          title: '教育经历',
          link: '/education'
        },
        {
          title: '项目&作品',
          link: '/works'
        },
        {
          title: '工作经历',
          link: '/job'
        }
      ]
    }
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log(val)
      },
      immediate: true
    }
  },
  methods: {
    goHistory () {
      this.$router.go(-1)
    },
    showMenu () {
      this.isShowMenu = true
      console.log(this.isShowMenu)
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
  opacity: 0;
  z-index: 1;
  display: none;
}
.navMaskAnimate {
  display: block;
  animation: mask 0.8s forwards;
}
@keyframes mask {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.7;
  }
}
.nav {
  position: fixed;
  top: 12vw;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 2;
}
.navAnimate {

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
