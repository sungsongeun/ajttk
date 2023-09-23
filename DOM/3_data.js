let h2 = document.querySelector('h2');
h2.dataset.test = 'hello js';
console.log('h2.dataset.test:',h2.dataset.test);

let img = document.querySelector('img')
let lilist = document.querySelectorAll('li');
let selectdeItem = document.querySelector('.selected-item');

lilist[0].addEventListener('click',function(event){
  event.target.dataset.img
  selectdeItem.textContent = event.target.textContent;
  // console.log(event.target.dataset.img); // 이미지 잘 가져와지는지 확인
  img.setAttribute('src', event.target.dataset.img);
});

lilist[1].addEventListener('click',function(event){
  event.target.dataset.img
  selectdeItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
});

lilist[2].addEventListener('click',function(event){
  event.target.i7dataset.img
  selectdeItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
});

/*
function selectdeItem(event){
  selectdeItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
}
*/