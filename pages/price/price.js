// 引入SDK核心类 https://lbs.qq.com/dev/console/key/setting?key=VAOBZ-NLP6P-TBTD3-VXSUR-TEPTZ-IGFD3
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers:[{
      callout: {
        content: '点我导航',
        color:'#08af75',
        padding: 5,
        borderRadius: 2,
        display: 'ALWAYS'
      },
      id: "0",      //标记点id
      iconPath: "/images/location.png",    //标记点图标
      longitude: 117.4696070000,    //中心经度
      latitude: 40.0852040000,         //中心纬度
      width:30,              //标记点图标宽
      height:30             //标记点图标高
}]
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