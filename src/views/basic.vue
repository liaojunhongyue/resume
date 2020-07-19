<template>
  <div class="basic">
    <normal-header title="基本信息" />
    <div class="basic-content">
      <div class="avatar">
        <img src="../assets/images/avatar.jpg" />
      </div>
      <div class="basic-p">
        <div class="basic-p-item">
          <p>姓名：{{ basic.name }}</p>
        </div>
        <div class="basic-p-item">
          <p>求职意向：{{ basic.intension }}</p>
        </div>
        <div class="basic-p-item">
          <p>年龄：{{ basic.age }}</p>
        </div>
        <div class="basic-p-item">
          <p>出生日期：{{ basic.birth }}</p>
        </div>
        <div class="basic-p-item">
          <p>电子邮箱：{{ basic.email }}</p>
        </div>
        <div class="basic-p-item">
          <p>联系电话：{{ basic.phone }}</p>
        </div>
        <div class="basic-p-item phone-wrapper">
          <button class="phone">拨打电话</button>
          <button class="phone">复制电话</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import basicData from '../assets/data/data'
import normalHeader from '../components/normalHeader'

export default {
  components: {
    normalHeader
  },
  data () {
    return {
      basic: {
        name: null,
        intension: null,
        age: null,
        birth: null,
        email: null,
        phone: null
      }
    }
  },
  mounted () {
    this.getBasic()
  },
  methods: {
    getBasic () {
      this.basic = basicData.basic
    }
  }
}
</script>
<style scoped>
.basic-content {
  padding-top: 10vw;
}
.basic-content .avatar {
  margin: 0 auto;
  width: 22vh;
  height: 22vh;
  padding: 5px;
  border: 1px solid #efefef;
  box-shadow: 0px 0px 3px #ccc;
  box-sizing: border-box;
  opacity: 0;
  animation: avatar 1s 0.5s forwards;
}
.basic-content .avatar img {
  width: 100%;
  height: 100%;
}
@keyframes avatar {
  form {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.basic-content .avatar image {
  width: 100%;
  height: 100%;
}
.basic-p {
  position: relative;
  margin-top: 7vw;
  left: 0;
  opacity: 0;
  animation: basicp 0.4s 1.5s forwards;
}
@keyframes basicp {
  from {
    opacity: 0;
    left: -200%;
  }
  to {
    opacity: 1;
    left: 0;
  }
}
.basic-p .basic-p-item {
  overflow: hidden;
}
.basic-p .basic-p-item p {
  display: inline-block;
  margin: 0;
  padding-left: 6vw;
  line-height: 12vw;
  font-size: 4.5vw;
}
.basic-p .basic-p-item.phone-wrapper {
  position: fixed;
  width: 100%;
  bottom: 5px;
}
.basic-p .basic-p-item .phone {
  float: left;
  line-height: 12vw;
  margin-left: 2%;
  width: 47%;
  color: #fff;
  background-color: #7aa0f6;
  border: 2px solid #6a94f3;
  opacity: 0.7;
  border-radius: 1vw;
}
</style>
