import $ from 'jquery'

export default class ordinalCarousel {
  firstViewCarousel() {
    $('.slick-slide').on('DOMSubtreeModified propertychange', () => {
      if ($('.slick-slide').hasClass('slick-active')) {
        let currentItem = $('.slick-active').children().children()
        if (currentItem.hasClass('carousel__item--01')) {
          $('.dots__item--06').removeClass('is-active')
          $('.dots__item--01').addClass('is-active')
        } else if (currentItem.hasClass('carousel__item--02')) {
          $('.dots__item--01').removeClass('is-active')
          $('.dots__item--02').addClass('is-active')
        } else if (currentItem.hasClass('carousel__item--03')) {
          $('.dots__item--02').removeClass('is-active')
          $('.dots__item--03').addClass('is-active')
        } else if (currentItem.hasClass('carousel__item--04')) {
          $('.dots__item--03').removeClass('is-active')
          $('.dots__item--04').addClass('is-active')
        } else if (currentItem.hasClass('carousel__item--05')) {
          $('.dots__item--04').removeClass('is-active')
          $('.dots__item--05').addClass('is-active')
        } else if (currentItem.hasClass('carousel__item--06')) {
          $('.dots__item--05').removeClass('is-active')
          $('.dots__item--06').addClass('is-active')
        }
      }
    })
  }

  ordinalDots() {
    const item = $('.carousel-dots__item')
    let windowHeight = $(window).height()
    const nav = $('.js-nav').outerHeight()
    $(window).on('load resize', () => {
      if (window.matchMedia("(min-width:769px)").matches){
        // ①windowの読み込みが完了したときに、640px以下の場合に行いたいもの
        item.css('height', (windowHeight - nav) / 2 - 20 + 'px')
      }
      
      function matchFunction(){
        if(window.matchMedia("(min-width:769px)").matches){
          // ④windowサイズを変更して、641px以上になったら発火するイベント
          item.css('height', (windowHeight - nav) / 2 - 20 + 'px')
        }
      }
      window.matchMedia("(mix-width:769px)").addListener(matchFunction);
    })
  }

  // adjustCarousel() {
  //   $(window).on('load resize', () => {
  //     let elem  = $('.recommendation-carousel')
  //     let elemChild = elem.children().children()[0].childNodes
  //     let elemMaxHeight = 0
  //     let elemArray = new Array
  //
  //     Array.prototype.forEach.call(elemChild, (elemItem) => {
  //       elemItem.style.height = ''
  //       elemArray.push(elemItem.clientHeight)
  //     })
  //
  //     elemMaxHeight = Math.max.apply(null, elemArray)
  //
  //     Array.prototype.forEach.call(elemChild, (elemItem) => {
  //       elemItem.style.height = elemMaxHeight + 'px'
  //       $('.carousel-item').css('height', elemMaxHeight + 'px')
  //     })
  //   })
  // }
}
