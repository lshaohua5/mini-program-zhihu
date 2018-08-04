//index.js
//获取应用实例
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    feed_length: 0,
    feedList: [],
    feedNum: 0,
  },
  //事件处理函数
  goSearch() {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  // 问答详情页
  goAnswers(e) {
    console.log(e)
    wx.navigateTo({
      url: '../answers/answers?question_id=' + e.currentTarget.dataset.item,
    })
  },
  //生命周期函数--监听页面加载
  onLoad() {
    this.getFeedList();

  },
  //
  onPullDownRefresh() {
    wx.showNavigationBarLoading();
    setTimeout(() => {
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading()
    }, 1500)
  },
  //页面上拉触底事件的处理函数
  onReachBottom(e) {
    if (this.data.feedNum != 2) {
      let upFeedData = util.getNext();
      let feedList = this.data.feedList.concat(upFeedData.data);
      this.setData({
        feedNum: upFeedData.id,
        feedList: feedList
      })
    } else {
      return false;
    }
  },
  //// 获取数据
  getFeedList() {
    let feed = util.getFeed();
    let feed_data = feed.data;
    console.log(feed_data);
    this.setData({
      feedList: feed_data,
      feed_length: feed_data.length
    });
  },
})