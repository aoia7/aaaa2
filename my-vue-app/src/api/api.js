/**
 * 整个项目api接口管理
 */

import { vModelCheckbox } from "vue"
import request from "./request"

//请求首页左侧数据
export default {
  getTableData() {
    return request({
      url: "/api/home/getTableData",
      method: "get",
      mock:true
    })
  },
}
