// pages/subscription/subscription.js - 我的提醒页面
var app = getApp();
var mockData = require('../../mock/data.js');

Page({
  data: {
    activeTab: 'all',
    tabs: [
      { id: 'all', name: '全部' },
      { id: 'restock', name: '到货提醒' },
      { id: 'priceDrop', name: '降价提醒' }
    ],
    subscriptions: [],
    filteredList: [],
    notifications: [],
    showNotificationModal: false,
    notificationDetail: null
  },

  onLoad: function() {
    this.loadSubscriptions();
  },

  onShow: function() {
    this.loadSubscriptions();
    this.checkNotifications();
  },

  loadSubscriptions: function() {
    var subscriptions = wx.getStorageSync('subscriptions') || [];
    var that = this;
    subscriptions.forEach(function(sub) {
      var product = mockData.getProductById(sub.productId);
      if (product) {
        sub.currentPrice = product.price;
        sub.currentStock = product.stock;
        sub.isAvailable = product.stock > 0;
        if (sub.type === 'priceDrop' && product.price < sub.subscribePrice) {
          sub.priceDropped = true;
          sub.priceDropAmount = sub.subscribePrice - product.price;
        }
      }
    });

    that.setData({ subscriptions: subscriptions });
    that.filterList();
  },

  filterList: function() {
    var subscriptions = this.data.subscriptions;
    var activeTab = this.data.activeTab;
    var filteredList;

    if (activeTab === 'all') {
      filteredList = subscriptions;
    } else {
      filteredList = subscriptions.filter(function(s) {
        return s.type === activeTab;
      });
    }

    this.setData({ filteredList: filteredList });
  },

  onTabChange: function(e) {
    var tabId = e.currentTarget.dataset.id;
    this.setData({ activeTab: tabId });
    this.filterList();
  },

  onCancelSubscription: function(e) {
    var that = this;
    var subId = e.currentTarget.dataset.id;
    var subName = e.currentTarget.dataset.name;

    wx.showModal({
      title: '取消提醒',
      content: '确定要取消「' + subName + '」的提醒吗？',
      confirmColor: '#E91E63',
      success: function(res) {
        if (res.confirm) {
          var subscriptions = wx.getStorageSync('subscriptions') || [];
          var index = -1;
          for (var i = 0; i < subscriptions.length; i++) {
            if (subscriptions[i].id === subId) {
              index = i;
              break;
            }
          }
          if (index > -1) {
            subscriptions.splice(index, 1);
            wx.setStorageSync('subscriptions', subscriptions);
            that.loadSubscriptions();
            app.showToast('已取消提醒');
          }
        }
      }
    });
  },

  onGoToProduct: function(e) {
    var productId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/product-detail/product-detail?id=' + productId
    });
  },

  checkNotifications: function() {
    var notifications = wx.getStorageSync('notifications') || [];
    if (notifications.length > 0) {
      this.setData({
        notifications: notifications,
        showNotificationModal: true
      });
    }
  },

  onCloseNotification: function() {
    wx.removeStorageSync('notifications');
    this.setData({
      showNotificationModal: false,
      notifications: []
    });
  },

  onNotificationAction: function(e) {
    var productId = e.currentTarget.dataset.id;
    wx.removeStorageSync('notifications');
    this.setData({
      showNotificationModal: false,
      notifications: []
    });
    wx.navigateTo({
      url: '/pages/product-detail/product-detail?id=' + productId
    });
  },

  onSimulateRestock: function() {
    var that = this;
    wx.showModal({
      title: '模拟到货',
      content: '将所有售罄商品设为有库存，模拟到货通知？',
      confirmColor: '#E91E63',
      success: function(res) {
        if (res.confirm) {
          var subscriptions = wx.getStorageSync('subscriptions') || [];
          var notifications = [];
          subscriptions.forEach(function(sub) {
            if (sub.type === 'restock' && sub.status === 'active') {
              sub.status = 'notified';
              notifications.push({
                productId: sub.productId,
                productName: sub.productName,
                productImage: sub.productImage,
                type: 'restock',
                message: '您关注的「' + sub.productName + '」已到货，快来选购吧！',
                time: new Date().toLocaleString()
              });
            }
          });
          wx.setStorageSync('subscriptions', subscriptions);
          if (notifications.length > 0) {
            wx.setStorageSync('notifications', notifications);
            that.setData({
              notifications: notifications,
              showNotificationModal: true
            });
          } else {
            app.showToast('没有待触发的到货提醒');
          }
          that.loadSubscriptions();
        }
      }
    });
  },

  onSimulatePriceDrop: function() {
    var that = this;
    wx.showModal({
      title: '模拟降价',
      content: '将所有降价提醒商品的当前价格设为订阅价格的8折，模拟降价通知？',
      confirmColor: '#E91E63',
      success: function(res) {
        if (res.confirm) {
          var subscriptions = wx.getStorageSync('subscriptions') || [];
          var notifications = [];
          subscriptions.forEach(function(sub) {
            if (sub.type === 'priceDrop' && sub.status === 'active') {
              sub.status = 'notified';
              notifications.push({
                productId: sub.productId,
                productName: sub.productName,
                productImage: sub.productImage,
                type: 'priceDrop',
                oldPrice: sub.subscribePrice,
                newPrice: Math.round(sub.subscribePrice * 0.8),
                message: '您关注的「' + sub.productName + '」已降价，从¥' + sub.subscribePrice + '降至¥' + Math.round(sub.subscribePrice * 0.8),
                time: new Date().toLocaleString()
              });
            }
          });
          wx.setStorageSync('subscriptions', subscriptions);
          if (notifications.length > 0) {
            wx.setStorageSync('notifications', notifications);
            that.setData({
              notifications: notifications,
              showNotificationModal: true
            });
          } else {
            app.showToast('没有待触发的降价提醒');
          }
          that.loadSubscriptions();
        }
      }
    });
  }
});
