// pages/login/login.js

const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
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

  login() {
    console.log(this.data.username, this.data.password)
    let { username, password } = this.data
    if (!username.length) {
      wx.showToast({
        icon: 'none',
        title: '用户名不能为空',
      })
    } else if (!password.length) {
      wx.showToast({
        icon: 'none',
        title: '密码不能为空',
      })
    } else {
      db.collection('users').where({ username: this.data.username })
        .get({
          success: function (res) {
            if (!res.data.length) {
              //没注册过直接登录相当于注册了
              db.collection('users').add({
                // data 字段表示需新增的 JSON 数据
                data: {
                  username,
                  password,
                },
                success: function (res) {
                  // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id

                  wx.showToast({
                    title: '登录成功',
                  })
                  let userInfo = res.data[0]
                  wx.setStorage({
                    key: "userInfo",
                    data: JSON.stringify(userInfo)
                  })
                  setTimeout(() => {
                    console.log('12312e1')
                    wx.switchTab({
                      url: '../more/more'
                    })
                  }, 2000)

                }
              })
            } else {
              //登录成功
              if (res.data[0].password === password) {
                wx.showToast({
                  title: '登录成功',
                })
                console.log('denglu', res)
                let userInfo = res.data[0]
                wx.setStorage({
                  key: "userInfo",
                  data: JSON.stringify(userInfo)
                })
                setTimeout(() => {
                  wx.switchTab({
                    url: '../more/more'
                  })
                }, 2000)
              } else {
                wx.showToast({
                  icon: 'none',
                  title: '用户名密码不匹配',
                })
              }
            }
          }
        })
    }
  },
  //为什么不返回上一页？！

  usernameBlur(e) {
    this.setData({
      username: e.detail.value
    })
  },

  passwordBlur(e) {
    this.setData({
      password: e.detail.value
    })
  },
})