//search.js
Page({
  data: {
    tabList: ['热搜', '影视', '综艺', '人物', '资讯'],
    currentIndex: 0,
    focusFlag: false,
    btnFlag: false,
    searchContent: '',
    searchCHistory: ['极限挑战第四季', '魔道祖师', '华为 nuva 3', 'BNA', '德罗赞加盟马刺'],
    historyFlag: false,
  },
  onLoad() {

  },
  onShow() {
    wx.removeStorageSync('searchCHistory')
  },
  // tab 切换
  tab(event) {
    let index = event.currentTarget.dataset.index;
    this.setData({
      currentIndex: index
    })
  },
  // search聚焦 设置focusFlag
  setFocus() {
    this.setData({
      btnFlag: true
    })
  },
  // 失去焦点
  setBlur() {
    this.setData({
      btnFlag: false
    })
  },
  // 动态获取搜索框里的值
  getSearchContent(e) {
    //input的value值 
    let searchValue = e.detail.value
    this.setData({
      searchContent: searchValue
    })
  },
  // 保存搜索信息
  saveSearchContent() {
    console.log(this.data.searchContent)
    let searchContent = this.data.searchContent;
    if (this.data.searchContent.length == 0) {
      wx.showToast({
        title: '搜索信息不能为空',
        icon: 'none',
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '未检索到' + searchContent + '的信息，请重新搜索',
        success: (res)=> {
          if (res.confirm) {
            this.setData({
              focusFlag: true
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  }

})