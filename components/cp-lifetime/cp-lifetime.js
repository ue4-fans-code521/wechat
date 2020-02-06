// components/cp-lifetime/cp-lifetime.js
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

  },


  //有关在自定义组件中监测引用页面的声明周期的函数
  pageLifetimes: {
    show() {
      console.log("页面-show")
    },

    hide() {
      console.log("页面-hide")
    },

    resize() {
      console.log("页面-hide")

    }
  },

  //自定义组件自己声明周期监测函数
  lifetimes: {
    created() {
      console.log("自定义组件-created")
    },

    attached() {
      console.log("自定义组件-attached")
    },

    ready() {
      console.log("自定义组件-ready")
    },

    moved() {
      console.log("自定义组件-moved")
    },

    detached() {
      console.log("自定义组件-detached")
    }
  }


})