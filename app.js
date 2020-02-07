App({

  globalData: {
    token: '',
  },
  onLaunch: function() {
    //我们先来获取到存储在当地缓存中的token 
    var token = wx.getStorageSync('token')
    //下面我们来判断是否存在token或者是否已经过期
    //如果存在,我们还要继续验证是否有效
    if (token && token.length !== 0) {
      this.checkToken(token) //验证是否还在有效期
    } else {
      this.login() //不存在token,就可以进行登录了.
    }

    // wx.login({
    //   //code只有五分钟的有效期
    //   success: function(res) {
    //     console.log(res)

    //   }
    // })
  },

  checkToken(token) {
    console.log("验证是否有效......")
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        if (!res.data.errCode) {
          console.log("token有效~~")
          //如果成功的话就可以保存到globalData中去
          this.globalData.token = token
        } else {
          this.login() //如果已经失效,就可以重新登录
        }
      },
      fail: (err) => {
        console.log("验证失败")
      }
    })
  },

  login() {
    console.log("尝试登录......")
    wx.login({
      success: (res) => {
        const code = res.code
        //把所得到的的code发送给登录接口
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            //把拿到的数据保存到当地的缓存以及定义的全局的变量globalData中去
            const token = res.data.token
            //把获得的token保存到全局变量globalData中
            this.globalData.token = token
            //而且需要保存一份到当地的数据缓存
            wx.setStorageSync('token', token)
          }
        })
      }
    })
  }

})