// 适配
// 基于rem的自适应方法
// 1.首先计算缩放比，根据屏幕大小动态设置，根元素html的fontSize值
// 2.将元素单位px转换成rem
// 3.样式书写使用scss函数rem将px转为rem
function setFontSize(){
  let designWidth = 2560;//设计稿的宽度，根据实际项目调整
  let designHeight = 1440;//设计稿的高度，根据实际项目调整
  let rootFontSize = 100;
  var fontSize = 
      document.documentElement.clientWidth / document.documentElement.clientHeight < designWidth/designHeight ? 
      (document.documentElement.clientWidth / designWidth) * rootFontSize:
      (document.documentElement.clientHeight / designHeight) * rootFontSize;
  document.querySelector('html').style.fontSize = fontSize + 'px';
}
window.onresize = function () {
  setFontSize();
};
setFontSize();


// ==================== 初始化fullpage全屏组件 ====================
function initialzation(){
  // var isVideoPlaying = false;
  // var numSwipes = 0;

  var mediaFullpage = new fullpage("#fullpage", {
    // 配置顶部菜单父元素
    menu: "#nav-menu",
    // 配置锚点
    anchors: ["sec1", "sec2", "sec3", "sec4", "sec5", "sec6", "sec7", "sec8"],
    // 是否锁定锚点，默认为false
    // lockAnchors: false,
    // 启用侧边栏导航
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: ["首页", "对战", "商城", "活动", "任务", "角色", "分享", "其他"],
    showActiveTooltip: true,
    // 启用滚动条，默认为true
    scrollOverflow: true,
    // 设置切换速度
    scrollingSpeed: 1000,
    // 设置轮播图底部显示小圆点或数字
    slidesNavigation: true,
    // 是否显示切换箭头，默认为true
    controlArrows: true,
    // scrollHorizontally: true,
    // scrollHorizontallyKey: 'WXhZV3gyWVhKdmRISnBaMjh1WTI5dGJkX3B0aGMyTnliMnhzU0c5eWFYcHZiblJoYkd4NTkwdA==',
    // afterSlideLoad: function(section, origin, destination, direction){
    // 	console.log({
    // 		section: section,
    // 		origin: origin,
    // 		destination: destination,
    // 		direction: direction
    // 	});
    // },
    // onSlideLeave: function(section, origin, destination, direction){
    // 	console.log({
    // 		section: section,
    // 		origin: origin,
    // 		destination: destination,
    // 		direction: direction
    // 	});
    // }
  
    // 配置响应式
    // 当页面宽度小于等于1100px时，触发afterResponsive回调函数
    responsiveWidth: 1100,
    // 或者配置此参数，当页面高度小于等于900px时，触发afterResponsive回调函数
    // responsiveHeight: 900,
    // callback，回调函数
    afterResponsive: function (isResponsive) {
      console.log("After Responsive");
    },
  
    // 1.1是否启用循环滚动
    // continuousVertical: true,
    // 1.2另一种设置无限滚动的方法
    // loopTop: true,
    // loopBottom: true,
  
    // 对sec3中的图片做懒加载处理，用于实现一个网页的视图切换时的懒加载背景图片的功能。
    // 当用户从一个页面离开时会被触发。`origin`和`destination`参数分别代表离开的页面和目标页面，`direction`表示页面跳转的方向。
    onLeave: function (origin, destination, direction) {
      // 检查目标页面的索引是否为2。如果目标页面是第三个页面（索引从0开始计数），则执行大括号内的代码。
      if (destination.index === 2) {
        // 给目标页面的DOM元素添加一个类名`load-background`。这个类名可能在CSS中定义了背景图片的加载逻辑，例如使用JavaScript动态加载图片。
        destination.item.classList.add("load-background");
      }
    },

    // 设置可滚动元素（滚动条）
    normalScrollingElements: ".scroll-container",
  
    // 设置section的背景为fixed
    // css3: false,

    // 滚动播放视频，类似gsap中的锁屏滚动播放视频动画
    // beforeLeave: function(origin, destination, direction, trigger){
    //   var isSectionWithVideoToPlayOnScroll = origin.index === 0 || origin.index === 6;
    //   var pauseDelay =  origin.index === 0 ? 2700 : 1200;

    //   // Preventing video animations when using the bullet navigation
    //   var shouldTriggerAnimation = trigger !== 'verticalNav';

    //   if( isSectionWithVideoToPlayOnScroll 
    //       && shouldTriggerAnimation 
    //       && !isVideoPlaying 
    //       && numSwipes < 3
    //   ){
    //       numSwipes++;
    //       var video = origin.item.querySelector('video');

    //       // Play the video
    //       video.play();
    //       isVideoPlaying = true;

    //       // Set a timeout to stop the video after 2 seconds
    //       setTimeout(function() {
    //           video.pause();          // Pause the video
    //           isVideoPlaying = false
    //       }, pauseDelay);
    //   }

    //   if(isVideoPlaying){

    //       // Preventing scroll to destination
    //       return false;
    //   }
    // },
    // afterLoad: function(origin, destination, direction, trigger){
    //   // Resetting the video on the previous section
    //   if(origin){
    //     var prevVideo = origin.item.querySelector('video');
    //     if(prevVideo){
    //       prevVideo.currentTime = 0;
    //     }
    //   }

    //   // Resetting counter & flag
    //   numSwipes = 0;
    //   isVideoPlaying = false;
    // },

    // 添加动画
    afterLoad: function (origin, destination, direction) {
      const section2H1 = document.querySelector("#section2").querySelector("h1");
      const section2P = document.querySelector("#section2").querySelector("p");
  
      // reaching section 2?
      if (destination.index == 1) {
        section2H1.classList.add("active");
        section2P.classList.add("active");
      }
  
      // back to original state
      else if (origin && origin.index == 1) {
        section2H1.classList.remove("active");
        section2P.classList.remove("active");
      }
  
      // The section 3 is using the state classes to fire the animation
      // See the CSS code on the styles
    },
  
    // sec中的内容顶部居中对齐
    // verticalCentered: false,
    
    // Get your license at https://alvarotrigo.com/fullPage/pricing
    // licenseKey: "xxxxxxxxxxxxxxxxxxxxxxxxx"
  });
}

