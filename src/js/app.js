import $ from 'jquery'
import adjustContainer from './modules/adjustContainer'
import slickConfig from './modules/slick'

const adjust = new adjustContainer
const carouselConfig = new slickConfig

$(function() {
  adjust.adjustHeader()
  carouselConfig.mainSlick()
})
