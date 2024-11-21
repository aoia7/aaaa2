import Mock from "mockjs"

//get请求从config.url获取参数，post从mock.mock(url)中获取参数
function param2Obj(url) {
  const search = url.split("?")[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  )
}

let list = []
const count = 200
//模拟200条用户数据
for (let i = 0; i < count; i++) {
  list.push(
    Mock.mock({
      id: Mock.Random.guid(),
      name: Mock.Random.cname(),
      addr: Mock.mock("@county(true)"),
      "age|18-60": 1,
      birth: Mock.Random.date(),
      sex: Mock.Random.integer(0, 1),
    })
  )
}

export default {
  /**
   * 获取用户列表
   * 要带参数 name, page, limit可以不填，默认page1，limit10
   * @param name，page, limit
   * @returns {{code: number, count: number, data: *[]}}
   */
  getUserList: (config) => {
    const { name, page = 1, limit = 10 } = param2Obj(config.url)
    const mockList = list.filter((user) => {
      //如果name存在，则过滤
      if (name && user.name.indexOf(name) === -1) return false
      return true
    })
    //分页
    const pageList = mockList.filter(
      (item, index) => index < limit * page && index >= limit * (page - 1)
    )
    return {
      code: 200,
      data: {
        count: mockList.length, //数据总条数需要返回
        list: pageList,
      },
    }
  },
}
