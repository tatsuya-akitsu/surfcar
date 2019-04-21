import $ from 'jquery'
import 'slick-carousel'

export default class slickConfig {
  mainSlick() {
    $('.header-carousel__wrap').slick({
      dots: true,
      infinite: true,
      centerMode: true,
      centerPadding: "0",
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: 'ondemand'
          }
        },
        {
          breakpoint: 480,
          settings: {
            autoplay: true,
            autoplaySpeed: 4000,
            centerMode: true
          }
        }
      ]
    })
  }

  // recommendSlick() {
  //   $('.recommendation-carousel').slick({
  //     dots: true,
  //     infinite: true,
  //     centerMode: true,
  //     centerPadding: "0",
  //     autoplay: true,
  //     autoplaySpeed: 8000,
  //     speed: 1500,
  //     slidesToShow: 3,
  //     responsive: [
  //       {
  //         breakpoint: 1200,
  //         settings: {
  //           autoplay: true,
  //           autoplaySpeed: 8000,
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //           lazyLoad: 'ondemand'
  //         }
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           autoplay: true,
  //           autoplaySpeed: 8000,
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           lazyLoad: 'ondemand'
  //         }
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           autoplay: true,
  //           autoplaySpeed: 8000,
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           centerMode: true
  //         }
  //       }
  //     ]
  //   })
  // }
}