initialzation();


// fullpage其他methods
document.querySelector("#moveSectionUp").addEventListener("click", function (e) {
  e.preventDefault();
  fullpage_api.moveSectionUp();
});
document.querySelector("#moveSectionDown").addEventListener("click", function (e) {
  e.preventDefault();
  fullpage_api.moveSectionDown();
});
document.querySelector("#moveTo").addEventListener("click", function (e) {
  e.preventDefault();
  fullpage_api.moveTo(2, 2);
});
document.querySelector("#silentMoveTo").addEventListener("click", function (e) {
  e.preventDefault();
  fullpage_api.silentMoveTo(2);
});
document.querySelector("#silentMoveToSlide").addEventListener("click", function (e) {
  e.preventDefault();
  fullpage_api.silentMoveTo(2, 2);
});
document.querySelector("#moveSlideRight").addEventListener("click", function (e) {
  e.preventDefault();
  fullpage_api.moveSlideRight();
});
document.querySelector("#moveSlideLeft").addEventListener("click", function (e) {
  e.preventDefault();
  fullpage_api.moveSlideLeft();
});
document.querySelector("#setAutoScrollingFalse").addEventListener("click", function (e) {
  e.preventDefault();
  fullpage_api.setAutoScrolling(false);
});
document.querySelector("#setAutoScrollingTrue").addEventListener("click", function (e) {
  e.preventDefault();
  fullpage_api.setAutoScrolling(true);
});
document.querySelector("#setAllowScrollingFalse").addEventListener("click", function (e) {
  e.preventDefault();
  fullpage_api.setAllowScrolling(false);
});
document.querySelector("#setAllowScrollingTrue").addEventListener("click", function (e) {
  e.preventDefault();
  fullpage_api.setAllowScrolling(true);
});
document.querySelector("#setKeyboardScrollingFalse").addEventListener("click", function (e) {
  e.preventDefault();
  fullpage_api.setKeyboardScrolling(false);
});
document.querySelector("#setKeyboardScrollingTrue").addEventListener("click", function (e) {
  e.preventDefault();
  fullpage_api.setKeyboardScrolling(true);
});
document.querySelector("#setScrollingSpeed1500").addEventListener("click", function (e) {
  e.preventDefault();
  fullpage_api.setScrollingSpeed(2500);
});
document.querySelector("#setScrollingSpeed700").addEventListener("click", function (e) {
  e.preventDefault();
  fullpage_api.setScrollingSpeed(700);
});
document.querySelector("#destroy").addEventListener("click", function (e) {
  e.preventDefault();
  fullpage_api.destroy("all");
});
document.querySelector("#undestroy").addEventListener("click", function (e) {
  e.preventDefault();
  initialization();
});
document.querySelector("#reBuild").addEventListener("click", function (e) {
  e.preventDefault();
  fullpage_api.reBuild();
});
document.querySelector("#setLockAnchorsTrue").addEventListener("click", function (e) {
  e.preventDefault;
  fullpage_api.setLockAnchors(true);
});
document.querySelector("#setLockAnchorsFalse").addEventListener("click", function (e) {
  e.preventDefault;
  fullpage_api.setLockAnchors(false);
});


