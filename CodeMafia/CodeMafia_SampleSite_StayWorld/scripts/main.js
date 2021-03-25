document.addEventListener('DOMContentLoaded', function () {
  const hero = new HeroSlider('coverflow');
  //HeroSliderをインスタンス化する時に第一引数にエフェクトを指示すること ※Swiper effectで検索
  hero.start({
    delay:4000,//自動ページネーションするの間隔
    disableOnInteraction: false,//マウス操作後の自動ページネーション ※falseは止まらない
  });
  

  const cb = function (el, inview) {
    if(inview) {
        const ta = new TweenTextAnimation(el);
        ta.animate();
    }
  }

  const _inviewAnimation = function(el,inview){
    if(inview){
      el.classList.add('inview');
    }else{
      el.classList.remove('inview');
    }
  }



const so = new ScrollObserver('.tween-animate-title', cb);
const so2 = new ScrollObserver('.cover-silde', _inviewAnimation);
});


