export default {
  getTableData: () => {
    return {
      code: 200,
      data: {
        tableData: [
          {
            name: "oppo",
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800,
          },
          {
            name: "vivo",
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800,
          },
          {
            name: "苹果",
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800,
          },
          {
            name: "小米",
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800,
          },
          {
            name: "三星",
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800,
          },
        ],
      },
    }
  },
  getCountData() {
    return {
      code: 200,
      data: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "SuccessFilled",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "StarFilled",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "WarningFilled",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "SuccessFilled",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "StarFilled",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "WarningFilled",
          color: "#5ab1ef",
        },
      ],
    }
  },
  getChartData() {
    return {
      code: 200,
      data: {
        orderData: {
          date: [
            "2021-01-01",
            "2021-01-02",
            "2021-01-03",
            "2021-01-04",
            "2021-01-05",
            "2021-01-06",
            "2021-01-07",
          ],
          data: [
            {
              苹果: 1200,
              vivo: 200,
              oppo: 251,
              小米: 800,
              三星: 120,
              魅族: 50,
              一加: 244,
            },
            {
              苹果: 2242,
              vivo: 552,
              oppo: 734,
              小米: 100,
              三星: 130,
              魅族: 60,
              一加: 244,
            },
            {
              苹果: 645,
              vivo: 220,
              oppo: 674,
              小米: 2400,
              三星: 130,
              魅族: 60,
              一加: 244,
            },
            {
              苹果: 2146,
              vivo: 220,
              oppo: 252,
              小米: 1543,
              三星: 130,
              魅族: 60,
              一加: 244,
            },
            {
              苹果: 1415,
              vivo: 220,
              oppo: 620,
              小米: 820,
              三星: 130,
              魅族: 60,
              一加: 244,
            },
            {
              苹果: 1248,
              vivo: 220,
              oppo: 210,
              小米: 1346,
              三星: 130,
              魅族: 60,
              一加: 244,
            },
            {
              苹果: 422,
              vivo: 220,
              oppo: 235,
              小米: 1769,
              三星: 130,
              魅族: 60,
              一加: 244,
            },
            {
              苹果: 953,
              vivo: 220,
              oppo: 353,
              小米: 480,
              三星: 130,
              魅族: 60,
              一加: 244,
            },
            {
              苹果: 455,
              vivo: 220,
              oppo: 355,
              小米: 1634,
              三星: 130,
              魅族: 60,
              一加: 244,
            },
          ],
        },
        videoData: [
          {
            name: "小米",
            value: 300,
          },
          {
            name: "苹果",
            value: 50,
          },
          {
            name: "vivo",
            value: 100,
          },
          {
            name: "oppo",
            value: 100,
          },
          {
            name: "三星",
            value: 100,
          },
        ],
        userData: [
          {
            date: "周一",
            new: 52,
            active: 200,
          },
          {
            date: "周二",
            new: 100,
            active: 500,
          },
          {
            date: "周三",
            new: 43,
            active: 550,
          },
          {
            date: "周四",
            new: 60,
            active: 800,
          },
          {
            date: "周五",
            new: 20,
          },
        ],
      },
    }
  },
}
