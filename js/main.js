$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
        {
          breakpoint: 1124,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 760,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
  });