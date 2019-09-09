const app = getApp()

Page({

  data: {
    userInfo: {}, //用户信息
    maskHidden: false,
    cardCode: "../../images/ewm.png",   //二维码
    avatarUrl: '',
    taskCouponId:'',
    employeeId:'',
    currentTab: 0,
    cardImgSrc: '',  // 背景图
    cardArr: [{
      id: '01',
      img: '../../images/card-tp01.jpg'
    }, {
      id: '02',
      img: '../../images/card-tp02.jpg'
    }, {
      id: '03',
      img: '../../images/card-tp03.jpg'
    }, {
      id: '04',
      img: '../../images/card-tp04.jpg'
    }, {
      id: '05',
      img: '../../images/card-tp05.jpg'
    }, {
      id: '06',
      img: '../../images/card-tp06.jpg'
    }, {
      id: '07',
      img: '../../images/card-tp07.jpg'
    }, {
      id: '08',
      img: '../../images/card-tp08.jpg'
    },
    ],
  },
  onLoad: function (options) {
    this.data.employeeId = wx.getStorageSync('employeeId');
    this.data.taskCouponId = options.taskCouponId;
    this.defaultFirstShow();
    
    //用户信息
    app.getUserInfo( userInfo => {
      this.setData({
        userInfo: userInfo,
      })
      wx.downloadFile({
        url: userInfo.avatarUrl,
        success: res => {
          if (res.statusCode === 200) {
            this.setData({
              avatarUrl: res.tempFilePath
            });
          }
        }, fail: res => {
          console.log(res);
        }
      });
    })
  },
  onShow: function () {
    // this.shakeFun()
  },
  //卡片默认显示第一张
  defaultFirstShow() {
    let that = this,
    defaultCardImgSrc = that.data.cardArr[0].img;
    that.setData({
      cardImgSrc: defaultCardImgSrc
    })
  },
  swichNav(e) {
    var that = this,
      cur = e.target.dataset.current,
      src = e.target.dataset.src;
    if (that.data.currentTab == cur) {
      return false;
    } else {
      that.setData({
        currentTab: cur
      })
    }
    that.setData({
      cardImgSrc: src
    })
  },

 //将canvas转换为图片保存到本地，然后将图片路径传给image图片的src
  createNewImg: function () {
    var that = this;
    var context = wx.createCanvasContext('mycanvas');
    context.setFillStyle("#ffffff")   //填充整体的色调#697fde  ffe200
    // 设置上部的图片 /images/gobg.png
    context.fillRect(0, 0, 375, 667)
    var path = that.data.cardImgSrc;
    var path1 = that.data.cardCode; // that.data.userInfo['avatarUrl'] 用户二维码
    var path2 = that.data.avatarUrl;

    context.drawImage(path, 48, 20, 280, 460);
    
    context.drawImage(path1, 230, 490, 100, 100);
    
    context.save()
    context.beginPath()
    context.arc(280, 541, 20, 0, 2*Math.PI)
    context.clip()
    context.drawImage(path2, 260, 522, 40, 40)
    context.restore()

    //绘制标语
    context.setFontSize(17);
    context.setFillStyle('red');
    context.fillText(that.data.userInfo['nickName'], 54, 530);
    context.stroke();

    //绘制标语
    context.setFontSize(16);
    context.setFillStyle('#333333');
    context.fillText("邀请你进入海贼的世界", 54, 560);
    context.stroke();

    //绘制提醒
    context.setFontSize(14);
    context.setFillStyle('#333333');
    context.setTextAlign('center');
    context.fillText('长按识别二维码', 185, 650);
    context.stroke();

    context.draw();
    //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
    setTimeout(function () {
      wx.canvasToTempFilePath({
        canvasId: 'mycanvas',
        success: function (res) {
          var tempFilePath = res.tempFilePath;
          that.setData({
            imagePath: tempFilePath,
            canvasHidden: true
          });
        },
        fail: function (res) {
          console.log(res);
        }
      });
    }, 200);
  },
  // createNewImg: function () {
  //   var that = this;
  //   const ctx = wx.createCanvasContext('mycanvas')
  //   ctx.setFillStyle("#ffffff")
  //   ctx.fillRect(0, 0, 375, 667)
  //   var path = that.data.cardImgSrc;
  //   var path1 = that.data.cardCode;
  //   var path2 = that.data.userInfo['avatarUrl'];
  //   wx.downloadFile({
  //     url: path2,
  //     success: function(res) {
  //       ctx.drawImage(path, 48, 20, 280, 450);
  //       ctx.drawImage(path1, 230, 490, 100, 100);
  //       ctx.save()
  //       ctx.beginPath()
  //       ctx.arc(281, 541, 20, 0, 2*Math.PI)
  //       ctx.clip()
  //       ctx.drawImage(res.tempFilePath, 260, 522, 40, 40)
  //       ctx.restore()
  //       //绘制标语
  //       ctx.setFontSize(17);
  //       ctx.setFillStyle('red');
  //       ctx.fillText(that.data.userInfo['nickName'], 54, 530);
  //       ctx.stroke();

  //       //绘制标语
  //       ctx.setFontSize(16);
  //       ctx.setFillStyle('#333333');
  //       ctx.fillText("邀请你进入海贼的世界", 54, 560);
  //       ctx.stroke();

  //       //绘制提醒
  //       ctx.setFontSize(14);
  //       ctx.setFillStyle('#333333');
  //       ctx.setTextAlign('center');
  //       ctx.fillText('长按识别二维码', 185, 650);
  //       ctx.stroke();
  //       ctx.draw()

  //       //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
  //       setTimeout(function () {
  //         wx.canvasToTempFilePath({
  //           canvasId: 'mycanvas',
  //           success: function (res) {
  //             var tempFilePath = res.tempFilePath;
  //             that.setData({
  //               imagePath: tempFilePath,
  //               canvasHidden: true
  //             });
  //           },
  //           fail: function (res) {
  //             console.log(res);
  //           }
  //         });
  //       }, 200);
  //     }
  //   })
  // },
  //点击保存到相册
  save: function () {
    var that = this
    wx.saveImageToPhotosAlbum({
      filePath: that.data.imagePath,
      success(res) {
        wx.showModal({
          content: '图片已保存到相册，赶紧晒一下吧~',
          showCancel: false,
          confirmText: '好的',
          confirmColor: '#333',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定');
              /* 该隐藏的隐藏 */
              that.setData({
                maskHidden: false
              })
            }
          }, fail: function (res) {
            console.log(11111)
          }
        })
      }
    })
  },
  // 选取本地图片或者拍照图片
  getImage: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: function (response) {
            _this.setData({
              cardImgSrc: res.tempFilePaths[0],
              currentTab: 99
            })
          }
        })
      }
    })
  },

  //点击生成
  formSubmit: function (e) {
    var that = this;
    this.setData({
      maskHidden: false
    });
    wx.showToast({
      title: '生成中...',
      icon: 'loading',
      duration: 1000
    });
    setTimeout(function () {
      wx.hideToast()
      that.createNewImg();
      wx.vibrateLong();
      that.setData({
        maskHidden: true
      });
    }, 1000)
  },

  // 点击关闭生成的海报
  closeThisPostBtn(){
    console.log('关闭海报');
    this.setData({
      maskHidden: false
    });
  },
   /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    return {
      title: "快来扫这个码吧",
      success: function (res) {
        console.log(res, "转发成功")
      },
      fail: function (res) {
        console.log(res, "转发失败")
      }
    }
  },
  
  // shakeFun() { // 摇一摇方法封装
  //   let _this = this;
  //   var numX = 1 //x轴
  //   var numY = 1 // y轴
  //   var numZ = 0 // z轴
  //   var stsw = true // 开关，保证在一定的时间内只能是一次，摇成功
  //   var positivenum = 0 //正数 摇一摇总数
  //   var audioCtx = wx.createAudioContext('myAudio') //音频，用于摇成功提示
  //   wx.onAccelerometerChange(function (res) {
  //     console.log(res)  //小程序api 加速度计
  //     if (numX < res.x && numY < res.y) {  //个人看法，一次正数算摇一次，还有更复杂的
  //       positivenum++
  //       setTimeout(() => { positivenum = 0 }, 1000) //计时两秒内没有摇到指定次数，重新计算
  //     }
  //     if (numZ < res.z || numY < res.y) { //可以上下摇，上面的是左右摇
  //       positivenum++
  //       setTimeout(() => { positivenum = 0 }, 1000) //计时两秒内没有摇到指定次数，重新计算
  //     }
  //     if (positivenum == 2 && stsw) { //是否摇了指定的次数，执行成功后的操作
  //       stsw = false
  //       _this.formSubmit();
  //       console.log('摇一摇成功')
  //       setTimeout(() => {
  //         positivenum = 0 // 摇一摇总数，重新0开始，计算
  //         stsw = true
  //       }, 2000)
  //     } else {
  //       console.log('没触发')
  //     }
  //   })
  // },
})