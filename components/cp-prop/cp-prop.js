// components/prop/prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '默认值',
      observer: function(newval, oldval) {
        console.log(newval, oldval)
      }
    }
  },

  externalClasses:[
    'extcontent'
  ],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})