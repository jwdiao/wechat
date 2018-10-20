// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"diaojunwen",
    userInfo:{},
    isShow:true
  },
  getUserInfo(){
    wx.getUserInfo({      
      success:(data) => {
        this.setData({
          userInfo:data.userInfo,
          isShow: false
          })
      },
      fail:(error) => {
        console.log('error',error)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getUserInfo()
  },
  handleGetUserInfo(msg){
    if (msg.detail.userInfo){
     this.getUserInfo()
   }
  },
  handlerClick(){
    wx.navigateTo({
      url: '/pages/list/list'
    })
  }
  
})