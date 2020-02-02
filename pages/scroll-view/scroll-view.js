// pages/scroll-view/scroll-view.js
Page({

  
  data: {

  },

// 我们最为关注的还是event.detail.scrollTop
// 就是我们已经滚动的顶部距离
  handleScroll(event){
      console.log("局部滚动触发事件")
      console.log(event.detail.scrollTop)
  }

})