import $ from "jquery";

export default class scrollAnim {
  // introAnim() {
  //   $(window).on("scroll", () => {
  //     const item = $(".js-thumbnail");
  //     item.each(() => {
  //       let itemOffset = item.offset().top;
  //       let scrollPos = $(window).scrollTop();
  //       const wh = $(window).height();
  //
  //       if (scrollPos > itemOffset - wh + wh / 2) {
  //         item.addClass("is-over");
  //       } else {
  //         item.removeClass("is-over");
  //       }
  //     });
  //   });
  // }

  // caseAnim() {
  //   $(window).on("scroll", () => {
  //     const case01 = $("#case01");
  //     case01.each(() => {
  //       let itemOffset = case01.offset().top;
  //       let scrollPos = $(window).scrollTop();
  //       const wh = $(window).height();
  //
  //       if (scrollPos > itemOffset - wh + wh / 2) {
  //         case01.delay(case01.data("delay")).addClass("animate-in");
  //       }
  //     });
  //
  //     const case02 = $("#case02");
  //     case02.each(() => {
  //       let itemOffset = case02.offset().top;
  //       let scrollPos = $(window).scrollTop();
  //       const wh = $(window).height();
  //
  //       if (scrollPos > itemOffset - wh + wh / 2) {
  //         case02.delay(case02.data("delay")).addClass("animate-in");
  //       }
  //     });
  //
  //     const case03 = $("#case03");
  //     case03.each(() => {
  //       let itemOffset = case03.offset().top;
  //       let scrollPos = $(window).scrollTop();
  //       const wh = $(window).height();
  //
  //       if (scrollPos > itemOffset - wh + wh / 2) {
  //         case03.delay(case03.data("delay")).addClass("animate-in");
  //       }
  //     });
  //
  //     const case04 = $("#case04");
  //     case04.each(() => {
  //       let itemOffset = case04.offset().top;
  //       let scrollPos = $(window).scrollTop();
  //       const wh = $(window).height();
  //
  //       if (scrollPos > itemOffset - wh + wh / 2) {
  //         case04.delay(case04.data("delay")).addClass("animate-in");
  //       }
  //     });
  //   });
  // }

  easingHref() {
    $('a[href^="#"]').click(function() {
      var speed = 1000;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
  }
}
