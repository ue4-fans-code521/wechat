// pages/image/image.js
Page({
  data: {
    imagePath: []
  },

  imgClk() {
    wx.chooseImage({
      success: (res) => {
        // console.log("choose image")
        // console.log(res)
        //选中图片的地址会放在tempFilePaths[]数组之中
        const imgPath = res.tempFilePaths[0]
        this.setData({
          imagePath: imgPath
        })

      },
    })
  },

  // 图片加载完成会触发事件bindload事件，进而会调用相应的回调函数.
  handleLoadOver() {
    console.log("图片加载完成")
  }

})