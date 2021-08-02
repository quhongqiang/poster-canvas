//index.js
//获取应用实例
const app = getApp()
var t;
Page({
  data: {
    eatFood: '饺子',
    foods: ['韩式料理', '饺子混沌', '快餐便当', '汉堡薯条', '意大利面', '披萨', '包子和粥', '米粉', '面食', '麻辣烫', '冒菜', '米线', '小碗菜', '炒菜', '轻食', '川湘菜', '地方菜系', '炸鸡炸串', '特色小吃', '沙县小吃', '夹馍饼类', '鸭脖卤味', '日料寿司', '麻辣香锅', '干锅菜系', '火锅串串', '龙虾烧烤', '暖胃粉丝汤', '街边小吃', '饿着吧~'],
    isStart: false,
  },
  bindStart: function() {
    t = setInterval( () => {
      var index = Math.floor((Math.random()*this.data.foods.length));
      this.setData({
        eatFood: this.data.foods[index],
        isStart: true,
      })
    }, 30)
  },
  bindEnd: function() {
    clearInterval(t)
    this.setData({
      isStart: false,
    })
  },
})
