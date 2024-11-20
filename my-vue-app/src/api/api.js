/**
 * 整个项目api接口管理
 */

import request from "./request"

//请求首页左侧数据
export default {
  getTableData() {
    return request({
      url: "/home/getTableData",
      method: "get",
      mock:false
    })
  },
  getCountData() {
    return request({
      url: "/home/getCountData",
      method: "get",
      mock:false
    })
  },
  getChartData() {
    return request({
      url: "/home/getChartData",
      method: "get",
      mock:false
    })
  },
  getUserData() {
    return request({
      url: "/home/getUserData",
      method: "get",
      mock:false
    })
  },
}
