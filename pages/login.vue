<!--
* @description 登录
* @fileName login.vue
* @author echo9z
* @date 2022/09/26 14:55:59
!-->
<template>
  <div class="">
    <div class="box box2 ">
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-emo-happy box-i"></i>
            <input class="box-int"
              name="username"
              v-model="username"
              @blur="usernameChange"
              type="text" placeholder="请输入用户名" />
          </div>
          <div class="error" v-if="usernameError">
            <i class="iconfont icon-emo-unhappy" />
            {{usernameError}}
          </div>
          <!-- <div class="error"><i class="iconfont icon-warning" />请输入手机号</div> -->
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-emo-sunglasses box-i"></i>
            <input class="box-int"
              name="password"
              v-model="password"
              @blur="passwordChange"
              @keyup.enter="submit"
              type="password" placeholder="请输入密码" />
          </div>
          <div class="error" v-if="passwordError">
            <i class="iconfont icon-emo-unhappy" />
            {{passwordError}}
          </div>
          <!-- <div class="error"><i class="iconfont icon-warning" />请输入手机号</div> -->
        </div>
        <!-- 登录按钮 -->
        <div class="text-center">
          <button class="btn-hover px-6 transition-all" @click="submit">
            <!-- 正方形 -->
            <span class="bg-s bg-p transition-all ease-out duration-500"></span>
            <span class="tx-s transition-all ease-in-out duration-300 transition-colors">登录</span>
          </button>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useForm, useField } from 'vee-validate'
import veeValidateSchema from '~~/utils/vee-validate-schema'
import { login } from '~~/api/login'
import message from '~~/components/message/show'
definePageMeta({
  // 禁止使用的 layout的
  layout: false
})
const userStore = useUserStore()
const form = useForm({ validationSchema: veeValidateSchema })
const { value: username, errorMessage: usernameError, handleChange: usernameChange } = useField < string > ('username')
const { value: password, errorMessage: passwordError, handleChange: passwordChange } = useField < string > ('password')
// 点击提交登录
const submit = async () => {
  // if (passwordError && usernameError) return alert('请添加完善信息')
  const { valid } = await form.validate()
  if (valid) {
    const res = await login({
      username: username.value,
      password: password.value
    }).catch(error => {
      message({ type: 'error', text: error.data.msg || '登录失败' })
    })
    if (res.status === 200) {
      // 登录成功将用户信息存储到store中
      userStore.setUser(res.data.result)
      navigateTo('/') // 登录成功跳回到首页
    }
  } else {
    return message({ type: 'error', text: '请填写登录信息' })
  }
}
</script>

<style lang="scss" scoped>
.box {
  background-color: #323232;
  @apply absolute top-1/2 left-1/2 -translate-y-[200px]
  -translate-x-[240px] w-[480px] h-[320px] rounded-2xl
  border-solid border-[1px] border-black shadow-md
}

.box2 {
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.box-i {
  @apply mr-[15px] text-[20px] text-white
}
.box-int{
  @apply h-[45px] w-[280px] rounded pl-[15px] outline-none
}

.form-item {
  height: 80px;
  // display: flex;
  justify-content: center;
  align-items: center;

  .error{
    margin-top: 5px;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
    color: red;
    margin-left: 45px;
  }
}

/** 登录按钮 */
button {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.5;
  margin: 0;
}

.px-6 {
  /* 按钮样式 */
  box-sizing: border-box;
  position: relative;
  padding: 5px 24px;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 0 solid;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
}

/* 蓝色方块 */
.bg-s {
  box-sizing: border-box;
  width: 192px;
  height: 192px;
  background-color: rgba(29, 155, 240, 1);
  // background: linear-gradient(115deg, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b);
  border-radius: 4px;
  margin-left: 36px;
  margin-bottom: 36px;
}

.bg-p {
  position: absolute;
  left: 0;
  bottom: 0;
  /* 要注意顺序顺序 */
  transform: translate(-100%, 100%) rotate(-45deg);
}

.tx-s {
  position: relative;
  width: 100%;
  text-align: left;
}

.transition-all {
  /* 所有的过渡效果 */
  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s;
}

.ease-out {
  /* 方块的过渡效果 */
  transition-timing-function: cubic-bezier(0, 0, .2, 1);
}

.duration-500 {
  /* 过渡事件500s */
  transition-duration: .5s;
}

.transition-colors {
  /* 所有颜色的过渡效果 */
  transition-property: background-color, border-color, color;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s;
}

.ease-in-out {
  /* 文字的过渡效果 */
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
}

.duration-300 {
  transition-duration: .3s;
}

.btn-hover:hover .bg-s {
  transform: translateY(100%) translateX(0%) rotate(-45deg);
  /* 这两特别重要 */
  margin-bottom: 8rem;
  margin-left: 0;
}

.btn-hover:hover .tx-s {
  color: #fff;
}
</style>
