<template>
  <div class="tags">
    <el-tag
      v-for="(tag, index) in tags"
      :key="index"
      :closable="tag.name !== 'home'"
      :effect="route.name === tag.name ? 'dark' : 'plain'"
      @click="handelMenu(tag)"
      @close="handelClose(tag, index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script setup>
import { computed, effect, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useAllDataStore } from "@/stores"

const store = useAllDataStore()
const tags = computed(() => store.state.tags)
const route = useRoute()
const router = useRouter()

const handelMenu = (tag) => {
  router.push(tag.name)
  store.selectMenu(tag)
}
const handelClose = (tag, index) => {
  //通过pinina管理
  store.unDataMenu(tag)
  //如果点击的是当前路由
  if (tag.name !== route.name) {
    return
  }

  if (index === store.state.tags.length) {
    store.selectMenu(tags.value[index - 1])
    router.push(tags.value[index - 1].name)
  }
}
</script>

<style lang="less" scoped>
.tags {
  margin: 20px 0 0 20px;
}
.el-tag {
  margin-right: 15px;
}
</style>
