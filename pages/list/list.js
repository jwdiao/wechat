// pages/list/list.js
let listArr = require('../../datas/list-data.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    list_data:[],  //声明引入数据为数组
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
    this.setData({ listArr: listArr.list_data }) //需要更新一下引入的数据
  },
  //绑定点击事件
  toDetail(event) {
    let index = event.currentTarget.dataset.index
    wx.navigateTo({
    url: '/pages/detail/detail?index='+index,      
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
  
  }
})