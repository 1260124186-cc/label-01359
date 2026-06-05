var mockData = require('../../mock/data.js');
var app = getApp();

Page({
  data: {
    questions: [],
    currentStep: 0,
    answers: {},
    currentQuestion: null,
    currentOptions: [],
    selectedOption: '',
    progress: 25,
    animating: false,
    showIntro: true
  },

  onLoad: function() {
    this.setData({
      questions: mockData.quizQuestions
    });
  },

  onStartQuiz: function() {
    var firstQuestion = this.data.questions[0];
    this.setData({
      showIntro: false,
      currentQuestion: firstQuestion,
      currentOptions: firstQuestion.options,
      progress: 25
    });
  },

  onSelectOption: function(e) {
    if (this.data.animating) return;

    var optionId = e.currentTarget.dataset.id;
    var questionId = this.data.currentQuestion.id;
    var answers = this.data.answers;
    answers[questionId] = optionId;

    this.setData({
      selectedOption: optionId,
      answers: answers,
      animating: true
    });

    var that = this;
    setTimeout(function() {
      that.goNext();
    }, 400);
  },

  goNext: function() {
    var nextStep = this.data.currentStep + 1;

    if (nextStep >= this.data.questions.length) {
      this.goResult();
      return;
    }

    var nextQuestion = this.data.questions[nextStep];
    this.setData({
      currentStep: nextStep,
      currentQuestion: nextQuestion,
      currentOptions: nextQuestion.options,
      selectedOption: '',
      progress: (nextStep + 1) * 25,
      animating: false
    });
  },

  goResult: function() {
    var answers = this.data.answers;
    var answerStr = JSON.stringify(answers);
    wx.redirectTo({
      url: '/pages/quiz-result/quiz-result?answers=' + encodeURIComponent(answerStr)
    });
  },

  onGoBack: function() {
    if (this.data.currentStep === 0) {
      wx.navigateBack();
      return;
    }

    var prevStep = this.data.currentStep - 1;
    var prevQuestion = this.data.questions[prevStep];
    var prevAnswer = this.data.answers[prevQuestion.id] || '';

    this.setData({
      currentStep: prevStep,
      currentQuestion: prevQuestion,
      currentOptions: prevQuestion.options,
      selectedOption: prevAnswer,
      progress: (prevStep + 1) * 25,
      animating: false
    });
  },

  onShareAppMessage: function() {
    return {
      title: '来测测哪款花最适合你 🌸',
      path: '/pages/quiz/quiz',
      imageUrl: '/images/share/share-cover.png'
    };
  }
});
