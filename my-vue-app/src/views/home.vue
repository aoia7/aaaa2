<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" :offset="0">
            <el-card shadow="hover" :body-style="{ padding: '20px' }">
                <div class="user">
                    <img class="user" :src="getImgUrl('user')">
                    <div class="userInfo">
                        <p>admin</p>
                        <p>超级管理员</p>
                    </div>
                </div>
                <div class="loginInfo">
                    <p>上次登录时间<span>2024-11-20</span></p>
                    <p>上次登录地点<span>北京</span></p>
                </div>
            </el-card>
            <el-card class="userTable" style="margin-top: 20px;" shadow="hover" :body-style="{ padding: '20px' }">
                <el-table :data="tableData">
                    <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key"
                        :label="val"></el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="12" :offset="0"></el-col>
    </el-row>

</template>

<script setup>
import { ref } from 'vue'
const getImgUrl = (user) => {
    return new URL(`../assets/img/${user}.png`, import.meta.url).href
}
const tableData = ref([
    {
        name: 'Java',
        todayBuy: 100,
        monthBuy: 300,
        totalBuy: 800,
    },
    {
        name: 'Vue',
        todayBuy: 100,
        monthBuy: 300,
        totalBuy: 800,
    }
])
const tableLabel = ref(
    {
        name: '课程',
        todayBuy: '今日销量',
        monthBuy: '本月销量',
        totalBuy: '总销量'
    }
)

</script>

<style scoped lang="less">
.home {
    height: 100%;
    overflow: hidden;

    .user {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;

        img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-right: 40px;
        }
    }

    .userInfo {
        p {
            font-size: 16px;
            color: #666;
            margin-bottom: 20px;
        }

        P:first-child {
            font-size: 35px;
            color: #000;
        }
    }

    .loginInfo {
        p {
            font-size: 14px;
            color: #000;
            margin-bottom: 10px;

            span {
                margin-left: 60px;
                color: #333;
            }
        }
    }
}
</style>