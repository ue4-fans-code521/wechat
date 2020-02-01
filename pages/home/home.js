//为了引用app.js中所定义的全局的变量,首先我们应该引入全局的共享的单例实例对象
//app,之后再引用其中定义的全局的共享数据 。
const appInstance = getApp()
// console.log(appInstance)
//打印定义在app.js中的共享数据
// console.log(appInstance.CommonData)



Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success:(res)=>{
        console.log(res.data)
        //将请求到的服务器的数据保存到data中的messages中去.
        //并且在页面中展现出来
        const rs=res.data
        this.setData({
          messages:rs
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onLoonUnloadad")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  },

//使用button标签的方式获取用户的授权信息
  handleGetInfo(event){
    console.log(event)
  },

  //自定义监听点击事件
  simpleClk(){
    console.log("简单事件点击")
  }
})