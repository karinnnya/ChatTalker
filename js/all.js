// const swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   autoHeight: true,
//   autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//   },
//   breakpoints: {
//       992: {
//           slidesPerView: 3,
//       },
//   },
// });


const price_btn10 = document.getElementById('price_btn10');
const price_btn15 = document.getElementById('price_btn15');
const price_btn20 = document.getElementById('price_btn20');
const price_btn25 = document.getElementById('price_btn25');
const price_btn30 = document.getElementById('price_btn30');


const basic_price = document.querySelector('.basic_price');
const adv_price = document.querySelector('.adv_price');
const people_sub = document.querySelectorAll('.people_sub');


price_btn10.addEventListener('click', function() {
    people_sub[0].textContent=10000;
    people_sub[1].textContent=10000;
    basic_price.textContent=600;
    adv_price.textContent=1200;
}
);

price_btn15.addEventListener('click', function() {
    // price_btn15.classList.add("active");

    people_sub[0].textContent=15000;
    people_sub[1].textContent=15000;
    basic_price.textContent=700;
    adv_price.textContent=1300;
}
);
price_btn20.addEventListener('click', function() {
    people_sub[0].textContent=20000;
    people_sub[1].textContent=20000;
    basic_price.textContent=800;
    adv_price.textContent=1400;
}
);
price_btn25.addEventListener('click', function() {
    people_sub[0].textContent=25000;
    people_sub[1].textContent=25000;
    basic_price.textContent=900;
    adv_price.textContent=1600;
}
);
price_btn30.addEventListener('click', function() {
    people_sub[0].textContent=">25000";
    people_sub[1].textContent=">25000";
    basic_price.textContent="客製化";
    adv_price.textContent="客製化";
    // $(span).hide();
}
);

goTop = document.getElementById("goTop");

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;    
};



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    goTop.style.visibility = "visible";
  } else {
    goTop.style.visibility = "hidden";
  }
}

// document.body.addEventListener('onscroll',function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//          goTop.addClass('hide');
//     } else {
//          goTop.addClass('hide');
//     }
//   }
// )

// $('.btn_price').click(function(e){
//   e.preventDefault();
//   $('.btn_price').addClass('active'); 
// })