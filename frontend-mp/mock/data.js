// mock/data.js - 模拟数据

/**
 * 轮播图数据
 */
const bannerList = [
  {
    id: 1,
    imageUrl: '/images/banner/banner1.png',
    linkUrl: '/pages/product-list/product-list?category=romantic',
    title: '浪漫告白季'
  },
  {
    id: 2,
    imageUrl: '/images/banner/banner2.png',
    linkUrl: '/pages/product-list/product-list?category=birthday',
    title: '生日特惠'
  },
  {
    id: 3,
    imageUrl: '/images/banner/banner3.png',
    linkUrl: '/pages/product-list/product-list?category=opening',
    title: '开业大吉'
  }
];

/**
 * 分类入口数据
 */
const categoryEntries = [
  {
    id: 'romantic',
    name: '浪漫告白',
    icon: '/images/icons/romantic.png',
    color: '#FF6B9D',
    bgColor: '#FFF0F5'
  },
  {
    id: 'birthday',
    name: '生日热荐',
    icon: '/images/icons/birthday.png',
    color: '#FF9F43',
    bgColor: '#FFF8F0'
  },
  {
    id: 'opening',
    name: '开业花篮',
    icon: '/images/icons/opening.png',
    color: '#FF6B6B',
    bgColor: '#FFF5F5'
  },
  {
    id: 'blessing',
    name: '祝福恭贺',
    icon: '/images/icons/blessing.png',
    color: '#A66CFF',
    bgColor: '#F8F5FF'
  }
];

/**
 * 分类列表数据
 */
const categoryList = [
  {
    id: 'romantic',
    name: '浪漫告白',
    icon: '/images/category/romantic.png',
    children: [
      { id: 'rose', name: '玫瑰花束', icon: '/images/category/rose.png' },
      { id: 'mix', name: '混搭花束', icon: '/images/category/mix.png' },
      { id: 'box', name: '礼盒花艺', icon: '/images/category/box.png' },
      { id: 'eternal', name: '永生花', icon: '/images/category/eternal.png' }
    ]
  },
  {
    id: 'birthday',
    name: '生日热荐',
    icon: '/images/category/birthday.png',
    children: [
      { id: 'sunflower', name: '向日葵', icon: '/images/category/sunflower.png' },
      { id: 'lily', name: '百合花', icon: '/images/category/lily.png' },
      { id: 'carnation', name: '康乃馨', icon: '/images/category/carnation.png' },
      { id: 'tulip', name: '郁金香', icon: '/images/category/tulip.png' }
    ]
  },
  {
    id: 'opening',
    name: '开业花篮',
    icon: '/images/category/opening.png',
    children: [
      { id: 'basket-single', name: '单层花篮', icon: '/images/category/basket1.png' },
      { id: 'basket-double', name: '双层花篮', icon: '/images/category/basket2.png' },
      { id: 'basket-triple', name: '三层花篮', icon: '/images/category/basket3.png' }
    ]
  },
  {
    id: 'blessing',
    name: '祝福恭贺',
    icon: '/images/category/blessing.png',
    children: [
      { id: 'get-well', name: '探病慰问', icon: '/images/category/getwell.png' },
      { id: 'congrats', name: '恭贺新禧', icon: '/images/category/congrats.png' },
      { id: 'thanks', name: '感恩致谢', icon: '/images/category/thanks.png' }
    ]
  },
  {
    id: 'plant',
    name: '绿植盆栽',
    icon: '/images/category/plant.png',
    children: [
      { id: 'small-plant', name: '小型绿植', icon: '/images/category/small.png' },
      { id: 'medium-plant', name: '中型绿植', icon: '/images/category/medium.png' },
      { id: 'large-plant', name: '大型绿植', icon: '/images/category/large.png' }
    ]
  }
];

/**
 * 商品列表数据
 */