// ==================== 顶部导航栏 ====================
// 二级菜单展示逻辑
/**
 * 初始化 hover 效果的通用方法
 * 不同树级的元素需要 hover 效果时使用
 * 移入 hover 触发者和 hover 层，给 hover 层添加 .show 样式类。移出时去掉
 * @param {string} hoverFrom - 触发 hover 层的选择器
 * @param {string} hoverLayer - 被触发的 hover 层选择器
 * @param {Function} [hoverFuncBack] - hover 时的回调函数，可选
 * @param {number} [showDelay=0] - 显示延迟时间（毫秒）
 */
function hoverEleShowInit(hoverFrom, hoverLayer, hoverFuncBack, showDelay = 0) {
    const hoverElement = document.querySelector(hoverLayer);
    const elements = document.querySelectorAll(hoverFrom + ',' + hoverLayer);

    let timeout;
    let showTimeout;

    function addShowClass() {
        if (!hoverElement.classList.contains('show')) {
            hoverElement.classList.add('show');
            if (typeof hoverFuncBack === 'function') {
                hoverFuncBack();
            }
        }
    }

    function removeShowClass() {
        hoverElement.classList.remove('show');
    }

    elements.forEach(element => {
        element.addEventListener('mouseenter', function (e) {
            e.preventDefault();
            e.stopPropagation();
            clearTimeout(timeout);
            clearTimeout(showTimeout);
            showTimeout = setTimeout(addShowClass, showDelay);
        });

        element.addEventListener('mouseleave', function (e) {
            e.preventDefault();
            e.stopPropagation();
            clearTimeout(timeout);
            clearTimeout(showTimeout);
            timeout = setTimeout(removeShowClass, 100);
        });
    });
}

// 初始化 hover 效果
hoverEleShowInit('.nav-list', '.nav-sub-list');

/**
 * 处理点击事件
 * 点击时给 hover 层添加 .show 类名
 */
document.querySelectorAll('.nav-list .nav-item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelector('.nav-sub-list').classList.add('show');
    });
});


// 主题切换
const themeSwitch = document.querySelector('.theme-switch');
themeSwitch.addEventListener('click', function () {
  const body = document.body;
  const isLightTheme = body.classList.contains('light');

  if (isLightTheme) {
    body.classList.remove('light');
    themeSwitch.classList.remove('switched');
  } else {
    body.classList.add('light');
    themeSwitch.classList.add('switched');
  }
});


