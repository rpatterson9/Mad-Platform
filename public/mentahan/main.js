$('#latest-campaign').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1500,
    adaptiveHeight: true,
    prevArrow: '<div class="slick-arrow arrow-prev"><img src="./assets/arrow-left.svg" ></div>',
    nextArrow: '<div class="slick-arrow arrow-next"><img src="./assets/arrow-right.svg" ></div>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
        }
    ]
});

$('#featured-campaign').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1500,
    adaptiveHeight: true,
    prevArrow: '<div class="slick-arrow arrow-prev"><img src="./assets/arrow-left.svg" ></div>',
    nextArrow: '<div class="slick-arrow arrow-next"><img src="./assets/arrow-right.svg" ></div>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
        }
    ]
});