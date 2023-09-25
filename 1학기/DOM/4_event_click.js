let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

btn1.onclick = function () {
  alert('hello property Listener')
};

/*
btn2.addEventListener('click',function(){
  alert('happy');
});
//해당 함수에 두개의 이벤트 등록 가능 ↓
*/

btn2.addEventListener('click',function(){
  alert('Day');
});

btn2.addEventListener('click',helloEvent1 );
function helloEvent1() {
  alert('happy');
};
//remove함수 적용하려면 함수 정의가 필요하다.

btn2.removeEventListener('click',helloEvent1);