// ==================== sec1 ====================
// 处理首页数据渲染
const data = [
  {
      place:'Switzerland Alps',
      title:'SAINT',
      title2:'ANTONIEN',
      description:'Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It\'s a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.',
      image:'https://assets.codepen.io/3685267/timed-cards-1.jpg'
  },
  {
      place:'Japan Alps',
      title:'NANGANO',
      title2:'PREFECTURE',
      description:'Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country\'s best powder.',
      image:'https://assets.codepen.io/3685267/timed-cards-2.jpg'
  },
  {
      place:'Sahara Desert - Morocco',
      title:'MARRAKECH',
      title2:'MEROUGA',
      description:'The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.',
      image:'https://assets.codepen.io/3685267/timed-cards-3.jpg'
  },
  {
      place:'Sierra Nevada - USA',
      title:'YOSEMITE',
      title2:'NATIONAL PARAK',
      description:'Yosemite National Park is a showcase of the American wilderness, revered for its towering granite monoliths, ancient giant sequoias, and thundering waterfalls. The park offers year-round recreational activities, from rock climbing to serene valley walks.',
      image:'https://assets.codepen.io/3685267/timed-cards-4.jpg'
  },
  {
      place:'Tarifa - Spain',
      title:'LOS LANCES',
      title2:'BEACH',
      description:'Los Lances Beach in Tarifa is a coastal paradise known for its consistent winds, making it a world-renowned spot for kitesurfing and windsurfing. The beach\'s long, sandy shores provide ample space for relaxation and sunbathing, with a vibrant atmosphere of beach bars and cafes.',
      image:'https://assets.codepen.io/3685267/timed-cards-5.jpg'
  },
  {
      place:'Cappadocia - Turkey',
      title:'Göreme',
      title2:'Valley',
      description:'Göreme Valley in Cappadocia is a historical marvel set against a unique geological backdrop, where centuries of wind and water have sculpted the landscape into whimsical formations. The valley is also famous for its open-air museums, underground cities, and the enchanting experience of hot air ballooning.',
      image:'https://assets.codepen.io/3685267/timed-cards-6.jpg'
  },
]

const _ = (id)=>document.getElementById(id)
const cards = data.map((i, index)=>`<div class="card" id="card${index}" style="background-image:url(${i.image})"></div>`).join('')

const cardContents = data.map((i, index)=>`<div class="card-content" id="card-content-${index}">
  <div class="content-start"></div>
  <div class="content-place">${i.place}</div>
  <div class="content-title-1">${i.title}</div>
  <div class="content-title-2">${i.title2}</div>
</div>`).join('')


const sildeNumbers = data.map((_, index)=>`<div class="item" id="slide-item-${index}" >${index+1}</div>`).join('')
_('cont1').innerHTML =  cards + cardContents
_('slide-numbers').innerHTML =  sildeNumbers

const range = (n) =>
Array(n)
  .fill(0)
  .map((i, j) => i + j);
const set = gsap.set;

function getCard(index) {
  return `#card${index}`;
}
function getCardContent(index) {
  return `#card-content-${index}`;
}
function getSliderItem(index) {
  return `#slide-item-${index}`;
}

function animate(target, duration, properties) {
  return new Promise((resolve) => {
    gsap.to(target, {
      ...properties,
      duration: duration,
      onComplete: resolve,
    });
  });
}

let order = [0, 1, 2, 3, 4, 5];
let detailsEven = true;

let offsetTop = 200;
let offsetLeft = 700;
let cardWidth = 200;
let cardHeight = 300;
let gap = 40;
let numberSize = 50;
const ease = "sine.inOut";

