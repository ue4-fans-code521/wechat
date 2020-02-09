// pages/detail/detail.js
Page({
  handleBack(){
    wx.navigateBack({
      
    })
  },

  handleBackRedirect(){
    wx.navigateBack({
      
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    age: 123,
    country: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("detail页面加载中......")
    console.log(options)
    this.setData({
      name: options.name,
      age: options.age,
      country: options.country
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log("detail页面卸载中......")
    //通过在该阶段生命周期中进行设置,以便设置回退后的页面的显示
    //注:getCurrentPages()函数是一个全局的函数,用来获取现在
    //栈中的活动的页面
    var pages = getCurrentPages()
    console.log(pages)
    var backpage = pages[pages.length - 2]
    backpage.setData({
      info: '嘻嘻嘻'
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})