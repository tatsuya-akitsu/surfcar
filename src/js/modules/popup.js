import $ from 'jquery'

export default class popup {
    popupPosition() {
        $(function() {
            $('.popup__text').hover((e) => {
                $('.popup').css('top', `${e.pageY + 40}px`)
                $('.popup').toggleClass('--hover')
            });
        });
    }
}
