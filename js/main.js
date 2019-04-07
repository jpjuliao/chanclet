jQuery(document).ready(function($){
    'use strict';

    let currentSectionIndex = 0,
        sectionsIds = ['#home', '#works', '#team', '#quote'],
        sectionsPos = getSectionsPosition( sectionsIds ),
        touchStartY,
        scrollTimeout = 1000,
        animationDuration = 1500,
        animationEffect = 'easeInOutExpo'; //'easeOutQuad'; // https://easings.net/en

    $('main')
        .bind('mousewheel', function(e){

            if (isAnimationInProgress()) {
                return;
            }

            if (e.originalEvent.wheelDelta > 0) {
                //console.log('up');
                currentSectionIndex--;
            }
            
            if (e.originalEvent.wheelDelta < 0) {
                //console.log('down');
                currentSectionIndex++;
            }

            scrollTo(this);
            
        })
        .bind('touchstart', function(e) {
            touchStartY = e.originalEvent.touches[0].clientY;
        })
        .bind('touchmove', function(e) {

            if (isAnimationInProgress()) {
                return;
            }

            if (touchStartY > e.originalEvent.changedTouches[0].clientY) {
                //console.log('down');
                currentSectionIndex++;
            } else {
                //console.log('up');
                currentSectionIndex--;
            }

            scrollTo(this);

        });

    $('.navigation-tabs a')
        .click(function(e){
            e.preventDefault();

            if (isAnimationInProgress()) {
                return;
            }

            let href = $(this).attr('href');

            $.each(sectionsIds, function(i, id){

                if (id == href) {
                    currentSectionIndex = i;
                }
            });

            scrollTo('main');

        })

    $('.navigation-tabs li')
        .first().addClass('active');

    function getSectionsPosition(sectionsIds) {
        let arr = [];
        $.each(sectionsIds, function(i, id) {  
            arr.push( $(id).offset().top );
        });
        return arr;
    }

    function scrollTo(el) {

        if (currentSectionIndex < 0) {
            currentSectionIndex = 0;
        }
        if (currentSectionIndex === sectionsIds.length) {
            currentSectionIndex = sectionsIds.length - 1;
        };

        $(el).find('.section-tab').first().animate({
            //scrollTop: sectionsPos[currentSectionIndex]
            marginTop: (currentSectionIndex * -100) + 'vh'
        }, animationDuration, animationEffect);
        
        $(el).addClass('scroll-event-in-progress');
        setTimeout(function(){
            $('main').removeClass('scroll-event-in-progress');
        }, scrollTimeout);

        let linkChildIndex = currentSectionIndex + 1;
        $('.navigation-tabs li')
            .removeClass('active')
            .filter(':nth-child('+linkChildIndex+')')
            .addClass('active');

    }

    function isAnimationInProgress() {
        if ($('main').hasClass('scroll-event-in-progress')) {
            return true;;
        }
    }
        
});