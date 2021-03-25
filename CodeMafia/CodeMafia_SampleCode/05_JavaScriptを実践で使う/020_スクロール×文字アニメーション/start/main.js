document.addEventListener('DOMContentLoaded', function () {
const child = document.querySelector('.child');
const cb = function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      console.log('in view');
      entry.target.classList.add('inview');
      console.log(observer);
      console.log(entries);
      console.log(entry.target)
      // observer.unobserve(entry.target);
    }else{
      console.log('out view');
      entry.target.classList.remove('inview');
    }
  })
}

const ab = function(){
  alert('Hello');
}

const options = {
  root: null,
  rootMargin: "100px 0px",
}
const io = new IntersectionObserver(cb,options);

io.observe(child);



    
    const els = document.querySelectorAll('.animate-title');
    const cb = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const ta = new TextAnimation('.animate-title');
                ta.animate();
                observer.unobserve(entry.target);
            } else {
            }
        });
       
    }
    const options = {
        root: null,
        rootMargin: "-300px 0px",
        threshold: [0, 0.5, 1]
    };
    const io = new IntersectionObserver(cb, options);
    io.observe(els);
});

// text-animation.jsに以下のコードをカット＆ペースト
// してファイル分割をしましょう。
class TextAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.DOM.el.classList.toggle('inview');
    }
}
class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el);
        this.DOM.chars = this.DOM.el.querySelectorAll('.char');
    }

    animate() {
        this.DOM.el.classList.add('inview');
        this.DOM.chars.forEach((c, i) => {
            TweenMax.to(c, .6, {
                ease: Back.easeOut,
                delay: i * .05,
                startAt: { y: '-50%', opacity: 0 },
                y: '0%',
                opacity: 1
            });
        });
    }
}
