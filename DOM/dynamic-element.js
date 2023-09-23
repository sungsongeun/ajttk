/*
let addBtn = document.getElementById('button');
let input = document.querySelector('input');

console.log(inputBox.value);

addBtn.addEventListener('click',function () {
  alert('hello');

  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = '데드리프트';
  ul.appendChild(li); 
});
*/

let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before');
let inputBox = document.querySelector('input');
let removeTargetBtn = document.querySelector('target-remove');

let removebtn = document.querySelector('.remove-btn');


addBtn.addEventListener('click',function() {
  //alert('hello');
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputBox.value;

  let button = document.createElement('button');
  button.textContent = 'X';

  button.setAttribute('class','remove-btn'); 
  //button.classlist.add('remove-btn')도 가능 
  
  button.addEventListener('click',function() {
    event.target.parentNode.remove();
  });

  li.appendChild(button);
  ul.appendChild(li); 

  inputBox.value = '' //input박스에 value 값 비우기 - 이전에 작성한 단어 자동으로 없어짐
  inputBox.focus(); // 포커스 자동으로 움직임

});

addBeforeBtn.addEventListener('click', function() {
  //alert('happy');
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetli = document.querySelector('li#target') //태그명이 li이면서 id가 target인 것 
  console.log(targetli);
  li.textContent = inputBox.value;
  // ul.appendChild(li); //뒤로 추가된다 but 앞으로 추가하기를 원함 

  // X버튼 생성
  let button = document.createElement('button');
  button.textContent = 'X';
  button.setAttribute('class','remove-btn'); 
  li.appendChild(button);

  // X버튼 클릭시 삭제
  button.addEventListener('click',function(event) {
    event.target.parentNode.remove(event);
  });

  ul.insertBefore(li,targetli);
});

removeTargetBtn.addEventListener('click',function(){
  let targetli = document.querySelector('li#target');
  targetli.remove();
});

removebtn.addEventListener('click',function(event){ //(event)클릭 이벤트에 관한 정보
  console.log(event.target.parentNode);
  event.target.parentNode.remove();
});

//중복되는 값 묶기
function removeParentNode(event){
  event.target.parentNode.remove();
  inputBox.focus();
  inputBox.value = '';

}