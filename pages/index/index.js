//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '点击我生成一个海报吧~',
    userInfo: {},
    hasUserInfo: false,
    mottoIs: false,
  },
  bindEat: function() {
    wx.navigateTo({
      url: '../eat/eat'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../canvas/canvas'
    })
  },
  bindVideoTap: function() {
    wx.navigateTo({
      url: '../video/index'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        mottoIs: true
      })
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserProfile({
        desc: '用于完善资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            mottoIs: true
          })
        }
      })
    }
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '用于完善资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        app.globalData.userInfo = res.userInfo;
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          mottoIs: true
        })
      }
    })
  }
})