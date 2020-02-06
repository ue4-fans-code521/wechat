import newReqMethod from "../../netservice/netservice.js"

Page({

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    // 我们就可以使用自己封装的函数newReq进行网络上的请求了
    newReqMethod({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: 'mike',
        age: 24,
        country: 'UK',
        color:'brown'
      }

    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    // 1. 网络请求的原生api方法---已基本被废止--- 现在多半使用promise
    // 所以我们是有必要对原生的wx.request进行封装的
    // wx.request({
    //   // url: 'http://httpbin.org/get',
    //   url: 'http://httpbin.org/post',
    //   success: function(res) {
    //     console.log(res)
    //   },

    //   // method: 'get',
    //   method: 'post',

    //   data: {
    //     name: 'iwen',
    //     country: 'USA'
    //   },

    //   complete: function() {
    //     console.log("请求服务已完成")
    //   }
    // })
  },


})