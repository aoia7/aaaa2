<template>
    <div class="common-layout">
        <el-container class="lay-container">
            <!-- 左边 -->
             <common-aside/>
             <el-container>
                <el-header class="el-header">
                    <common-header/>
                </el-header>
                <common-tab></common-tab>
                <el-main class="right-main">
                    <router-view></router-view>
                </el-main>
             </el-container>
        </el-container>
    </div>
</template>

<script setup>
import CommonAside from '@/components/CommonAside.vue';
import CommonHeader from '../components/CommonHeader.vue';
import CommonTab from '../components/CommonTab.vue';
</script>

<style scoped lang="less">
.common-layout, .lay-container{
    height: 100%;
    width: 100%;
    // .right-main{
    //     background-color: #f0f2f5;
    // }
}
.el-header{
    background-color: #333;
}
</style>