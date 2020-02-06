// export default function newReqMethod(options) {
//   return new Promise((resolve, reject) => {
//     var newurl = options.url
//     var newmethod = options.method
//     var newdata = options.data

//     //下面我们对原生的wx.request进行封装
//     wx.request({
//       url: newurl,
//       data: newdata,
//       method: newmethod,

//       success: function(res) {
//         resolve(res)
//       },

//       fail: function(err) {
//         reject(err)
//       }

//     })
//   })
// }

// 或者我们可以使用更为简洁的写法

export default function newReqMethod(options) {
  return new Promise((resolve, reject) => {
    var newurl = options.url
    var newmethod = options.method
    var newdata = options.data

    //下面我们对原生的wx.request进行封装
    wx.request({
      url: newurl,
      data: newdata,
      method: newmethod,

      success: resolve,

      fail: reject

    })
  })
}