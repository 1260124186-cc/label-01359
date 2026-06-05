var mockData = require('../../mock/data.js');
var app = getApp();

Page({
  data: {
    personality: '',
    description: '',
    products: [],
    reasons: [],
    loading: true,
    answers: {}
  },

  onLoad: function(options) {
    if (options.answers) {
      try {
        var answers = JSON.parse(decodeURIComponent(options.answers));
        this.setData({ answers: answers });
        this.loadRecommendation(answers);
      } catch (e) {
        console.error('解析测评答案失败:', e);
        this.loadDefaultRecommendation();
      }
    } else {
      this.loadDefaultRecommendation();
    }
  },

  loadRecommendation: function(answers) {
    var that = this;
    setTimeout(function() {
      try {
        var result = mockData.getQuizRecommendation(answers);
        that.setData({
          personality: result.personality,
          description: result.description,
          products: result.products,
          reasons: result.reasons,
          loading: false
        });
      } catch (e) {
        console.error('获取推荐失败:', e);
        that.loadDefaultRecommendation();
      }
    }, 800);
  },

  loadDefaultRecommendation: function() {
    var defaultResult = mockData.quizDefaultRecommendation;
    this.setData({
      personality: defaultResult.personality,
      description: defaultResult.description,
      products: defaultResult.products.map(function(id) {
        return mockData.getProductById(id);
      }).filter(Boolean),
      reasons: defaultResult.reasons,
      loading: false
    });
  },

  onProductTap: function(e) {
    var item = e.currentTarget.dataset.item;
    if (item) {
      wx.navigateTo({
        url: '/pages/product-detail/product-detail?id=' + item.id
      });
    }
  },

  onRetake: function() {
    wx.redirectTo({
      url: '/pages/quiz/quiz'
    });
  },

  onGoHome: function() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  onAddToCart: function(e) {
    var item = e.currentTarget.dataset.item;
    if (!item) return;

    if (item.stock <= 0) {
      app.showToast('商品已售罄');
      return;
    }

    if (!app.globalData.isLogin) {
      wx.showModal({
        title: '提示',
        content: '请先登录后再加入购物车',
        confirmText: '去登录',
        confirmColor: '#E91E63',
        success: function(res) {
          if (res.confirm) {
            var userInfo = mockData.userInfo;
            wx.setStorageSync('userInfo', userInfo);
            wx.setStorageSync('token', 'mock_token_' + Date.now());
            app.globalData.isLogin = true;
            app.globalData.userInfo = userInfo;
            app.showToast('登录成功', 'success');
          }
        }
      });
      return;
    }

    try {
      var cart = wx.getStorageSync('cart') || [];
      var existIndex = -1;
      for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === item.id) {
          existIndex = i;
          break;
        }
      }

      if (existIndex > -1) {
        if (cart[existIndex].quantity + 1 > item.stock) {
          app.showToast('库存不足');
          return;
        }
        cart[existIndex].quantity += 1;
      } else {
        cart.push(Object.assign({}, item, { quantity: 1, selected: true }));
      }

      wx.setStorageSync('cart', cart);
      app.updateCartCount(cart.length);

      wx.showToast({
        title: '加入购物车成功',
        icon: 'success',
        duration: 1500
      });
    } catch (error) {
      console.error('添加购物车失败:', error);
      app.showToast('添加失败，请重试');
    }
  },

  onShareAppMessage: function() {
    return {
      title: '我的花艺性格是「' + this.data.personality + '」🌸 来测测你的！',
      path: '/pages/quiz/quiz',
      imageUrl: '/images/share/share-cover.png'
    };
  }
});
