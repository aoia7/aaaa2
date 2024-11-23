<template>
  <div class="body-login">
    <el-form :model="loginForm" class="login-container">
      <h1>欢迎登录</h1>
      <el-form-item>
        <el-input
          type="input"
          v-model="loginForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handlelogin"> 登录 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, getCurrentInstance } from "vue"
import { useAllDataStore } from "@/stores"
import {useRouter} from "vue-router"
const loginForm = reactive({
  username: "",
  password: "",
})

const { proxy } = getCurrentInstance()
const store = useAllDataStore()
const router = useRouter()
const handlelogin = async () => {
  let res = await proxy.$api.getMenu(loginForm)
  store.updateMenuList(res.menuList)
  store.state.token = res.token
  store.addMenu(router)
  router.push("/home")  
}
</script>

<style lang="less" scoped>
.body-login {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  //   background-image: url(../assets/img/11.png);
  //   background-size: 100%;
  .login-container {
    width: 400px;
    height: 250px;
    background-color: #fff;
    margin: 100px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 25px #cacaca;
  }
  h1 {
    text-align: center;
    margin-bottom: 20px;
    // color: #505050;
  }
  .el-form-item {
    margin-bottom: 20px;
  }
  .el-button {
    width: 30%;
  }
  :deep(.el-form-item__content) {
    justify-content: center;
  }
}
</style>
