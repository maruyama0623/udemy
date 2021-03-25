document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation2('.animate-title-2','matsuda');
    ta.animate();
    ta2.call();
    btn.addEventListener('click', ta.animate.bind(ta));
    console.log(ta)
});


class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.el.classList.toggle('inview');
    }
}


class TextAnimation2 extends TextAnimation{
    constructor(el,car){
        super(el);
        this.car = car;
    }
    call(){
        console.log(this.car);
    }
}

