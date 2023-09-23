
let title = document.getElementById('title');
console.log('title');


let items = document.getElementsByTagName('item');
console.log('items');
console.log('스쿼트:',items[0]);

let list = document.getElementsByTagName('li');
console.log('list');

//html요소 쿼리
let h2 = document.querySelector('h2');
console.log('h2:',h2);

let item = document.querySelector('.item');
console.log('qureitem:',item);

let itemAll = document.querySelectorAll('.item');
console.log('itemAll:',itemAll);

/*
h2.textContent= "<span> 운동 </span>";
*/

let input = document.querySelector('input')
input.setAttribute('placeholder','헬스');

let helloitem = document.querySelector('.hello');
/*
console.log('helloitem:',helloitem);
helloitem.style.color='blue';
*/

helloitem.classList.add('dark','one');
helloitem.classList.remove('dark');
