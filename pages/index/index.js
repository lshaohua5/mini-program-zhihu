//index.js
//获取应用实例
const util = require('../../utils/util.js')
const app = getApp()

Page({
    data: {
        feed_length: 0,
        feedList: []
    },
    //事件处理函数
    goSearch() {
        wx.navigateTo({
            url: '../search/search'
        })
    },
    //生命周期函数--监听页面加载
    onLoad() {
        this.getFeedList();

    },
    //页面上拉触底事件的处理函数
    onReachBottom(){
        console.log('上啦')
    },
    //// 获取数据
    getFeedList() {
        let feed = util.getFeed();
        let feed_data = feed.data;
        console.log(feed_data)
        this.setData({
            feedList: feed_data,
            feed_length: feed_data.length
        });
    },
})
