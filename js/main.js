jQuery(document).ready(function($){
    'use strict';

    let currentSectionIndex = 0,
        sectionsIds = ['#home', '#works', '#team', '#quote'],
        sectionsPos = getSectionsPos( sectionsIds ),
        ts, // = touchStart
        scrollTimeout = 2000,
        animationDuration = 1500,
        animationEffect = 'easeInOutExpo'; //'easeOutQuad'; // https://easings.net/en

    $('.contenedor')
        .bind('mousewheel', function(e){

            if (scrollInProgress()) {
                return;
            }

            if (e.originalEvent.wheelDelta > 0) {
                //console.log('up');
                if (currentSectionIndex === 0) return;
                currentSectionIndex--;
            }
            
            if (e.originalEvent.wheelDelta < 0) {
                //console.log('down');
                if (currentSectionIndex === 3) return;
                currentSectionIndex++;
            }

            scrollToElement(this);
            
        })
        .bind('touchstart', function(e) {
            ts = e.originalEvent.touches[0].clientY;
        })
        .bind('touchmove', function(e) {

            if (scrollInProgress()) {
                return;
            }

            var te = e.originalEvent.changedTouches[0].clientY;
            if (ts > te) {
                //console.log('down');
                currentSectionIndex++;
            } else {
                //console.log('up');
                currentSectionIndex--;
            }

            scrollToElement(this);

        });

    $('.navigation-tabs a')
        .click(function(e){
            e.preventDefault();

            let href = $(this).attr('href');

            $.each(sectionsIds, function(i, id){

                if (id == href) {
                    currentSectionIndex = i;
                }
            });

            scrollToElement('.contenedor');

        })

    function getSectionsPos(sectionsIds) {
        let arr = [];
        $.each(sectionsIds, function(i, id) {  
            arr.push( $(id).offset().top );
        });
        return arr;
    }

    function scrollToElement(el) {

        $(el).find('.section-tab').first().animate({
            //scrollTop: sectionsPos[currentSectionIndex]
            marginTop: (currentSectionIndex * -100) + 'vh'
        }, animationDuration, animationEffect);
        
        $(el).addClass('scroll-event-in-progress');
        setTimeout(function(){
            $('.contenedor').removeClass('scroll-event-in-progress');
        }, scrollTimeout);

        let linkChildIndex = currentSectionIndex + 1;
        $('.navigation-tabs li')
            .removeClass('active')
            .filter(':nth-child('+linkChildIndex+')')
            .addClass('active');

    }

    function scrollInProgress() {
        if ($('.contenedor').hasClass('scroll-event-in-progress')) {
            return true;;
        }
    }
        
});