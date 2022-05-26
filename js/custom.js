$(document).ready(function() {
    /**
     * CB FORM
     */

    if($('.cb-block').length) {
        const cbBtn = $('.cb-btn')
        const cbPopup = $('.cb-popup')

        cbBtn.on('click', function() {
            cbBtn.toggleClass('active')
            cbPopup.toggleClass('active')
        })
    }

    /**
     * HOME SLIDER
     */

    if($('.home-slider').length) {
        const homeSlider = $('.home-slider')

        homeSlider.slick({
            dots: true,
            Infinite: true,
            nextArrow: '<button class="home-slider__btn home-slider__btn-next"><svg style="display: block" viewBox="0 0 7.3 13" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline fill="none" stroke="#000000" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 6.5,6.5 0.5,12.5"></polyline> </svg></button>',
            prevArrow: '<button class="home-slider__btn home-slider__btn-prev"><svg style="display: block" viewBox="0 0 7.3 13" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline fill="none" stroke="#000000" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 6.5,6.5 0.5,12.5"></polyline> </svg></button>',
        })
    }

    /**
     * ROOM POST SLIDER
     */

    if($('.room-post__slider').length) {
        const roomSlider = $('.room-post__slider')

        roomSlider.slick({
            nextArrow: '<button class="room-post-slider__btn room-post-slider__btn-next"><i class="fa fa-chevron-right next" aria-hidden="true"></i></button>',
            prevArrow: '<button class="room-post-slider__btn room-post-slider__btn-prev"><i class="fa fa-chevron-right next" aria-hidden="true"></i></button>',
        })
    }

    
})
