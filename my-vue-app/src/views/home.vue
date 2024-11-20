<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" :offset="0">
      <el-card shadow="hover" :body-style="{ padding: '20px' }">
        <div class="user">
          <img class="user" :src="getImgUrl('user')" />
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
      <el-card
        class="userTable"
        style="margin-top: 20px"
        shadow="hover"
        :body-style="{ padding: '20px' }"
      >
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" :offset="0">
      <div class="num">
        <el-card
          shadow="hover"
          :body-style="{ display: 'flex', padding: '5px' }"
          v-for="item in countData"
          :key="item.name"
        >
          <component
            :is="item.icon"
            class="icon"
            :style="{ background: item.color }"
          ></component>
          <div class="detiail">
            <p class="num">{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card class="top-echart">
        <div ref="echart" style="height: 240px; width: 100%;"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, reactive } from "vue"
import * as echarts from "echarts"
const { proxy } = getCurrentInstance()

const getImgUrl = (user) => {
  return new URL(`../assets/img/${user}.png`, import.meta.url).href
}

const tableData = ref([])
const countData = ref([])
const chartData = ref([])

const tableLabel = ref({
  name: "课程",
  todayBuy: "今日销量",
  monthBuy: "本月销量",
  totalBuy: "总销量",
})

const getTableData = async () => {
  const data = await proxy.$api.getTableData()
  tableData.value = data.tableData
}
const getCountData = async () => {
  const data = await proxy.$api.getCountData()
  countData.value = data
  // console.log("countData", countData.value[1])
}
const getChartData = async () => {
  const {orderData} = await proxy.$api.getChartData()
  //对点一个图标进行X轴 和 series 数据的设置
  xOptions.xAxis.data = orderData.date
  xOptions.series = Object.keys(orderData.data[0]).map((val) => {
    return {
      name: val,
      data: orderData.data.map((item) => item[val]),
      type: "line",
    }
  })
  const oneEchart = echarts.init(proxy.$refs['echart'])
 oneEchart.setOption(xOptions)
}
onMounted(() => {
  getTableData()
  getCountData()
  getChartData()
})

//observer 接受观察实例对象
const observer = ref(null)

//折线图和柱状图 两个图表的公共配置
//echart
const xOptions = reactive({
  //图例文字颜色
  textStyle: {
    color: "#333",
  },
  legend: {},
  //网格线
  grid: {
    left: "20%",
  },
  //提示框
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category", //类目轴
    data: [],
    axisLine: {
      lineStyle: {
        color: "#17b3a3",
      },
    },
    axisLabel: {
      interval: 0,
      color: "#333",
    },
  },
  yAxis: [
    {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#17b3a3",
        },
      },
    },
  ],
  color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
  series:[]
})
const pieOptions = reactive({
  tooltip: {
    trigger: "item",
  },
  color: [
    "#0f78f4",
    "#dd536b",
    "#9467bd",
    "#a6a6a6",
    "#e1bb22",
    "#39c362",
    "#3ed1cf",
  ],
  series: [],
  legend:{}
})

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
  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .el-card {
      width: 32%;
      margin-bottom: 10px;
    }

    .icon {
      width: 80px;
      height: 80px;
      font-size: 30px;
      color: #fff;
      text-align: center;
      line-height: 80px;
    }
    .detiail {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .num {
        font-size: 30px;
        margin-bottom: 10px;
      }

      .txt {
        font-size: 14px;
      }
    }
  }
}
</style>
