Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:'哈哈哈'
  },

  handleJump(){
    wx.navigateTo({
      url: '/pages/detail/detail?name=trump',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  
})