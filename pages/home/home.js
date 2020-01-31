Page({
  data: {
    name: "iwen",
    age: 20,
    count: 0,
    animals: [{
        name: "pig",
        color: "black",
        age: 2
      },
      {
        name: "cat",
        color: "white",
        age: 10
      },
      {
        name: "dog",
        color: "bk",
        age: 5
      },
      {
        name: "cow",
        color: "brown",
        age: 3
      }
    ]
  },

  addclk() {
    // console.log("按键点击事件发生~~")
    this.setData({
      count: this.data.count + 1
    })
  },

  subclk() {
    // console.log("按键点击事件发生~~")
    this.setData({
      count: this.data.count - 1
    })

  },

})