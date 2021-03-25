document.addEventListener('DOMContentLoaded',function(){
  const ta = new TextAnimation('.animate-title');
  // const el = document.querySelector('.animate-title');
  // const str = el.innerHTML.trim();
  // let concatStr ='';
  // for(let c of str){
  //   c = c.replace(' ','&nbsp;');
  //    concatStr = concatStr + `<span class="char">${c}</span>`;
  // }
  // el.innerHTML = concatStr;
})


class TextAnimation {
  constructor(el){
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
  }
  //method
  _splitText(){
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/,'&nbsp');
      return `${acc}<span class = "char">${curr}</span>`;
    },"");
  }
}

const obj = {
  first_name : 'Mafia',
  last_name : 'Code',
  printFullName: function(){
    console.log(this.first_name)
  }
}
obj.printFullName();
