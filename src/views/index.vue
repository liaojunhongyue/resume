<template>
  <div class="index">
    <div class="info-bg"></div>
    <div class="info-content">
      <div class="info-tips">
        <div class="info-round info-branch-basic">
          <div class="title">
            <router-link to="/basic">基本信息</router-link>
          </div>
        </div>
        <div class="info-round info-branch-skill">
          <div class="title">
            <router-link to="/skill">掌握技能</router-link>
          </div>
        </div>
        <div class="info-round info-branch-education">
          <div class="title" hover-class="none" url="/pages/education/education">教育经历</div>
        </div>
        <div class="info-round info-branch-job">
          <div class="title" hover-class="none" url="/pages/job/job">工作经历</div>
        </div>
        <div class="info-round info-branch-works">
          <div class="title" hover-class="none" url="/pages/works/works">项目&作品</div>
        </div>
      </div>
      <div class="avatar">
        <img class="avatar-pic" src="../assets/images/avatar.jpg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
/**信息介绍部分**/
.info-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #7aa0f6;
}
.info-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}
.info-content .avatar {
  position: absolute;
  top: 45%;
  left: 50%;
  height: 25vw;
  width: 25vw;
  margin-top: -12.5vw;
  margin-left: -12.5vw;
  border: 4px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 0px 9px #eee;
  opacity: 0;
  transform: scale(0, 0);
  animation: avatar 0.8s 0.8s forwards;
  -webkit-animation: avatar 0.8s 0.8s forwards;
  box-sizing: border-box;
}
.info-content .avatar-pic {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}
@keyframes avatar {
  from {
    margin-top: 0;
    transform: scale(0, 0);
    opacity: 0;
    filter: blur(10px);
    border-radius: 0%;
  }
  to {
    margin-top: -9vw;
    transform: scale(1, 1);
    opacity: 1;
    filter: blur(0px);
    border-radius: 50%;
  }
}
/**背景圆圈**/
.info-tips {
  position: absolute;
  top: 45%;
  left: 50%;
  width: 70vw;
  height: 70vw;
  margin-top: -35vw;
  margin-left: -35vw;
  animation: infotips 1s 1.5s forwards;
}
@keyframes infotips {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.info-round {
  width: 20vw;
  height: 20vw;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 20vw;
  box-shadow: 0px 0px 9px #eee;
  opacity: 0;
  transform: scale(0, 0);
  animation: inforound 1s 1.5s forwards;
}
.info-round .title {
  font-size: 3.7vw;
  font-weight: 700;
}
@keyframes inforound {
  from {
    transform: scale(0, 0) rotate(180deg);
    opacity: 0;
  }
  to {
    transform: scale(1, 1) rotate(360deg);
    opacity: 1;
  }
}
/**基本信息**/
.info-branch-basic {
  position: absolute;
  top: 16vw;
  left: -4vw;
}
/**掌握技能**/
.info-branch-skill {
  position: absolute;
  top: -6vw;
  left: 50%;
  margin-left: -10.5vw;
}
/**教育经历**/
.info-branch-education {
  position: absolute;
  top: 16vw;
  right: -4vw;
}
/**工作经历**/
.info-branch-job {
  position: absolute;
  left: 2vw;
  bottom: -2vw;
}
/**项目&作品**/
.info-branch-works {
  position: absolute;
  right: 2vw;
  bottom: -2vw;
}
</style>
