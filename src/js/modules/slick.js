import $ from 'jquery'
import 'slick-carousel'

export default class slickConfig {
  mainSlick() {
    $('.header-carousel__wrap').slick({
      dots: true,
      infinite: true,
      centerMode: true,
      centerPadding: "0",
      autoplay: false,
      autoplaySpeed: 1000,
      speed: 1500,
      fade: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            autoplay: true,
            autoplaySpeed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: 'ondemand'
          }
        },
        {
          breakpoint: 480,
          settings: {
            autoplay: true,
            autoplaySpeed: 1000,
            centerMode: true
          }
        }
      ]
    })
  }
}
