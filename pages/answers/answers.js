// pages/answers/answers.js
const util = require('../../utils/util.js');
const answersData = require('../../data/data_discovery.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answersList: [],
    question_id: null,
    curQuestion: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let answersList = answersData.discovery.data;
    console.log(answersList)
    this.setData({
      answersList: answersList,
      question_id: options.question_id
    })
    this.getFeedInfo();
  },

  //  确定当前页面的问题详情
  getFeedInfo() {
    let currentQuestionId = this.data.question_id,
      answersList = this.data.answersList,
      i = 0;
    let len = answersList.length;
    for (i; i < len; i++) {
      if (currentQuestionId == answersList[i].question_id) {
        this.setData({
          curQuestion: answersList[i]
        })
        break;
      }
      
    }
    console.log(this.data.curQuestion)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})