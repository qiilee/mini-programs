var typelist = require('../../../utils/searchtypelist.js');
Page({
    data: {
        tab: 1,
        value: "",
        tabs: {},
        recent:[1,2,3]
    },
    onLoad: function (options) {
        console.log(typelist)
        this.setData({
            tabs: typelist,
            tab: { tab: typelist[0].type, index: 0 },
        })
    },
    inputext: function (e) {
        var name = e.detail.value;
        console.log(name)
        this.setData({ value: name });
    },
    search: function (e) {
        var name = e.detail.value.name;
        console.log(name);
        var index = this.data.tab.index;
        var curtab =typelist[index]
        var that = this;
        this.setData({
            tabs: typelist
        })
        this.httpsearch(name,curtab.offset,this.data.tab.tab, function (res) {
            curtab.relist = res;
            curtab.loading=true;
            var tl=typelist;
            tl[index]=curtab;
            that.setData({
                tabs:tl
            })
        })
    },
    loadresult:function(e){
        var data=e.currentTarget.dataset;
        var index=data.index,
            type=data.type
    },
    httpsearch: function (name, offset,type, cb) {
        wx.request({
            url: 'https://n.sqaiyan.com/search',
            data: {
                name: name,
                offset: offset,
                limit: 20,
                type:type
            },
            method: 'GET',
            success: function (res) {
               cb && cb(res.data)
            }
        })
    },
    tabtype: function (e) {
        var index=e.currentTarget.dataset.index;
        var curtab=this.data.tabs[index];
        var that=this;
        if(!curtab.loading){
            this.httpsearch(this.data.value,curtab.offset,this.data.tab.tab, function (res) {
                curtab.relist = res;
                curtab.loading=true;
                var tl=typelist;
                tl[index]=curtab;
                that.setData({
                    tabs:tl
                })
            })
        }
        this.setData({
            tab:{
                tab:e.currentTarget.dataset.tab,
                index:1+index
            }
        })
    }
})