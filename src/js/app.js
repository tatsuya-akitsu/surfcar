import $ from 'jquery'
import adjustContainer from './modules/adjustContainer'
import slickConfig from './modules/slick'
import ordinalCarousel from './modules/ordinalCarouselDots'
import scrollAnim from './modules/scrollAnim'
import loadingAnim from './modules/loading'
import popup from './modules/popup'

const adjust = new adjustContainer;
const carouselConfig = new slickConfig;
const ordinalCarouselConfig = new ordinalCarousel;
const scrollAnimation = new scrollAnim;
const loadingInit = new loadingAnim;
const popupJs = new popup;

$(function() {
  adjust.adjustHeader();
  adjust.adjustThanks();
  carouselConfig.mainSlick();
  ordinalCarouselConfig.firstViewCarousel();
  ordinalCarouselConfig.ordinalDots();
  scrollAnimation.easingHref();
  loadingInit.loadingElem();
  popupJs.popupPosition();
});
