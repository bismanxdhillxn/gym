// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   grabCursor: true,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// email alert 

// document.addEventListener('DOMContentLoaded', function () {
//   const subscribeButton = document.getElementById('sb');
//   subscribeButton.addEventListener('click', emailIdentifier);
// });
function emailIdentifier() {
  const emailInput = document.getElementById('inputBoxxx').value;
  if (emailInput.trim() !== '') {
    alert('Email sent successfully to:' + emailInput);
  } else {
    alert('Please enter your email.');
  }
}