const productList = [
  // 浪漫告白系列
  {
    id: 1001,
    name: '挚爱一生',
    subtitle: '99朵红玫瑰花束',
    price: 999,
    originalPrice: 1299,
    sales: 2680,
    rating: 4.9,
    category: 'romantic',
    tags: ['热销', '包邮'],
    imageUrl: '/images/products/product1.png',
    images: ['/images/products/product1.png'],
    description: '99朵精选红玫瑰，代表天长地久的爱情承诺',
    stock: 100
  },
  {
    id: 1002,
    name: '初见倾心',
    subtitle: '33朵粉玫瑰花束',
    price: 399,
    originalPrice: 499,
    sales: 1890,
    rating: 4.8,
    category: 'romantic',
    tags: ['新品'],
    imageUrl: '/images/products/product2.png',
    images: ['/images/products/product2.png'],
    description: '33朵粉色玫瑰，诉说初恋般的心动',
    stock: 150
  },
  // 生日热荐系列
  {
    id: 2001,
    name: '阳光灿烂',
    subtitle: '向日葵混搭花束',
    price: 268,
    originalPrice: 328,
    sales: 1560,
    rating: 4.8,
    category: 'birthday',
    tags: ['热销', '生日推荐'],
    imageUrl: '/images/products/product3.png',
    images: ['/images/products/product3.png'],
    description: '向日葵搭配香槟玫瑰，送去温暖祝福',
    stock: 80
  },
  // 开业花篮系列
  {
    id: 3001,
    name: '开业大吉',
    subtitle: '豪华双层开业花篮',
    price: 688,
    originalPrice: 888,
    sales: 560,
    rating: 4.9,
    category: 'opening',
    tags: ['热销', '企业首选'],
    imageUrl: '/images/products/product4.png',
    images: ['/images/products/product4.png'],
    description: '双层豪华花篮，寓意生意兴隆',
    stock: 50
  },
  // 祝福恭贺系列
  {
    id: 4001,
    name: '温馨祝福',
    subtitle: '康乃馨百合花束',
    price: 258,
    originalPrice: 318,
    sales: 890,
    rating: 4.8,
    category: 'blessing',
    tags: ['热销', '探病首选'],
    imageUrl: '/images/products/product5.png',
    images: ['/images/products/product5.png'],
    description: '康乃馨与百合的温馨组合，送去真挚祝福',
    stock: 100
  },
  {
    id: 5001,
    name: '永恒之恋',
    subtitle: '永生花礼盒限定款',
    price: 599,
    originalPrice: 799,
    sales: 3200,
    rating: 4.9,
    category: 'romantic',
    tags: ['爆款', '限量'],
    imageUrl: '/images/products/product1.png',
    images: ['/images/products/product1.png'],
    description: '精选进口永生花材，永恒不变的美丽承诺，限定款礼盒包装',
    stock: 0
  },
  {
    id: 5002,
    name: '春日物语',
    subtitle: '郁金香混搭花束',
    price: 358,
    originalPrice: 458,
    sales: 1200,
    rating: 4.7,
    category: 'birthday',
    tags: ['新品', '生日推荐'],
    imageUrl: '/images/products/product3.png',
    images: ['/images/products/product3.png'],
    description: '荷兰进口郁金香混搭，春日般温暖问候',
    stock: 0
  }
];

/**
 * 热销商品
 */
const hotProducts = productList.filter(p => p.tags.includes('热销')).slice(0, 6);

/**
 * 新品推荐
 */
const newProducts = productList.filter(p => p.tags.includes('新品'));

/**
 * 根据分类获取商品
 */
const getProductsByCategory = (categoryId) => {
  return productList.filter(p => p.category === categoryId);
};

/**
 * 根据ID获取商品详情
 */
const getProductById = (id) => {
  return productList.find(p => p.id === parseInt(id));
};

/**
 * 搜索商品
 */
const searchProducts = (keyword) => {
  const lowerKeyword = keyword.toLowerCase();
  return productList.filter(p =>
    p.name.toLowerCase().includes(lowerKeyword) ||
    p.subtitle.toLowerCase().includes(lowerKeyword) ||
    p.description.toLowerCase().includes(lowerKeyword)
  );
};

/**
 * 用户信息
 */
const userInfo = {
  id: 1,
  nickname: '花粉用户',
  avatar: '/images/avatar/default.png',
  phone: '138****8000',
  level: 'VIP1',
  points: 1280,
  couponCount: 3,
  orderCount: {
    unpaid: 1,
    unshipped: 2,
    unreceived: 1,
    uncommented: 3
  }
};

/**
 * 地址列表
 */
