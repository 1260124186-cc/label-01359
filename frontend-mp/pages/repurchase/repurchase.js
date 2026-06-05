var app = getApp();
var mockData = require('../../mock/data.js');

Page({
  data: {
    recommendations: [],
    nearRecommendations: [],
    upcomingFestivals: [],
    showCardModal: false,
    selectedCard: null,
    selectedRecommendation: null,
    cardOptions: []
  },

  onLoad: function() {
    this.loadData();
  },

  onShow: function() {
    this.loadData();
  },

  loadData: function() {
    var recommendations = mockData.getRepurchaseRecommendations();
    var nearRecommendations = recommendations.filter(function(r) {
      return r.isNear;
    });
    var upcomingFestivals = mockData.getUpcomingFestivals(30);

    this.setData({
      recommendations: recommendations,
      nearRecommendations: nearRecommendations,
      upcomingFestivals: upcomingFestivals
    });
  },

  onOneKeyRepurchase: function(e) {
    var index = e.currentTarget.dataset.index;
    var recommendation = this.data.nearRecommendations[index] || this.data.recommendations[index];
    if (!recommendation) return;

    var product = recommendation.originalProduct;
    if (!product) {
      app.showToast('商品已下架');
      return;
    }

    var address = recommendation.address;
    var greetingCard = recommendation.greetingCard;
    var histOrder = recommendation.historicalOrder;

    var params = [
      'productId=' + product.id,
      'quantity=1',
      'fromRepurchase=true',
      'addressId=' + (address ? address.id : ''),
      'greetingCardId=' + (greetingCard ? greetingCard.id : ''),
      'greetingContent=' + encodeURIComponent(histOrder.greetingCardContent || ''),
      'recipientName=' + encodeURIComponent(histOrder.recipientName || ''),
      'occasionName=' + encodeURIComponent(recommendation.occasionName)
    ].join('&');

    wx.navigateTo({
      url: '/pages/order-confirm/order-confirm?' + params
    });
  },

  onUpgradeRepurchase: function(e) {
    var index = e.currentTarget.dataset.index;
    var recommendation = this.data.nearRecommendations[index] || this.data.recommendations[index];
    if (!recommendation) return;

    var product = recommendation.upgradedProduct || recommendation.originalProduct;
    if (!product) {
      app.showToast('商品已下架');
      return;
    }

    var address = recommendation.address;
    var greetingCard = recommendation.greetingCard;
    var histOrder = recommendation.historicalOrder;

    var params = [
      'productId=' + product.id,
      'quantity=1',
      'fromRepurchase=true',
      'isUpgrade=true',
      'addressId=' + (address ? address.id : ''),
      'greetingCardId=' + (greetingCard ? greetingCard.id : ''),
      'greetingContent=' + encodeURIComponent(histOrder.greetingCardContent || ''),
      'recipientName=' + encodeURIComponent(histOrder.recipientName || ''),
      'occasionName=' + encodeURIComponent(recommendation.occasionName)
    ].join('&');

    wx.navigateTo({
      url: '/pages/order-confirm/order-confirm?' + params
    });
  },

  onPreviewCard: function(e) {
    var index = e.currentTarget.dataset.index;
    var recommendation = this.data.nearRecommendations[index] || this.data.recommendations[index];
    if (!recommendation || !recommendation.greetingCard) return;

    var category = recommendation.historicalOrder.category;
    var cardOptions = mockData.getGreetingCardsByCategory(category);

    this.setData({
      showCardModal: true,
      selectedCard: recommendation.greetingCard,
      selectedRecommendation: recommendation,
      cardOptions: cardOptions
    });
  },

  onSelectCard: function(e) {
    var cardId = e.currentTarget.dataset.id;
    var card = null;
    for (var i = 0; i < this.data.cardOptions.length; i++) {
      if (this.data.cardOptions[i].id === cardId) {
        card = this.data.cardOptions[i];
        break;
      }
    }
    if (card) {
      var recommendation = this.data.selectedRecommendation;
      recommendation.greetingCard = card;
      this.setData({
        selectedCard: card,
        selectedRecommendation: recommendation
      });
    }
  },

  onCloseCardModal: function() {
    this.setData({ showCardModal: false });
  },

  onEditCardContent: function(e) {
    var content = e.detail.value;
    var card = this.data.selectedCard;
    if (card) {
      card.content = content;
      this.setData({ selectedCard: card });
    }
  },

  onConfirmCard: function() {
    var recommendation = this.data.selectedRecommendation;
    if (recommendation && this.data.selectedCard) {
      recommendation.greetingCard = this.data.selectedCard;
      recommendation.historicalOrder.greetingCardContent = this.data.selectedCard.content;
      this.setData({
        showCardModal: false,
        selectedRecommendation: recommendation
      });
      app.showToast('贺卡已更新', 'success');
    }
  },

  onProductTap: function(e) {
    var productId = e.currentTarget.dataset.id;
    if (productId) {
      wx.navigateTo({
        url: '/pages/product-detail/product-detail?id=' + productId
      });
    }
  },

  onViewAllHistory: function() {
    wx.navigateTo({
      url: '/pages/order-list/order-list?tab=completed'
    });
  }
});
