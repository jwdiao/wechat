// pages/detail/detail.js
let listArr = require('../../datas/list-data.js');
let appData = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {},
    index: null,
    isCollection:false,
    isMusicPlay:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index = options.index
    
    this.setData({
      detailObj : listArr.list_data[index],
      index      
    }) 
    //预处理收藏状态
    let oldStr = wx.getStorageSync('isCollection')
    oldStr ? '' : oldStr = {}
    wx.setStorageSync('isCollection', oldStr)
    this.setData({
      isCollection: oldStr[index] ? true : false
    })
    //预处理音乐同步更新
    wx.onBackgroundAudioPlay(() => {
      this.setData({
        isMusicPlay : true
      })
      appData.data.pageIndex = index 
      appData.data.isPlay = true

    })
    wx.onBackgroundAudioPause(() => {
      this.setData({
        isMusicPlay: false
      })
      appData.data.isPlay = false
    })
    
    
  },
  //是否收藏逻辑
  handleCollection(){
    let isCollection = !this.data.isCollection
    this.setData({
      isCollection
    })
    wx.showToast({
      title: isCollection ? "已收藏" : "取消收藏"
    })
    console.log(isCollection)
    //获取本地的缓冲
    let obj = wx.getStorageSync('isCollection');
    console.log(obj, '--------------');
    let index = this.data.index
    obj[index] = isCollection
    wx.setStorage({
      key:'isCollection',
      data:obj
    })
  },

  handleMusicPlay(){
    let isMusicPlay = !this.data.isMusicPlay
    this.setData({
      isMusicPlay
    })
    let {dataUrl,title} = this.data.detailObj.music
    if(isMusicPlay){
      wx.playBackgroundAudio({
        dataUrl,
        title
      })      
    }else{
      wx.pauseBackgroundAudio()
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
  
  }
})