const addressList = [
  {
    id: 1,
    name: '张三',
    phone: '13800138000',
    province: '广东省',
    city: '深圳市',
    district: '南山区',
    detail: '科技园南区A栋1001室',
    isDefault: true
  },
  {
    id: 2,
    name: '李四',
    phone: '13900139000',
    province: '广东省',
    city: '广州市',
    district: '天河区',
    detail: '天河路385号太古汇',
    isDefault: false
  }
];

var priceHistory = {
  1001: [
    { price: 1299, date: '2024-01-01' },
    { price: 1199, date: '2024-03-15' },
    { price: 1099, date: '2024-06-01' },
    { price: 999, date: '2024-09-01' }
  ],
  1002: [
    { price: 499, date: '2024-01-01' },
    { price: 449, date: '2024-04-01' },
    { price: 399, date: '2024-07-01' }
  ],
  2001: [
    { price: 328, date: '2024-01-01' },
    { price: 298, date: '2024-05-01' },
    { price: 268, date: '2024-08-01' }
  ],
  3001: [
    { price: 888, date: '2024-01-01' },
    { price: 788, date: '2024-04-01' },
    { price: 688, date: '2024-07-01' }
  ],
  4001: [
    { price: 318, date: '2024-01-01' },
    { price: 288, date: '2024-05-01' },
    { price: 258, date: '2024-08-01' }
  ]
};

var subscriptionList = [];

function addSubscription(sub) {
  var exist = subscriptionList.find(function(s) {
    return s.productId === sub.productId && s.type === sub.type;
  });
  if (exist) return false;
  subscriptionList.push(Object.assign({}, sub, {
    id: Date.now(),
    subscribeTime: new Date().toLocaleString(),
    status: 'active'
  }));
  return true;
}

function removeSubscription(id) {
  var index = subscriptionList.findIndex(function(s) { return s.id === id; });
  if (index > -1) {
    subscriptionList.splice(index, 1);
    return true;
  }
  return false;
}

function getSubscriptions() {
  return subscriptionList;
}

function isSubscribed(productId, type) {
  return subscriptionList.some(function(s) {
    return s.productId === productId && s.type === type && s.status === 'active';
  });
}

