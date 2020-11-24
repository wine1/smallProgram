// miniprogram/pages/mine/mine.js
const app = getApp()
let g = app.globalData
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      username: '',
      avatar: '../../images/icon-login.png'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    console.log(g.userInfo)
    if (g.userInfo) {
      this.setData({
        username: g.userInfo.username,
        avatar: g.userInfo.avatar
      })
    }
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

  toLogin() {
    if (this.data.username) {
      wx.navigateTo({
        url: '../profile/profile'
      })
    } else {
      wx.navigateTo({
        url: '../login/login'
      })
    }

  }
})


