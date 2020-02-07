Page({
  handlePopupToast() {
    wx.showToast({
      title: 'toast弹窗',
      duration: 2000,
      mask: true,
      icon: 'success',
      success: function() {
        console.log("toast成功")
      },

      complete: function() {
        console.log("toast结束")
      }

    })
  },

  handlePopupModal() {
    wx.showModal({
      title: 'modal弹窗',
      content: '小样吧',
      showCancel: true,
      cancelColor: 'red',
      cancelText: '关闭',
      confirmColor: 'blue',
      confirmText: '打开',
      success: function(res) {
        // console.log("modal-success",res)
        if (res.confirm) {
          console.log("点击确认")
        }

        if (res.cancel) {
          console.log("点击取消")
        }
      },

      complete() {
        console.log("modal-complete")
      }
    })
  },

  // 对于showloading而言,它是不会有显示持续时间的,他会一直存在
  // 除非调用wx.hideloading方法
  handlePopupLoading() {
    wx.showLoading({
      title: '打转',
      mask: true,
      success: function() {
        console.log("showloading成功")
      },

      complete: function() {
        console.log("showloading结束")

      }
    })

    setTimeout(() => {
      wx.hideLoading()
    }, 5000)
  },

  handlePopupActionSheet() {
    wx.showActionSheet({
      itemList: [
        '黄瓜',
        '小白菜',
        '西红柿',
        '青椒',
        '韭菜',
        '茄子'
      ],

      itemColor: 'red',

      success: function(res) {
        // console.log("showactionsheet成功了")
        //拿到点击的itemlist的item下标
        var idx = res.tapIndex
        console.log(res)

      },

      complete: function() {
        console.log("showactionsheet结束了")
      },

    })
  },

  onShareAppMessage: function(options) {
    return {
      title: '小马过河',
      imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580996494886&di=1699debe15dae1d84a512187aa3fb33a&imgtype=0&src=http%3A%2F%2Fwww.zhongguofeiyi.cn%2Fueditor%2Fphp%2Fupload%2Fimage%2F20161223%2F1482500899391244.jpg',
      path: "pages/about/about"
    }

  }
})