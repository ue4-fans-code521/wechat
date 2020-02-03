// pages/mustache/mustache.js
Page({

  data: {
    name: 'iwen',
    age: 12,
    nowtime: new Date().toLocaleString(),
    isactive: true,
    vcolor: 'purple',
    vsize: '40rpx'
  },

  onLoad() {
    setInterval(() => {
      this.setData({
        nowtime: new Date().toLocaleString()
      })
    }, 1000)
  },

  changeColor() {
    this.setData({
      isactive: !this.data.isactive
    })
  }

})