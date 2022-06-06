$('#latest-campaign').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    speed: 1500,
    adaptiveHeight: true,
    prevArrow: '<div class="slick-arrow arrow-prev"><img src="/assets/arrow-left.svg" ></div>',
    nextArrow: '<div class="slick-arrow arrow-next"><img src="/assets/arrow-right.svg" ></div>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              prevArrow: '<div class="slick-arrow arrow-prev"><img src="/assets/arrow-left.svg" ></div>',
              nextArrow: '<div class="slick-arrow arrow-next"><img src="/assets/arrow-right.svg" ></div>'
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 600,
              centerMode: true,
              infinite: false,
              prevArrow: false,
              nextArrow: false
            }
        }
    ]
});

$('#latest-campaign-mobile').owlCarousel({
  loop:true,
  nav:false,
  dots: false,
  items: 1.2
})

$('#featured-campaign').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    speed: 1500,
    adaptiveHeight: true,
    prevArrow: '<div class="slick-arrow arrow-prev"><img src="/assets/arrow-left.svg" ></div>',
    nextArrow: '<div class="slick-arrow arrow-next"><img src="/assets/arrow-right.svg" ></div>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              prevArrow: '<div class="slick-arrow arrow-prev"><img src="/assets/arrow-left.svg" ></div>',
              nextArrow: '<div class="slick-arrow arrow-next"><img src="/assets/arrow-right.svg" ></div>'
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 600,
              centerMode: true,
              infinite: false,
              prevArrow: false,
              nextArrow: false
            }
        }
    ]
});

$('#featured-campaign-mobile').owlCarousel({
  loop:true,
  nav:false,
  dots: false,
  items: 1.2
})

// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

setInputFilter(document.getElementById("amountRange"), function(value) {
  return /^-?\d*[.]?\d*$/.test(value);
});

function searchClick(type){
    let input = document.getElementById(`search-${type}`).value;
    window.location.href = `/charities/search?q=${input}`;

    console.log(input);
    
}
