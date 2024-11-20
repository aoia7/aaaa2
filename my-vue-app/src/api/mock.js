import Mock from 'mockjs'
import homeApi from './mockData/home'
//拦截路径 拦截方法 制造假数据
Mock.mock(/api\/home\/getTableData/, 'get', homeApi.getTableData)
