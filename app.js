App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function(options) {
    //也可以通过onLaunch()生命周期函数的参数获取用户进入小程序的场景 scence
    // console.log(options)
    //获取用户的授权信息---但是使用wx.getUserInfo()以后可能会被舍弃
    // wx.getUserInfo({
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */

  //小程序注册App.js中所执行的一些初始化的操作
  //1.获取用户进入小程序的场景
  onShow: function(options) {
    // console.log(options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {

  },
  //我们还是可以在app.js文件中定义全局的数据-因为App对象是一个全局(所有的页面
  // )都可以共享其数据的单例对象.
  CommonData: {
    name: 'iwen',
    age: 123,
    country: 'UK'
  }
})