function init() {
  const [active, ...rest] = order;
  const detailsActive = detailsEven ? "#details-even" : "#details-odd";
  const detailsInactive = detailsEven ? "#details-odd" : "#details-even";
  const { innerHeight: height, innerWidth: width } = window;
  offsetTop = height - 430;
  offsetLeft = width - 830;

  gsap.set("#pagination", {
    top: offsetTop + 330,
    left: offsetLeft,
    y: 200,
    opacity: 0,
    zIndex: 60,
  });
  gsap.set("nav", { y: -200, opacity: 0 });

  gsap.set(getCard(active), {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
  });
  gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
  gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
  gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
  gsap.set(`${detailsInactive} .text`, { y: 100 });
  gsap.set(`${detailsInactive} .title-1`, { y: 100 });
  gsap.set(`${detailsInactive} .title-2`, { y: 100 });
  gsap.set(`${detailsInactive} .desc`, { y: 50 });
  gsap.set(`${detailsInactive} .cta`, { y: 60 });

  gsap.set(".progress-sub-foreground", {
    width: 500 * (1 / order.length) * (active + 1),
  });

  rest.forEach((i, index) => {
    gsap.set(getCard(i), {
      x: offsetLeft + 400 + index * (cardWidth + gap),
      y: offsetTop,
      width: cardWidth,
      height: cardHeight,
      zIndex: 30,
      borderRadius: 10,
    });
    gsap.set(getCardContent(i), {
      x: offsetLeft + 400 + index * (cardWidth + gap),
      zIndex: 40,
      y: offsetTop + cardHeight - 100,
    });
    gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
  });

  gsap.set(".indicator", { x: -window.innerWidth });

  const startDelay = 0.6;

  gsap.to(".cover", {
    x: width + 400,
    delay: 0.5,
    ease,
    onComplete: () => {
      setTimeout(() => {
        loop();
      }, 500);
    },
  });
  rest.forEach((i, index) => {
    gsap.to(getCard(i), {
      x: offsetLeft + index * (cardWidth + gap),
      zIndex: 30,
      delay: 0.05 * index,
      ease,
      delay: startDelay,
    });
    gsap.to(getCardContent(i), {
      x: offsetLeft + index * (cardWidth + gap),
      zIndex: 40,
      delay: 0.05 * index,
      ease,
      delay: startDelay,
    });
  });
  gsap.to("#pagination", { y: 0, opacity: 1, ease, delay: startDelay });
  gsap.to("nav", { y: 0, opacity: 1, ease, delay: startDelay });
  gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
}

let clicks = 0;

function step() {
  return new Promise((resolve) => {
    order.push(order.shift());
    detailsEven = !detailsEven;

    const detailsActive = detailsEven ? "#details-even" : "#details-odd";
    const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

    document.querySelector(`${detailsActive} .place-box .text`).textContent =
      data[order[0]].place;
    document.querySelector(`${detailsActive} .title-1`).textContent =
      data[order[0]].title;
    document.querySelector(`${detailsActive} .title-2`).textContent =
      data[order[0]].title2;
    document.querySelector(`${detailsActive} .desc`).textContent =
      data[order[0]].description;

    gsap.set(detailsActive, { zIndex: 22 });
    gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
    gsap.to(`${detailsActive} .text`, {
      y: 0,
      delay: 0.1,
      duration: 0.7,
      ease,
    });
    gsap.to(`${detailsActive} .title-1`, {
      y: 0,
      delay: 0.15,
      duration: 0.7,
      ease,
    });
    gsap.to(`${detailsActive} .title-2`, {
      y: 0,
      delay: 0.15,
      duration: 0.7,
      ease,
    });
    gsap.to(`${detailsActive} .desc`, {
      y: 0,
      delay: 0.3,
      duration: 0.4,
      ease,
    });
    gsap.to(`${detailsActive} .cta`, {
      y: 0,
      delay: 0.35,
      duration: 0.4,
      onComplete: resolve,
      ease,
    });
    gsap.set(detailsInactive, { zIndex: 12 });

    const [active, ...rest] = order;
    const prv = rest[rest.length - 1];

    gsap.set(getCard(prv), { zIndex: 10 });
    gsap.set(getCard(active), { zIndex: 20 });
    gsap.to(getCard(prv), { scale: 1.5, ease });

    gsap.to(getCardContent(active), {
      y: offsetTop + cardHeight - 10,
      opacity: 0,
      duration: 0.3,
      ease,
    });
    gsap.to(getSliderItem(active), { x: 0, ease });
    gsap.to(getSliderItem(prv), { x: -numberSize, ease });
    gsap.to(".progress-sub-foreground", {
      width: 500 * (1 / order.length) * (active + 1),
      ease,
    });

    gsap.to(getCard(active), {
      x: 0,
      y: 0,
      ease,
      width: window.innerWidth,
      height: window.innerHeight,
      borderRadius: 0,
      onComplete: () => {
        const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
        gsap.set(getCard(prv), {
          x: xNew,
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          zIndex: 30,
          borderRadius: 10,
          scale: 1,
        });

        gsap.set(getCardContent(prv), {
          x: xNew,
          y: offsetTop + cardHeight - 100,
          opacity: 1,
          zIndex: 40,
        });
        gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

        gsap.set(detailsInactive, { opacity: 0 });
        gsap.set(`${detailsInactive} .text`, { y: 100 });
        gsap.set(`${detailsInactive} .title-1`, { y: 100 });
        gsap.set(`${detailsInactive} .title-2`, { y: 100 });
        gsap.set(`${detailsInactive} .desc`, { y: 50 });
        gsap.set(`${detailsInactive} .cta`, { y: 60 });
        clicks -= 1;
        if (clicks > 0) {
          step();
        }
      },
    });

    rest.forEach((i, index) => {
      if (i !== prv) {
        const xNew = offsetLeft + index * (cardWidth + gap);
        gsap.set(getCard(i), { zIndex: 30 });
        gsap.to(getCard(i), {
          x: xNew,
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          ease,
          delay: 0.1 * (index + 1),
        });

        gsap.to(getCardContent(i), {
          x: xNew,
          y: offsetTop + cardHeight - 100,
          opacity: 1,
          zIndex: 40,
          ease,
          delay: 0.1 * (index + 1),
        });
        gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
      }
    });
  });
}

