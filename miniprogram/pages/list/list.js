// pages/list/list.js

const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedDate: '',
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else
        if (type === 'month') {
          return `${value}月`;
        }
      return value;
    },

    indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    everydayList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },

  initData() {
    db.collection('everyday').get({
      success: ((res) => {
        console.log(res)
        this.setData({
          everydayList: res.data[0].year
        })
      })
    })
  }
})