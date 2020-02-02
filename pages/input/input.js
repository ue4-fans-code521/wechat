// pages/input/input.js
Page({

  data: {

  },

handleInput(event){
  console.log("输入事件触发")
  console.log(event)
},

handleFocus(){
  console.log("获取焦点事件触发")
},

handleBlur(){
  console.log("失去焦点事件触发")
}

})