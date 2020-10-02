// ======================================
// 		Header jQuery Start
// ======================================
$(".close").click(function(){
    $(".form").fadeOut();
})
$(".register").click(function(){
    $(".register_form").fadeIn();
})
$(".log_in").click(function(){
    $(".login_form").fadeIn();
})
// ======================================
// 		Banner Plugin Start
// ======================================
$('.banner').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
});
// ======================================
// 		About US Plugin Start
// ======================================
$('.imgplugin').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
});
// ======================================
// 		Counter Plugin Start
// ======================================
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// ======================================
// 		Course Plugin Start
// ======================================
$('.course_plugin').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
});
// ======================================
// 		Testimonial Plugin Start
// ======================================
$('.tesi_plug').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
});
// ======================================
// 		Footer Plugin Start
// ======================================
$('.footer_plugin').slick({
    dots: false,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 600,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
});