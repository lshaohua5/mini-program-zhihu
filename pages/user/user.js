//user.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    contentList: [{
      'num': '6',
      'des': '我的创作'
    }, {
      'num': '504',
      'des': '关注'
    }, {
      'num': '9',
      'des': '我的收藏'
    }, {
      'num': '1K',
      'des': '最近浏览'
    }],
    userList: [{
      'icon': 'icon-shu',
      'des': '我的书架'
    }, {
      'icon': 'icon-tedianshandianfahuo',
      'des': '我的LIVE'
    }, {
      'icon': 'icon-chakantiezishipin',
      'des': '我的私家课'
    }, {
      'icon': 'icon-qian',
      'des': '付费咨询'
    }, {
      'icon': 'icon-gouwu',
      'des': '已购'
    }, {
      'icon': 'icon-xianbanshense-',
      'des': '金额礼券'
    }, {
      'icon': 'icon-xinhaota',
      'des': '免费流量服务'
    }],
    setList: [{
      'icon': 'icon-shumiao',
      'des': '社区建设'
    }, {
      'icon': 'icon-tedianshandianfahuo',
      'des': '反馈与帮助'
    }, {
        'icon': 'icon-yejian',
      'des': '夜间模式'
    }, {
        'icon': 'icon-set',
      'des': '设置'
    }]
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log(res)
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})