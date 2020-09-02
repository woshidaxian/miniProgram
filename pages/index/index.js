//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        addressImgSrc: '../../img/location.png',
        address: '001-浙江水利水电学院生活区北门',
        swiper_bg: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        scanImg:'../../img/scan.png',
        buyImg:'../../img/yao.png',
        huiImg:'../../img/hui.png',
        indexImg: '../../img/blue-index.png',
        dingImg:'../../img/grey-d.png',
        myImg: '../../img/grey-my.png'
    },
    navToOrderForm:function(){
        wx.redirectTo({
            url: './../orderForm/orderForm',
        })
    },
    navToMy: function () {
        wx.redirectTo({
            url: './../my/my',
        })
    },
    onLoad: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})