async function loop() {
  await animate(".indicator", 2, { x: 0 });
  await animate(".indicator", 0.8, { x: window.innerWidth, delay: 0.3 });
  set(".indicator", { x: -window.innerWidth });
  await step();
  loop();
}

async function loadImage(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function loadImages() {
  const promises = data.map(({ image }) => loadImage(image));
  return Promise.all(promises);
}

async function start() {
  try {
    await loadImages();
    init();
  } catch (error) {
    console.error("One or more images failed to load", error);
  }
}

start()

document.querySelector(".arrow-left").addEventListener("click", () => {
  isPlaying = false; // 暂停自动轮播
  clicks += 1;
  step(); // 执行后退操作
});

document.querySelector(".arrow-right").addEventListener("click", () => {
  isPlaying = false; // 暂停自动轮播
  clicks += 1;
  step(); // 执行前进操作
});

// 添加一个页面加载完成时重新开始轮播的事件监听器
window.addEventListener("load", () => {
  isPlaying = true;
  loop();
});


// ==================== 组件 ====================

// 二维码生成
function CreateQrcode(url){
  document.querySelector("#qrcode").empty()
  var qrcode = new QRCode('qrcode', {
      width: 80,  height: 80,
  })
  qrcode.clear();
  qrcode.makeCode(url);
  document.querySelector('#qrcode').setAttribute('crossOrigin','anonymous')
}

// 分享截图
let createScreenshotsResult = '';
function createScreenshots(renderContainer, resultsContainer, callback) {
  createScreenshotsResult = '';
  html2canvas($(renderContainer)[0], {
      scrollX: 0,
      scrollY: 0,
      imageTimeout: 5000,
      scale: 1,
      logging: false,
      useCORS: true,
      backgroundColor: null,
      ignore: function (el){
        return el,hasAttribute('data-h2canvas-ignore');
      }
  }).then((canvas) => {
      var imageBase64 = canvas.toDataURL('image/png', 1);
      document.querySelector(resultsContainer).attr('src', imageBase64)
      createScreenshotsResult = imageBase64;
      if ((typeof callback) === 'function') {
          callback();
      }
  })
}

// 忽略元素以加快截图方法
// document.querySelectorAll('.wrap, .dialog').setAttribute('data-html2canvas-ignore', 'true');


// ==================== sec4 ====================

// 安尼姆选择列表渲染
var roleData = [
  // {"roleName": "红狐王子", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon1.png"},
  // {"roleName": "皇家守卫", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon2.png"},
  // {"roleName": "寡妇商人", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon3.png"},
  // {"roleName": "华彩将军", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon4.png"},
  // {"roleName": "天才乐师", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon5.png"},
  // {"roleName": "神之子", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon6.png"},
  // {"roleName": "黑暗舞者", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon7.png"},
  // {"roleName": "金色毒药", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon8.png"},
  {"roleName": "歧路之子", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon9.png", "skin-name1": "有罪判决", "skinDesc1": "随机选择一个敌方目标。如果目标没有死亡，自身增加瘴气。", "skin-name2": "无罪推定", "skinDesc2": "前排群攻。如果目标死亡，自身减益。", "skin-name3": "赦免", "skinDesc3": "自身清除流血状态，添加增益，前进3位。下次无罪推定或有罪判决的负面效果不生效。"},
  // {"roleName": "冒牌货", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon10.png"},
  {"roleName": "异化士兵", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon11.png", "skin-name1": "干涉", "skinDesc1": "随机为一名友方附加[追击]。自身后退1位。堕落与未堕落状态有不同效果。", "skin-name2": "疫手枪刺", "skinDesc2": "中段单攻。堕落与未堕落状态有不同效果。", "skin-name3": "兄长的职责", "skinDesc3": "后排单攻。自身前进1位。堕落与未堕落状态有不同效果。"},
  // {"roleName": "血色海盗", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon12.png"},
  // {"roleName": "天鹅公主", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon13.png"},
  // {"roleName": "独眼佣兵", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon14.png"},
  // {"roleName": "背叛者", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon15.png"},
  // {"roleName": "美食家", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon16.png"},
  // {"roleName": "飞鼠大盗", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon17.png"},
  // {"roleName": "慈悲领主", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon18.png"},
  {"roleName": "白羽之首", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon19.png", "skin-name1": "第一箭", "skinDesc1": "单攻。为该敌方添加[标记]、[反潜]；自身添加[反击]。在1号位和3号位有不同效果。", "skin-name2": "第三箭", "skinDesc2": "单攻。对标记目标提升暴击率。若为本回合首个行动者，提升命中。", "skin-name3": "第七箭", "skinDesc3": "群攻。敌方减益。若为本回合最末位行动者，队友增益。"},
  {"roleName": "鼠与狮", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon20.png",  "skin-name1": "神射手", "skinDesc1": "中后排单击。敌方减益，自身减益。", "skin-name2": "旧事", "skinDesc2": "自身降低瘴气。自身减益。", "skin-name3": "轮到狮", "skinDesc3": "角色切换为狮。自身前进1位。清除鼠技能的所有减益，置换为狮的增益。"},
  // {"roleName": "长手炮", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon21.png"},
  // {"roleName": "彩羽公子", "roleImg": "//game.gtimg.cn/images/act/cp/anm20240928/sec7-role-icon22.png"},
]

// 获取容器
var diaRoleList = document.querySelector('.dia-role-list');
// 动态生成列表项
function renderRoleList(data) {
    var listItems = data.map(function(item) {
        return `
            <li class="dia-role-item" data-idx="${item}" data-role="${item.roleName}">
                <img src="${item.roleImg}" alt="${item.roleName}">
            </li>
        `;
    }).join('');

    // 设置HTML内容
    diaRoleList.innerHTML = listItems;
}
// 调用函数渲染数据
// renderRoleList(roleData);



/**
 * 保存base64图片到本地
 */
function saveBase64Image (content, fileName) {
  var base64ToBlob = function (code) {
    var parts = code.split(';base64,');
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;
    var uInt8Array = new Uint8Array(rawLength);
    for (var i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], {
      type: contentType,
    });
  };
  var aLink = document.createElement('a');
  var blob = base64ToBlob(content);
  var evt = document.createEvent('HTMLEvents');
  evt.initEvent('click', true, true);
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob);
  aLink.click();
};

