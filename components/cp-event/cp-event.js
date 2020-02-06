// components/cp-event/cp-event.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handletap() {
      // console.log("天妒英才")
      // 为了把自定义组件内的点击事件传播到引用页面,并被其捕获
      this.triggerEvent("bubble",{age:99},{})
    }
  },
})