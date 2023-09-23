const joinId = document.querySelector(".join-id");
const joinPw = document.querySelector(".join-pw");
const joinRePw = document.querySelector(".join-re-pw");
const joinBtn = document.querySelector(".join-btn");
const checkResult = document.querySelector(".join-result");

const ID = "id";
const PW = "pw";

joinBtn.addEventListener("click",() => {
  localStorage.setItem(ID, joinId.value);

  if(joinPw.value === joinRePw.value){
    checkResult.innerText = "비밀번호 맞음";
    checkResult.computedStyleMap.color = "blue";

    localStorage.setItem(ID, joinId.value);
    localStorage.setItem(Pw, joinPw.value);
  }
  else{
    checkResult.innerText ="비밀번호틀림";
    checkResult.style.color = "red";
  }
})

const loginId = document.querySelector(".login-id");
const loginPw = document.querySelector(".login-pw");
const loginbtn = document.querySelector(".login-btn");

let saveId = localStorage.getItem(ID);
let savePw = localStorage.getItem(Pw);

loginbtn.addEventListener(click, () => {
  if(loginId.value === saveId && loginPw.value === savePw){
  alert("로그인 성공");
  }
  else{
    alert("아이디, 비번 틀림");
  }
})