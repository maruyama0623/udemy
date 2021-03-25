const child = document.querySelector('.child');
const child2 = document.querySelector('.child2');
const child3 = document.querySelector('.child3');
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
io.observe(child2);
io.observe(child3);