function simulateRestockNotification() {
  var restockSubs = subscriptionList.filter(function(s) {
    return s.type === 'restock' && s.status === 'active';
  });
  var notifications = [];
  restockSubs.forEach(function(sub) {
    var product = productList.find(function(p) { return p.id === sub.productId; });
    if (product && product.stock > 0) {
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
  return notifications;
}

function simulatePriceDropNotification() {
  var priceSubs = subscriptionList.filter(function(s) {
    return s.type === 'priceDrop' && s.status === 'active';
  });
  var notifications = [];
  priceSubs.forEach(function(sub) {
    var product = productList.find(function(p) { return p.id === sub.productId; });
    if (product && product.price < sub.subscribePrice) {
      sub.status = 'notified';
      notifications.push({
        productId: sub.productId,
        productName: sub.productName,
        productImage: sub.productImage,
        type: 'priceDrop',
        oldPrice: sub.subscribePrice,
        newPrice: product.price,
        message: '您关注的「' + sub.productName + '」已降价，从¥' + sub.subscribePrice + '降至¥' + product.price,
        time: new Date().toLocaleString()
      });
    }
  });
  return notifications;
}

var quizQuestions = [
  {
    id: 'relation',
    title: '送花给谁？',
    subtitle: '这份花意将送给最重要的TA',
    options: [
      { id: 'lover', text: '恋人', emoji: '💕', desc: '浪漫告白' },
      { id: 'family', text: '家人', emoji: '🏠', desc: '温暖关怀' },
      { id: 'friend', text: '朋友', emoji: '🤝', desc: '真挚友情' },
      { id: 'self', text: '自己', emoji: '✨', desc: '犒赏自我' }
    ]
  },
  {
    id: 'personality',
    title: 'TA的性格更偏向？',
    subtitle: '了解TA的内心世界',
    options: [
      { id: 'gentle', text: '温柔细腻', emoji: '🌸', desc: '柔软如花瓣' },
      { id: 'lively', text: '活泼开朗', emoji: '🌞', desc: '阳光般热情' },
      { id: 'reserved', text: '内敛沉稳', emoji: '🎋', desc: '淡雅有深度' },
      { id: 'romantic', text: '浪漫多情', emoji: '🌙', desc: '诗意生活家' }
    ]
  },
  {
    id: 'color',
    title: '偏好的色系？',
    subtitle: '选择让TA心动的色彩',
    options: [
      { id: 'warm', text: '暖色系', emoji: '🔥', desc: '红·橙·金黄' },
      { id: 'cool', text: '冷色系', emoji: '❄️', desc: '蓝·紫·薄荷' },
      { id: 'pink', text: '粉嫩系', emoji: '🌷', desc: '粉·桃·淡樱' },
      { id: 'neutral', text: '百搭系', emoji: '🤍', desc: '白·绿·米色' }
    ]
  },
  {
    id: 'room',
    title: '房间的风格？',
    subtitle: '花与空间的美学搭配',
    options: [
      { id: 'nordic', text: '简约北欧', emoji: '🧊', desc: '干净利落' },
      { id: 'pastoral', text: '温馨田园', emoji: '🏡', desc: '自然清新' },
      { id: 'luxury', text: '现代轻奢', emoji: '💎', desc: '精致品味' },
      { id: 'japanese', text: '清新日式', emoji: '🎍', desc: '禅意留白' }
    ]
  }
];

var quizRecommendations = {
  'lover-gentle-pink-nordic': {
    personality: '温柔浪漫的北欧恋人',
    description: '你追求简洁而精致的爱，温暖而不张扬',
    products: [1001, 1002, 5001],
    reasons: [
      '99朵红玫瑰的热烈与你的温柔形成完美互补',
      '33朵粉玫瑰的柔和色调契合你的审美品味',
      '永生花的永恒特质，如同北欧风的经典隽永'
    ]
  },
  'lover-gentle-pink-pastoral': {
    personality: '田园诗意中的温柔恋人',
    description: '你向往自然而浪漫的温情，爱在细节中绽放',
    products: [1002, 4001, 2001],
    reasons: [
      '粉玫瑰的柔美与田园风的自然气息相得益彰',
      '康乃馨百合花束的温暖氛围，如同田园般惬意',
      '向日葵混搭花束带来阳光般温暖的陪伴感'
    ]
  },
  'lover-lively-warm-luxury': {
    personality: '热情奔放的轻奢恋人',
    description: '你用炽热的爱意点亮精致生活',
    products: [1001, 5001, 3001],
    reasons: [
      '99朵红玫瑰的盛大浪漫，彰显你的热烈与品位',
      '永生花礼盒的限定品质，与轻奢风格完美匹配',
      '豪华花篮的大气排面，为爱加冕'
    ]
  },
  'lover-romantic-pink-japanese': {
    personality: '浪漫禅意的日式恋人',
    description: '你在留白中寻找爱的诗意，细腻而深情',
    products: [1002, 5001, 2001],
    reasons: [
      '粉玫瑰的柔和与日式美学的淡雅不谋而合',
      '永生花的永恒禅意，正如你对爱的珍视',
      '向日葵的简约线条感，与日式空间和谐共生'
    ]
  },
  'family-gentle-warm-pastoral': {
    personality: '温暖顾家的田园守护者',
    description: '你用无微不至的关怀编织家的温馨',
    products: [4001, 2001, 1002],
    reasons: [
      '康乃馨百合花束是最经典的家人关怀之选',
      '向日葵的温暖阳光，带来家的安心感',
      '粉玫瑰的柔美为家中增添温馨氛围'
    ]
  },
  'family-reserved-neutral-nordic': {
    personality: '沉稳内敛的北欧家长',
    description: '你以含蓄而深远的方式表达关爱',
    products: [4001, 2001, 5002],
    reasons: [
      '康乃馨的低调温柔，恰如你不张扬的关爱',
      '向日葵的简洁线条与北欧空间完美融合',
      '郁金香的素雅气质，契合内敛的审美'
    ]
  },
  'friend-lively-warm-pastoral': {
    personality: '热情阳光的知心挚友',
    description: '你是朋友圈的温暖中心，带来欢笑与正能量',
    products: [2001, 1002, 4001],
    reasons: [
      '向日葵混搭花束正如你阳光般的友谊',
      '粉玫瑰为友谊增添一抹甜蜜的温度',
      '康乃馨百合的温馨搭配，象征真挚长久的友情'
    ]
  },
  'friend-lively-cool-japanese': {
    personality: '清新洒脱的日式好友',
    description: '你以独特的方式诠释友情，清冷而有温度',
    products: [5002, 2001, 4001],
    reasons: [
      '郁金香的清雅气质与你的独特品味相配',
      '向日葵在日式空间中展现清爽的友谊之美',
      '百合的淡雅芬芳，适合品味独特的挚友'
    ]
  },
  'self-gentle-pink-japanese': {
    personality: '诗意独处的日式美学',
    description: '你懂得犒赏自己，在留白中感受生活之美',
    products: [1002, 5002, 5001],
    reasons: [
      '粉玫瑰是给自己最温柔的礼物',
      '郁金香的素雅与日式空间和谐共鸣',
      '永生花的永恒之美，犒赏值得被珍惜的自己'
    ]
  },
  'self-romantic-warm-luxury': {
    personality: '精致悦己的轻奢生活家',
    description: '你用仪式感点亮日常，活出品质与品味',
    products: [1001, 5001, 1002],
    reasons: [
      '99朵红玫瑰是对自己最隆重的告白',
      '永生花礼盒的限定品质，犒赏不将就的你',
      '粉玫瑰为日常增添浪漫的小确幸'
    ]
  },
  'self-reserved-neutral-nordic': {
    personality: '简约从容的北欧独居者',
    description: '你在简洁中找到安宁，以节制表达自我',
    products: [5002, 2001, 4001],
    reasons: [
      '郁金香的简约线条与北欧空间相得益彰',
      '向日葵为极简空间注入恰到好处的生机',
      '康乃馨的低调美感，适合不张扬的品味'
    ]
  },
  'self-lively-pink-pastoral': {
    personality: '热爱生活的田园女孩',
    description: '你将日子过成诗，每一刻都充满色彩',
    products: [2001, 1002, 4001],
    reasons: [
      '向日葵的灿烂是你生活态度的最佳代言',
      '粉玫瑰为田园小屋增添浪漫情调',
      '康乃馨百合的芬芳，让家充满生机'
    ]
  }
};

var quizDefaultRecommendation = {
  personality: '自在随心的花艺爱好者',
  description: '你拥有独特而多元的审美，每一种花都值得被欣赏',
  products: [2001, 4001, 1002],
  reasons: [
    '向日葵混搭花束适合任何场景，百搭不踩雷',
    '康乃馨百合花束温暖治愈，是万金油之选',
    '粉玫瑰柔美百搭，无论送谁都不会出错'
  ]
};

function getQuizRecommendation(answers) {
  var key = [answers.relation, answers.personality, answers.color, answers.room].join('-');
  if (quizRecommendations[key]) {
    return Object.assign({}, quizRecommendations[key], {
      products: quizRecommendations[key].products.map(function(id) {
        return productList.find(function(p) { return p.id === id; });
      }).filter(Boolean)
    });
  }
  var partialKeys = [
    [answers.relation, answers.personality, answers.color].join('-'),
    [answers.relation, answers.personality].join('-'),
    [answers.relation].join('-')
  ];
  for (var i = 0; i < partialKeys.length; i++) {
    var matched = Object.keys(quizRecommendations).find(function(k) {
      return k.indexOf(partialKeys[i]) === 0;
    });
    if (matched) {
      return Object.assign({}, quizRecommendations[matched], {
        products: quizRecommendations[matched].products.map(function(id) {
          return productList.find(function(p) { return p.id === id; });
        }).filter(Boolean)
      });
    }
  }
  return Object.assign({}, quizDefaultRecommendation, {
    products: quizDefaultRecommendation.products.map(function(id) {
      return productList.find(function(p) { return p.id === id; });
    }).filter(Boolean)
  });
}

module.exports = {
  bannerList,
  categoryEntries,
  categoryList,
  productList,
  hotProducts,
  newProducts,
  getProductsByCategory,
  getProductById,
  searchProducts,
  userInfo,
  addressList,
  priceHistory,
  addSubscription,
  removeSubscription,
  getSubscriptions,
  isSubscribed,
  simulateRestockNotification,
  simulatePriceDropNotification,
  quizQuestions,
  quizRecommendations,
  quizDefaultRecommendation,
  getQuizRecommendation
};
