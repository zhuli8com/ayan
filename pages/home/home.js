// 引入SDK核心类 https://lbs.qq.com/dev/console/key/setting?key=VAOBZ-NLP6P-TBTD3-VXSUR-TEPTZ-IGFD3
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');

// 实例化API核心类
var demo = new QQMapWX({
  key: 'VAOBZ-NLP6P-TBTD3-VXSUR-TEPTZ-IGFD3' // 必填
});

// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "../../images/WechatIMG9740.jpeg",
      "../../images/WechatIMG9741.jpeg",
      "../../images/WechatIMG9742.jpeg",
      "../../images/WechatIMG9743.jpeg"
      // 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      // 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      // 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    current: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  swiperChange(e){
    this.setData({
      current: e.detail.current
    });
  },

  onSwiperTap: function (event) {
    // var id = event.target.dataset.Id;
    wx.navigateTo({
      url: '../webview/webview'
    })
  },

  goMap(e) {//https://developers.weixin.qq.com/community/servicemarket/detail/00024cc78b8140578af86e6905b415
    let plugin = requirePlugin('routePlan');
    let key = 'VAOBZ-NLP6P-TBTD3-VXSUR-TEPTZ-IGFD3';  //使用在腾讯位置服务申请的key
    let referer = '阿燕农家院';   //调用插件的app的名称
    let endPoint = JSON.stringify({  //终点
      'name': '阿燕农家院',
      'latitude': 40.0852040000,
      'longitude': 117.4696070000
    });
    wx.navigateTo({
      url: 'plugin://routePlan/index?navigation=1&key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    });
  },

  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '15620418398',
    })
  },
})