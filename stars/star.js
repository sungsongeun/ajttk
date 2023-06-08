const ratingContainer = document.querySelector("#rating");
const stars = document.querySelector("stars");

ratingContainer.addEventListener("mousemove", (event)=> {
  stars.getElementsByClassName.width = event.OffsetX+"px";
} )

// 중단점을 배열로 관리하기
const stopPointPixel = [0, 30, 60, 100, 130, 170, 200, 240, 270, 310, 340];

contRating.addEventListener("mousemove", (event) => {
  const offsetX = event.offsetX;
  let width = 0;

  for (let i = stopPointPixel.length - 1; i >= 0; i--) {
    if (offsetX > stopPointPixel[i - 1] + 15) {
      width = stopPointPixel[i];
      break;
    }
  }

  stars.style.width = width + "px";
});

ratingContainer.addEventListener("click", () => {
  widthpixel = stars
})

/*

for(let i = stopPointPixel.length; i >= 0; 1--){
  if(offsetX > stopPointPixel[i-1] + 15 ) {
    width = stopPointPixel=[i];
    break;
  }
}