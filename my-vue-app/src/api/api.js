/**
 * 整个项目api管理
 */
import request from './request'

//请求首页左侧表格数据
export default {
    getTableData() {
        return request({
            url: '/api/home/getTableData',
            method: 'get'
        })
    }
}