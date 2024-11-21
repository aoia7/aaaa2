import Mock from "mockjs";

//get请求从config.url获取参数，post从mock.mock(url)中获取参数
function param2Obj(url) {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
}

let list = [];
const count = 200;
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
  );
}

export default {
  /**
   * 获取用户列表
   * 要带参数 name, page, limit可以不填，默认page1，limit10
   * @param name，page, limit
   * @returns {{code: number, count: number, data: *[]}}
   */
  getUserList: (config) => {
    const { name, page = 1, limit = 10 } = param2Obj(config.url);
    const mockList = list.filter((user) => {
      //如果name存在，则过滤
      if (name && user.name.indexOf(name) === -1) return false;
      return true;
    });
    //分页
    const pageList = mockList.filter(
      (item, index) => index < limit * page && index >= limit * (page - 1)
    );
    return {
      code: 200,
      data: {
        count: mockList.length, //数据总条数需要返回
        list: pageList,
      },
    };
  },

  /**
   * 删除用户
   * @param id
   * @returns {*}
   */
  deleteUser: (config) => {
    const { id } = param2Obj(config.url);
    if (!id) {
      return {
        code: -999,
        message: "参数不正确",
      };
    } else {
      list = list.filter((user) => user.id !== id);
      return {
        code: 200,
        message: "删除成功",
      };
    }
  },

  /**
   * 新增用户
   * @param name, addr, age, birth, sex
   * @returns {{code: number, data: {id: string}}}
   */
  createUser: (config) => {
    const { name, addr, age, birth, sex } = JSON.parse(config.body);
    list.unshift({
      id: Mock.Random.guid(),
      name: name,
      addr: addr,
      age: age,
      birth: birth,
      sex: sex,
    });
    return {
      code: 200,
      data: {
        message: "新增成功",
      },
    };
  },

  /**
   *修改用户
   * @param id, name, addr, age, birth, sex
   * @returns {{code: number, data: {id: string}}}
   */
  updateUser: (config) => {
    const { id, name, addr, age, birth, sex } = JSON.parse(config.body);
    const sex_num = parseInt(sex);
    list.some((user) => {
      if (user.id === id) {
        user.name = name;
        user.addr = addr;
        user.age = age;
        user.birth = birth;
        user.sex = sex_num;
        return true;
      }
    });
    return {
      code: 200,
      data: {
        message: "修改成功",
      },
    };
  },
};
