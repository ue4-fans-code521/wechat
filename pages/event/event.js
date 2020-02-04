// pages/event/event.js
Page({

  data: {
    goods: [
      'apple',
      'peach',
      'mango',
      'berry',
      'pairs',

    ]
  },

  handleTap() {
    console.log('handleTap')
  },

  handleTouchStart() {
    console.log('handleTouchStart')
  },

  handleTouchMove(event) {
    // console.log('handleTouchMove')
    console.log(event)
  },

  handleTouchEnd(event) {
    // console.log('handleTouchEnd')
    console.log(event)
  },

  handleLongPress() {
    console.log('handleLongPress')
  },

  handleevent(event) {
    console.log(event)
  },

  outerHandleTap(event) {
    console.log(event)
  },

  innerHandleTap(event) {
    console.log(event)
  },
  // 从wxml的点击事件中传递参数到js文件中来

  passParams(event) {
    // console.log(event)
    var res = event.target.dataset
    console.log(res.index)
    console.log(res.item)
    console.log(res.iwen)
  }
})