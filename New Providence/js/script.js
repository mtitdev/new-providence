function planTab(btn, card) {
  const array = document.getElementsByClassName("switch_btn");
  console.log(array);
  Array.from(array).forEach(element =>{
    element.classList.remove("_active");
  });
  btn.classList.add("_active");

  const array2 = document.getElementsByClassName("card_wrap");
  console.log(array2);
  Array.from(array2).forEach(element => {
    element.classList.remove("card_active");
  });
  card.classList.add("card_active");
}

function cardTab(card) {
  const array = document.getElementsByClassName("plan_card");
  console.log(array);
  Array.from(array).forEach(element =>{
    element.classList.remove("_active");
  });
  card.classList.add("_active");
}



$(document).ready(function(){
  $('.gallery').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});