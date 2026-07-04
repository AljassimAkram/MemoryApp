(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=String.raw,t=t=>e`
  <header class="game-header">
    <div class="game-header__score-group">
      <div class="game-header__score-item game-header__score-item--blue">
        <span class="game-header__icon"></span> Blue ${t.scoreBlue}
      </div>
      <div class="game-header__score-item game-header__score-item--orange">
        <span class="game-header__icon"></span> Orange ${t.scoreOrange}
      </div>
    </div>

    <div class="game-header__current-player">
      Current player:
      <span
        class="game-header__icon game-header__icon--${t.currentPlayer}"
      ></span>
    </div>

    <div class="game-header__actions">
      <button class="game-header__exit-btn" type="button">Exit game</button>
    </div>
  </header>
`,n=String.raw,r=e=>n`
  <div class="card__inner">
    <div class="card__face card__face--front"></div>
    <div class="card__face card__face--back">
      <img src="${e}" alt="Icon" class="card__icon">
    </div>
  </div>
`,i=String.raw,a=e=>i`
  <div class="game-over__panel">
    <h1 class="game-over__title">Game over</h1>
    <p class="game-over__label">Final score</p>
    <div class="game-over__scores">
      <span class="game-over__score game-over__score--blue"
        >Blue ${e.scoreBlue}</span
      >
      <span class="game-over__score game-over__score--orange"
        >Orange ${e.scoreOrange}</span
      >
    </div>
  </div>
`,o=e=>{let t=e.winner===null,n=t?`<p class="game-over__winner-name">UNENTSCHIEDEN</p>`:`
      <p class="game-over__winner-name game-over__winner-name--${e.winner}">
        ${e.winner.toUpperCase()} PLAYER
      </p>
      <img
        class="game-over__winner-icon"
        src="/winner/${e.winner}Player.svg"
        alt="${e.winner} player"
      />
    `;return i`
    <div class="game-over__panel">
      <img class="game-over__confetti" src="/winner/Confetti.svg" alt="confetti" />
      <p class="game-over__winner-label">${t?`Draw!`:`The winner is`}</p>
      ${n}
      <button class="game-over__restart-btn">Back to start</button>
    </div>
  `},s={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function w(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function E(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function D(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function O(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(N(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):E(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function k(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&!(a.width===i.width&&a.height===i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return O(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function A(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:w,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),w=i,T=[],E=e.width*C.x,O=e.height*C.y;w--;)T.push(D({x:E,y:O,angle:a,spread:o,startVelocity:s,color:f[w%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(T):(m=k(e,T,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=T(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}});return}_.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var j;function M(){return j||=A(null,{useWorker:!0,resize:!0}),j}function N(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function P(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function F(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return M().apply(this,arguments)},n.exports.reset=function(){M().reset()},n.exports.create=A,n.exports.shapeFromPath=P,n.exports.shapeFromText=F})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),s,!1);var c=s.exports;s.exports.create;var l={codeVibes:[`/svg/codeVibes/Angular.svg`,`/svg/codeVibes/atomic.svg`,`/svg/codeVibes/Bootstrap.svg`,`/svg/codeVibes/CSS.svg`,`/svg/codeVibes/django.svg`,`/svg/codeVibes/Firebase.svg`,`/svg/codeVibes/github.svg`,`/svg/codeVibes/git.svg`,`/svg/codeVibes/HTML.svg`,`/svg/codeVibes/js.svg`,`/svg/codeVibes/NodeJs.svg`,`/svg/codeVibes/Sass.svg`,`/svg/codeVibes/sql.svg`,`/svg/codeVibes/Terminal.svg`,`/svg/codeVibes/ts.svg`,`/svg/codeVibes/vite.svg`,`/svg/codeVibes/VSCode.svg`,`/svg/codeVibes/python.svg`],gaming:[`/svg/gaming/Asset3@2x1.svg`,`/svg/gaming/Asset4@2x1.svg`,`/svg/gaming/Asset5@2x1.svg`,`/svg/gaming/Asset6@2x1.svg`,`/svg/gaming/Asset8@2x1.svg`,`/svg/gaming/Asset8@2x2.svg`,`/svg/gaming/Asset9@2x1.svg`,`/svg/gaming/Asset10@2x1.svg`,`/svg/gaming/Asset11@2x1.svg`,`/svg/gaming/Asset12@2x1.svg`,`/svg/gaming/Asset13@2x1.svg`,`/svg/gaming/Asset14@2x1.svg`,`/svg/gaming/Asset15@2x1.svg`,`/svg/gaming/Asset16@2x1.svg`,`/svg/gaming/Asset17@2x1.svg`,`/svg/gaming/Asset18@2x1.svg`,`/svg/gaming/Asset19@2x1.svg`,`/svg/gaming/playButton@2x1.svg`],daProjects:[`/svg/daProjectsTheme/00_How_to_order_icons.svg`,`/svg/daProjectsTheme/01_How_to_order_hot _icons.svg`,`/svg/daProjectsTheme/02_egg.svg`,`/svg/daProjectsTheme/03_Logo.svg`,`/svg/daProjectsTheme/04_join.svg`,`/svg/daProjectsTheme/05_cook.svg`,`/svg/daProjectsTheme/06_Coderr.svg`,`/svg/daProjectsTheme/07_box.svg`,`/svg/daProjectsTheme/08_pokoemonBall.svg`,`/svg/daProjectsTheme/09_Capa1.svg`,`/svg/daProjectsTheme/10_Group.svg`,`/svg/daProjectsTheme/11_Capa_1.svg`,`/svg/daProjectsTheme/12_Pollapp.svg`,`/svg/daProjectsTheme/13_Pollapp.svg`,`/svg/daProjectsTheme/14_Group.svg`,`/svg/daProjectsTheme/15_Pollapp.svg`,`/svg/daProjectsTheme/16_Pollapp.svg`],foods:[`/svg/foods/01@3x1.svg`,`/svg/foods/01copy@3x1.svg`,`/svg/foods/Artboard3@3x1.svg`,`/svg/foods/Artboard3copy@3x1.svg`,`/svg/foods/Artboard4@3x1.svg`,`/svg/foods/Artboard4copy@3x1.svg`,`/svg/foods/Artboard5@3x1.svg`,`/svg/foods/Artboard5copy@3x1.svg`,`/svg/foods/Artboard6@3x1.svg`,`/svg/foods/Artboard6copy@3x1.svg`,`/svg/foods/Artboard7@3x1.svg`,`/svg/foods/Artboard8@3x1.svg`,`/svg/foods/Artboard8copy@3x1.svg`,`/svg/foods/Artboard9@3x1.svg`,`/svg/foods/Artboard9copy@3x1.svg`,`/svg/foods/Artboard10@3x1.svg`,`/svg/foods/Artboard10copy@3x1.svg`,`/svg/foods/Artboard11@3x1.svg`]},u=String.raw,d=()=>u`
  <div class="exit-dialog">
    <div class="exit-dialog__box">
      <p class="exit-dialog__text">Are you sure you want to quit the game?</p>
      <div class="exit-dialog__actions">
        <button class="exit-dialog__btn exit-dialog__btn--back">Back to game</button>
        <button class="exit-dialog__btn exit-dialog__btn--exit">Exit game</button>
      </div>
    </div>
  </div>
`;function f(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}var p=class{config;gridElement;flippedCards=[];isLocked=!1;scoreBlue=0;scoreOrange=0;currentPlayer=`blue`;matchedPairs=0;totalPairs=0;constructor(e){this.config=e,this.totalPairs=e.cardCount/2,this.currentPlayer=e.startingPlayer;let t=e.gridSelector??`#field`,n=document.querySelector(t);if(!n)throw Error(`Element ${t} nicht gefunden`);this.gridElement=n,this.init()}init(){this.updateGridSize(),this.generateBoard(),this.addEventListeners()}updateGridSize(){let e={16:4,24:6,36:6}[this.config.cardCount]||4;this.gridElement.style.setProperty(`--grid-cols`,e.toString())}renderUI(){let e=document.querySelector(`#game-header`);e&&(e.innerHTML=t({scoreBlue:this.scoreBlue,scoreOrange:this.scoreOrange,currentPlayer:this.currentPlayer}),e.querySelector(`.game-header__exit-btn`)?.addEventListener(`click`,()=>this.showExitDialog()))}showExitDialog(){let e=document.createElement(`div`);e.innerHTML=d();let t=e.firstElementChild;document.body.appendChild(t),t.querySelector(`.exit-dialog__btn--back`)?.addEventListener(`click`,()=>t.remove()),t.querySelector(`.exit-dialog__btn--exit`)?.addEventListener(`click`,()=>{document.dispatchEvent(new CustomEvent(`game:exit`)),t.remove()})}getGameSymbols(){let e=[...l[this.config.theme]||l.codeVibes];f(e);let t=e.slice(0,this.config.cardCount/2),n=[...t,...t];return f(n),n}createCard(e){let t=document.createElement(`button`);return t.classList.add(`card`),t.dataset.symbol=e,t.innerHTML=r(e),t}generateBoard(){let e=document.createDocumentFragment();this.getGameSymbols().forEach(t=>e.appendChild(this.createCard(t))),this.gridElement.innerHTML=``,this.gridElement.appendChild(e),this.renderUI()}addEventListeners(){this.gridElement.addEventListener(`click`,e=>{let t=e.target.closest(`.card`);t&&!this.isLocked&&!t.classList.contains(`is-flipped`)&&!t.classList.contains(`is-matched`)&&this.handleCardClick(t)})}handleCardClick(e){e.classList.add(`is-flipped`),this.flippedCards.push(e),this.flippedCards.length===2&&(this.isLocked=!0,this.checkMatch())}checkMatch(){let[e,t]=this.flippedCards;e.dataset.symbol===t.dataset.symbol?this.handleMatch(e,t):this.handleMismatch(e,t)}incrementScore(){this.currentPlayer===`blue`?this.scoreBlue++:this.scoreOrange++}checkGameOver(){this.matchedPairs===this.totalPairs&&setTimeout(()=>this.showWinner(),500)}handleMatch(e,t){e.classList.add(`is-matched`),t.classList.add(`is-matched`),this.incrementScore(),this.matchedPairs++,this.flippedCards=[],this.isLocked=!1,this.renderUI(),this.checkGameOver()}handleMismatch(e,t){setTimeout(()=>{e.classList.remove(`is-flipped`),t.classList.remove(`is-flipped`),this.flippedCards=[],this.currentPlayer=this.currentPlayer===`blue`?`orange`:`blue`,this.isLocked=!1,this.renderUI()},1e3)}getWinner(){return this.scoreBlue>this.scoreOrange?`blue`:this.scoreOrange>this.scoreBlue?`orange`:null}showWinner(){this.showGameOverScreen(this.getWinner())}createOverlay(){let e=document.createElement(`div`);return e.classList.add(`game-over`),document.body.appendChild(e),e}slideIn(e){requestAnimationFrame(()=>{requestAnimationFrame(()=>e.classList.add(`is-visible`))})}fireConfetti(e){let t=`--color-${e}-player`;c({particleCount:150,spread:80,origin:{y:.4},colors:[getComputedStyle(document.documentElement).getPropertyValue(t).trim(),`#ffffff`,`#f0ea6e`]})}showWinnerPanel(e){let t=this.createOverlay();t.innerHTML=o({scoreBlue:this.scoreBlue,scoreOrange:this.scoreOrange,winner:e});let n=t.querySelector(`.game-over__panel`);this.slideIn(n),e&&setTimeout(()=>this.fireConfetti(e),500),n.querySelector(`.game-over__restart-btn`)?.addEventListener(`click`,()=>{document.querySelectorAll(`.game-over`).forEach(e=>e.remove()),document.dispatchEvent(new CustomEvent(`game:exit`))})}showGameOverScreen(e){let t=this.createOverlay();t.innerHTML=a({scoreBlue:this.scoreBlue,scoreOrange:this.scoreOrange,winner:e});let n=t.querySelector(`.game-over__panel`);this.slideIn(n),setTimeout(()=>this.showWinnerPanel(e),5e3)}},m=String.raw`
  <main class="home">
    <div class="home__content">
      <h2 class="home__subtitle">It's play time</h2>
      <h1 class="home__title">Ready to play?</h1>

      <img
        class="home__controller"
        src="/svg/startScreen/stadia_controller.svg"
        alt="Controller"
      />

      <button class="home__btn" id="play-btn">
        <img
          class="home__controllerSmall"
          src="/svg/startScreen/stadiaControllerSmall.svg"
          alt="Controller"
        />
        Play
        <img
          class="home__controllerSmall"
          src="/svg/startScreen/arrow.svg"
          alt="Controller"
        />
      </button>
    </div>
  </main>
`,h=String.raw`
  <main class="settings">
    <div class="settings__left">
      <h2 class="settings__title">
        Settings
        <img
          class="settings__line"
          src="/svg/settings/lineLeft.svg"
          alt="lineLeft"
        />
      </h2>
      <form class="settings__form" id="setting-from">
        <fieldset class="settings__fieldset" data-group="theme">
          <legend>
            <img class="" src="/svg/settings/palette.svg" alt="palette" />
            Theme
          </legend>
          <label>
            <input type="radio" name="theme" value="codeVibes" checked />
            Code Vibes theme
          </label>
          <label>
            <input type="radio" name="theme" value="gaming" />
            Geming theme
          </label>
          <label>
            <input type="radio" name="theme" value="daProjects" />
            DA Projects Theme
          </label>
          <label>
            <input type="radio" name="theme" value="foods" />
            Foods theme
          </label>
        </fieldset>
        <fieldset class="settings__fieldset" data-group="player">
          <legend>
            <img class="" src="/svg/settings/chess_pawn.svg" alt="chess_pawn" />
            Choose player
          </legend>
          <label>
            <input type="radio" name="player" value="blue"/>
            Blue
          </label>
          <label>
            <input type="radio" name="player" value="orange" />
            Orange
          </label>
        </fieldset>
        <fieldset class="settings__fieldset" data-group="cardCount">
          <legend>
            <img class="" src="/svg/settings/style.svg" alt="style" />
            Board size
          </legend>
          <label>
            <input type="radio" name="cardCount" value="16"/>
            16
          </label>
          <label>
            <input type="radio" name="cardCount" value="24" />
            24
          </label>
          <label>
            <input type="radio" name="cardCount" value="36" />
            36
          </label>
        </fieldset>
      </form>
    </div>
    <div class="settings__right">
      <div class="settings__preview">
        <div class="settings__preview-header">
          <div class="settings__preview-scores">
            <span
              class="settings__preview-dot settings__preview-dot--blue"
            ></span
            >Blue 0
            <span
              class="settings__preview-dot settings__preview-dot--orange"
            ></span
            >Orange 5
          </div>
          <div class="settings__preview-player">
            Current player:
            <span
              class="settings__preview-dot settings__preview-dot--blue"
            ></span>
          </div>
          <div class="settings__preview-exit">⊡ Exit game</div>
        </div>
        <div class="settings__preview-card--front"></div>
        <div class="settings__preview-card--back">
          <img src="/svg/codeVibes/git.svg" alt="preview card 2" />
        </div>
      </div>
      <div class="settings__footer">
        <span>Game theme</span>
        <img src="/svg/settings/verticalLine.svg" alt="verticalLine" />
        <span>Player</span>
        <img src="/svg/settings/verticalLine.svg" alt="verticalLine" />
        <span>Board size</span>
        <button class="settings__submit" type="submit" form="setting-from" disabled>
          Start
        </button>
      </div>
    </div>
  </main>
`,g=String.raw;new class{appEL;constructor(){this.appEL=document.querySelector(`#app`),this.showHome()}showHome(){this.appEL.innerHTML=m,document.querySelector(`#play-btn`)?.addEventListener(`click`,()=>{this.showSetting()})}showSetting(){document.documentElement.removeAttribute(`data-theme`),this.appEL.innerHTML=h;let e=document.querySelector(`.settings__preview-card--back img`),t={codeVibes:`/svg/codeVibes/git.svg`,gaming:`/svg/gaming/Asset16@2x1.svg`,daProjects:`/svg/daProjectsTheme/16_Pollapp.svg`,foods:`/svg/foods/01@3x1.svg`};this.setupThemePreviewListeners(e,t);let n=document.querySelector(`input[name="theme"]:checked`);n&&(document.documentElement.setAttribute(`data-theme`,n.value),e&&(e.src=t[n.value]??``)),this.showSetingValidateForm(),this.showSettingDocument()}setupThemePreviewListeners(e,t){let n=document.querySelector(`.settings__preview`),r=document.querySelectorAll(`input[name="theme"]`),i=r=>{n?.setAttribute(`data-theme`,r),e&&(e.src=t[r]??``)},a=()=>{let e=document.querySelector(`input[name="theme"]:checked`);e&&i(e.value)};r.forEach(e=>{e.addEventListener(`change`,()=>i(e.value));let t=e.closest(`label`);t?.addEventListener(`mouseenter`,()=>i(e.value)),t?.addEventListener(`mouseleave`,a)})}showSetingValidateForm(){let e=document.querySelector(`#setting-from`),t=document.querySelector(`.settings__submit`);if(e&&t){let n=()=>{let n=new FormData(e),r=n.has(`player`),i=n.has(`cardCount`);t.disabled=!(r&&i)};e.addEventListener(`change`,n),n()}}showSettingDocument(){document.querySelector(`#setting-from`)?.addEventListener(`submit`,e=>{e.preventDefault();let t=e.target,n=new FormData(t),r=n.get(`theme`),i=Number(n.get(`cardCount`)),a=n.get(`player`)??`blue`;!r||!i||!a||this.showGame(r,i,a)})}showGame(e,t,n){document.documentElement.setAttribute(`data-theme`,e),this.appEL.innerHTML=g`
      <section>
        <div class="memory-board">
          <div id="game-header"></div>
          <div id="field" class="game-grid"></div>
        </div>
      </section>
    `,new p({theme:e,cardCount:t,startingPlayer:n}),document.addEventListener(`game:exit`,()=>this.showSetting(),{once:!0})}};