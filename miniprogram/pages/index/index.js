// miniprogram/pages/index/index.js
const app = getApp()
let g = app.globalData
const db = wx.cloud.database()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    dateToday: '',
    questionToday: '',
    todayList: ["", "", "", "", ""],
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    windowHeight: 0,
    inputValue: '',
    dialogShow: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取当天日期
    let today = new Date()
    let month = today.getMonth()
    let date = today.getDate()

    // 获取当天的问题
    let question = ''
    db.collection('everyday').get({
      success: ((res) => {
        console.log(res)
        let year = res.data[0].year
        question = year[month].question[date - 1].paragraph
        console.log(year, question)
        this.setData({
          questionToday: question
        })
      })
    })


    //检查登录状态
    if (g.userInfo) {
      console.log(g.userInfo)
      this.initData(g.userInfo._id)
    } else {
      this.setData({
        dialogShow: true
      })
    }



    this.setData({
      dateToday: `${month + 1}月${date}日`,
      windowHeight: g.windowHeight
    })
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

  /**
   * 日期选择
   */
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },
  enterDetail(e) {
    // let content=e.
  },

  /** 初始化数据 获取该用户的问答数据 */
  initData(userId) {
    console.log('init', userId)
    db.collection('answerLists').where({ userId: 'e656fa635f86c9e70187230c17bfbaf2' }).get({
      success: ((res) => {
        console.log('answerLists', res)
        if (res.data.length) {

        } else {
          db.collection('answerLists').add({
            data: {
              userId,
              answers: {
                answer: [],
                date: currentDate
              }
            },
            success: (res) => {
              console.log(res)
            }
          })
        }
      })
    })
  }

})