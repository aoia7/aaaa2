import Mock from "mockjs"

export default {
  getMenu: (config) => {
    const { username, password } = JSON.parse(config.body)
    //先判断用户是否存在
    //判断账号和密码是否正确
    //menuList用于权限分配
    if (username === "admin" && password === "admin") {
      return {
        code: 200,
        data: {
          menuList: [
            {
              path: "/home",
              name: "home",
              label: "首页",
              icon: "house",
              url: "home",
            },
            {
              path: "/mall",
              name: "mall",
              label: "商品管理",
              icon: "video-play",
              url: "mall",
            },
            {
              path: "/user",
              name: "user",
              label: "用户管理",
              icon: "user",
              url: "user",
            },
            {
              path: "/other",
              label: "其他页面",
              icom: "location",
              children: [
                {
                  path: "/page1",
                  name: "page1",
                  label: "页面1",
                  url: "page1",
                  icon: "setting",
                },
                {
                  path: "/page2",
                  name: "page2",
                  label: "页面1",
                  url: "page2",
                  icon: "setting",
                },
              ],
            },
          ],
          token: Mock.Random.guid(),
          message: "获取成功",
        },
      }
    } else if (username === "aoia" && password === "aoia") {
      return {
        code: 200,
        data: {
          menuList: [
            {
              path: "/home",
              name: "home",
              label: "首页",
              icon: "house",
              url: "home",
            },
            {
              path: "/user",
              name: "user",
              label: "用户管理",
              icon: "user",
              url: "user",
            },
          ],
          token: Mock.Random.guid(),
          message: "获取成功",
        },
      }
    } else {
      return {
        code: -999,
        data: {
          message: "用户名或密码错误",
        },
      }
    }
  },
}
