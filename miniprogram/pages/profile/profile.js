// pages/profile/profile.js
const app = getApp()
let g = app.globalData
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    avatar: '../../images/icon-login.png',
    fileList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(g.userInfo)
    if (g.userInfo) {
      this.setData({
        username: g.userInfo.username,
        avatar: g.userInfo.avatar
      })
    }
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

  changeAvatar() {
    wx.cloud.init()
    const { fileList } = this.data
    if (!fileList.length) {
      wx.showToast({ title: '请选择图片', icon: 'none' });
    } else {
      const uploadTasks = fileList.map((file, index) => this.uploadFilePromise(`my-photo${index}.png`, file));
      Promise.all(uploadTasks)
        .then(data => {
          wx.showToast({ title: '上传成功', icon: 'none' });
          const newFileList = data.map(item => { url: item.fileID });
          this.setData({ cloudPath: data, fileList: newFileList });
        })
        .catch(e => {
          wx.showToast({ title: '上传失败', icon: 'none' });
          console.log(e);
        });
    }
  },

  uploadFilePromise(fileName, chooseResult) {
    return wx.cloud.uploadFile({
      cloudPath: fileName,
      filePath: chooseResult.url
    });
  },

  /**退出登录 */
  loginOut() {
    wx.removeStorage({
      key: 'userInfo',
      success(res) {
        console.log(res)
        g.userInfo = ''
        wx.showToast({
          title: '退出登录成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  }

})