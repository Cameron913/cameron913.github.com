// allow :active styles to work on iOS & Android
document.addEventListener("touchstart", function(){}, true);

// iDangerous Swiper init
window.onload = function() {
  var mySwiper = new Swiper('.swiper-container',{
    //Your options here:
    mode:'horizontal',
    loop: true,
    calculateHeight: true,
    grabCursor: true,
	    updateOnImagesReady: true,
	    autoResize: true,
	    simulateTouch: true
  });
}
