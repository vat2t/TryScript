$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
  });