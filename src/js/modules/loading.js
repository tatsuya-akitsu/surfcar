import $ from "jquery";

export default class loadingAnim {
  loadingElem() {
    let wh = $(window).height();
    $("#loader").css({
      display: "block",
      height: wh + "px"
    });
    $('html, body').css('height', wh + 'px')

    $(window).on("load", () => {
      $("#loader").delay(900).fadeOut(800);
      $("#loaderInner").delay(600).fadeOut(300);
      $('.loader').css('z-index', '-9999')
      $('html, body').css('height', 'auto')
      setTimeout(() => {
        $("#wrap").animate({
          opacity: "1"
        });
      }, 1000);
    });
  }
}
