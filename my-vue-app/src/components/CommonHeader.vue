<template>
    <div class="header">
        <div class="l-content" >
            <el-button size="small">
                <el-icon><Menu /></el-icon>
            </el-button>
            <el-breadcrumb separator="/" class="bread">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                  <img :src="getImagUrl('user')" class="user">
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
    <!-- <component class="icons" is="Aim"></component> -->
</template>

<script setup>
import { ref, computed } from 'vue'
 const getImagUrl = (user)=>{
    return new URL(`../assets/img/${user}.png`,import.meta.url).href
 }
</script>

<style scoped lang="less">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    .l-content {
        display: flex;
        align-items: center;
        .bread {
            margin-left: 20px;
        }
    }
    .r-content {
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
}
:deep(.bread span){
    color: #fff !important;
    cursor: pointer !important;
}
</style>