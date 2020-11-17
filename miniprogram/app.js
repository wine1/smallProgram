//app.js
App({


  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    //获取设备系统信息
    let systemInfo=wx.getSystemInfoSync()
    console.log(systemInfo)
    let windowHeight=systemInfo.windowHeight
    //获取缓存信息
    let userInfo=wx.getStorageSync('userInfo');
    if(userInfo) {
      userInfo=JSON.parse(userInfo)
    }
    this.globalData={
      systemInfo,
      windowHeight,
      userInfo
    }
    
   
    
  }
})
