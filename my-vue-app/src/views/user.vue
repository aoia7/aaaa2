<template>
  <div class="user-header">
    <el-button type="primary">新增</el-button>
    <el-form :inline="true" :model="formInline">
      <el-form-item label="请输入">
        <el-input placeholder="请输入用户名" v-model="formInline.keyWord"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="table">
    <el-table :data="tableData" >
      <el-table-column v-for="item in tableLabel" :key="item.prop" :width="item.width ? item.width : 125"
        :prop="item.prop" :label="item.label" />
      <el-table-column fixed="right" label="Operations" >
        <template #default>
          <el-button type="primary" size="small" @click="handleClick">
            编辑
          </el-button>
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pager" size="small" background layout="prev, pager, next" :total="config.total"
      @current-change="handleChange" />
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted, reactive } from "vue"
const handleClick = () => {
  console.log("click")
}
const tableData = ref([

])
const { proxy } = getCurrentInstance()
const getUserData = async () => {
  let data = await proxy.$api.getUserData(config)
  // console.log(data)
  tableData.value = data.list.map((item) => {
    item.sexLabel = item.sex === 0 ? "女" : "男"
    return item
  })
  config.total = data.count
}

const tableLabel = reactive([
  {
    prop: "name",
    label: "姓名",
  },
  {
    prop: "age",
    label: "年龄",
  },
  {
    prop: "sexLabel",
    label: "性别",
  },
  {
    prop: "birth",
    label: "生日",
    width: 200,
  },
  {
    prop: "addr",
    label: "地址",
    width: 400,
  },
])

onMounted(() => {
  getUserData()
})
const formInline = reactive({
  keyWord: "",
})
const config = reactive({
  name: '',
  total: 0,
  page: 1,
})
const handleSearch = () => {
  config.name = formInline.keyWord
  getUserData()
}
const handleChange = (pager) => {
  config.page = pager,
    getUserData()
}
</script>

<style lang="less" scoped>
.user-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.table {
  position: relative;
  .pager {
    position: absolute;
    right: 10px;
    bottom: -35px;
  }
}
</style>
