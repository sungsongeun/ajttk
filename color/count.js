function count(type){
  const resultElement = document.getElementById('result');

let number = resultElement.innerText;

if(type === 'Increase') {
  number = parseInt(number) + 1;
}else if(type === 'Decrease')  {
  number = parseInt(number) - 1;
} else if (type === 'Reset' ) {
  number = 0;
}

resultElement.innerText = number;
}

