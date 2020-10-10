// miniprogram/pages/index/index.js
const app=getApp()
let g=app.globalData
Page({
  /**
   * 页面的初始数据
   */
  data: {
    dateToday:'',
    todayList:["","","","",""],
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
    windowHeight:0,
    inputValue:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let today=new Date()
    let month=today.getMonth()
    let date=today.getDate()
    this.setData({
      dateToday:`${month+1}月${date}日`,
      windowHeight:g.windowHeight
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
  /**
   * 吊起输入框
   */
  inputText(e) {
    let content=''
    if(e.currentTarget.dataset.content) {
      content=e.currentTarget.dataset.content
    }
    let i=e.currentTarget.dataset.index
    this.data.todayList.forEach((item,index)=>{
      // if(index===i) {

      // }
    })
    this.setData({
      inputValue:content
    })

    console.log(e)
    // let content=e
  },

  confirm(){
    if(this.data.inputValue) {
      this.setData({

      })
    }
  }
})