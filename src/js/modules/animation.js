import $ from 'jquery'

export default class ordinalAnimation {
  systemAnim() {
    $(window).on("scroll", () => {
      const media01 = $(".system-media--01");
      media01.each(() => {
        let itemOffset = media01.offset().top;
        let scrollPos = $(window).scrollTop();
        const wh = $(window).height();

        if (scrollPos > itemOffset - wh + wh / 2) {
          media01.addClass('is-fadeIn')
        } else {
          media01.removeClass('is-fadeIn')
        }
      })

      const media02 = $(".system-media--02");
      media02.each(() => {
        let itemOffset = media02.offset().top;
        let scrollPos = $(window).scrollTop();
        const wh = $(window).height();

        if (scrollPos > itemOffset - wh + wh / 2) {
          media02.addClass('is-fadeIn')
        } else {
          media02.removeClass('is-fadeIn')
        }
      })

      const systemItem01 = $('.system-item--01')
      systemItem01.each(() => {
        let itemOffset = systemItem01.offset().top;
        let scrollPos = $(window).scrollTop();
        const wh = $(window).height();

        if (scrollPos > itemOffset - wh + wh / 2) {
          systemItem01.addClass('is-fadeIn')
        } else {
          systemItem01.removeClass('is-fadeIn')
        }
      })

      const systemItem02 = $('.system-item--02')
      systemItem02.each(() => {
        let itemOffset = systemItem02.offset().top;
        let scrollPos = $(window).scrollTop();
        const wh = $(window).height();

        if (scrollPos > itemOffset - wh + wh / 2) {
          systemItem02.addClass('is-fadeIn')
        } else {
          systemItem02.removeClass('is-fadeIn')
        }
      })

      const systemItem03 = $('.system-item--03')
      systemItem03.each(() => {
        let itemOffset = systemItem03.offset().top;
        let scrollPos = $(window).scrollTop();
        const wh = $(window).height();

        if (scrollPos > itemOffset - wh + wh / 2) {
          systemItem03.addClass('is-fadeIn')
        } else {
          systemItem03.removeClass('is-fadeIn')
        }
      })

      const systemItem04 = $('.system-item--04')
      systemItem04.each(() => {
        let itemOffset = systemItem04.offset().top;
        let scrollPos = $(window).scrollTop();
        const wh = $(window).height();

        if (scrollPos > itemOffset - wh + wh / 2) {
          systemItem04.addClass('is-fadeIn')
        } else {
          systemItem04.removeClass('is-fadeIn')
        }
      })

      const systemItem05 = $('.system-item--05')
      systemItem05.each(() => {
        let itemOffset = systemItem05.offset().top;
        let scrollPos = $(window).scrollTop();
        const wh = $(window).height();

        if (scrollPos > itemOffset - wh + wh / 2) {
          systemItem05.addClass('is-fadeIn')
        } else {
          systemItem05.removeClass('is-fadeIn')
        }
      })

      const systemItem06 = $('.system-item--06')
      systemItem06.each(() => {
        let itemOffset = systemItem06.offset().top;
        let scrollPos = $(window).scrollTop();
        const wh = $(window).height();

        if (scrollPos > itemOffset - wh + wh / 2) {
          systemItem06.addClass('is-fadeIn')
        } else {
          systemItem06.removeClass('is-fadeIn')
        }
      })
    })
  }
}