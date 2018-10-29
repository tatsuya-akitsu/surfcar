import $ from 'jquery'

export default class adjustContainer {
  adjustHeader() {
    const header = $('.js-header')
    let windowHeight = $(window).height()
    $(window).on('load resize', () => {
      console.log(windowHeight)
      header.css('height', windowHeight + 'px')
    })
  }
}
