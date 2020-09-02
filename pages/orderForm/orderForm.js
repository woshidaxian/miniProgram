// pages/orderForm/orderForm.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        indexImg:'../../img/grey-index.png',
        dingImg:'../../img/blue-d.png',
        myImg:'../../img/grey-my.png',
        fabuData: [
            {
                id: 1,
                imgsrc: '../../img/icon.png',
                title: '001-浙江水利水电学院',
                day: '2018-07-10',
                time: '10:49',
                status: '待取药',
            },
            {
                id: 2,
                imgsrc: '../../img/icon.png',
                title: '001-浙江水利水电学院',
                day: '2018-07-10',
                time: '10:49',
                status: '待取药',
            },
            {
                id: 3,
                imgsrc: '../../img/icon.png',
                title: '001-浙江水利水电学院',
                day: '2018-07-10',
                time: '10:49',
                status: '已取药',
            },
            {
                id: 4,
                imgsrc: '../../img/icon.png',
                title: '001-浙江水利水电学院',
                day: '2018-07-10',
                time: '10:49',
                status: '已取药',
            },
            {
                id: 5,
                imgsrc: '../../img/icon.png',
                title: '001-浙江水利水电学院',
                day: '2018-07-10',
                time: '10:49',
                status: '已取药',
            },
            {
                id: 6,
                imgsrc: '../../img/icon.png',
                title: '001-浙江水利水电学院',
                day: '2018-07-10',
                time: '10:49',
                status: '已取药',
            },
            {
                id: 7,
                imgsrc: '../../img/icon.png',
                title: '001-浙江水利水电学院',
                day: '2018-07-10',
                time: '10:49',
                status: '已取药',
            },
            {
                id: 8,
                imgsrc: '../../img/icon.png',
                title: '001-浙江水利水电学院',
                day: '2018-07-10',
                time: '10:49',
                status: '已取药',
            },
            {
                id: 9,
                imgsrc: '../../img/icon.png',
                title: '001-浙江水利水电学院',
                day: '2018-07-10',
                time: '10:49',
                status: '已取药',
            }
        ],
    },
    navToIndex:function(){
        wx.redirectTo({
            url: './../index/index',
        })
    },
    navToMy:function(){
        wx.redirectTo({
            url: './../my/my',
        })
    },
    commentThis: function (event) {
        console.log(event.currentTarget.dataset.id);
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

    }
})