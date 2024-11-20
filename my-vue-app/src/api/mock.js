import Mock from 'mockjs'
import homeApi from './mockData/home'

//1.拦截路径 2.拦截方式 3.返回数据
Mock.mock(/api\/home\/getTableData/, 'get', homeApi.getTableData )
Mock.mock(/api\/home\/getCountData/, 'get', homeApi.getCountData )
Mock.mock(/api\/home\/getChartData/, 'get', homeApi.getChartData )