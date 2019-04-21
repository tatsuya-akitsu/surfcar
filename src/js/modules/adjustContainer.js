import $ from 'jquery'

export default class adjustContainer {
  adjustHeader() {
    const header = $('.js-header')
    let windowHeight = $(window).height()
    const nav = $('.js-nav').outerHeight()
    $(window).on('load resize', () => {
      if (window.matchMedia("(min-width:769px)").matches){
        // ①windowの読み込みが完了したときに、640px以下の場合に行いたいもの
        header.css({
          // 'height': windowHeight - nav + 'px',
          'margin-top': nav + 'px',
          'height': `${$(window).height()}px`
        })
      } else {
        $('.js-footer').css('margin-bottom', $('.js-nav--sp').outerHeight() + 'px')
      }
      
      function matchFunction(){
        if(window.matchMedia("(min-width:769px)").matches){
          // ④windowサイズを変更して、641px以上になったら発火するイベント
          header.css({
            // 'height': windowHeight - nav + 'px',
            'margin-top': nav + 'px',
            'height': `${$(window).height()}px`
          })
        } else {
          $('.js-footer').css('margin-bottom', $('.js-nav--sp').outerHeight() + 'px')
        }
      }
      window.matchMedia("(mix-width:769px)").addListener(matchFunction);
    })
  }

  adjustThanks() {
    const container = $('.js-thanks')
    let windowHeight = $(window).height()

    $(window).on('load resize', () => {
      container.css('height', windowHeight + 'px')
    })

    $(window).on('load resize', () => {
      if (window.matchMedia("(max-width:768px)").matches){
        // ①windowの読み込みが完了したときに、640px以下の場合に行いたいもの
        $('video').remove()
      }
      
      function matchFunction(){
        if(window.matchMedia("(max-width:768px)").matches){
          // ④windowサイズを変更して、641px以上になったら発火するイベント
          $('video').remove()
        }
      }
      window.matchMedia("(max-width:768px)").addListener(matchFunction);
    })
  }
}
