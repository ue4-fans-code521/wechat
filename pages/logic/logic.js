// pages/logic/logic.js
Page({

  data: {
    isshow: false,
    score: 70
  },

  incstep() {
    this.setData({
      score: this.data.score + 5
    })
  }

})