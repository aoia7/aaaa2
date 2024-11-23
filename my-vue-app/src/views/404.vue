<template>
    <div class="not">
        <h3>404 Not Found</h3>
        <hr>
        <el-button type="info" @click="goHome">去登陆</el-button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const goHome = () => {
    router.push('/login')
}
</script>

<style lang="less" scoped>
.not {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h3 {
        font-size: 30px;
        margin-bottom: 20px;
        
    }
}
</style>