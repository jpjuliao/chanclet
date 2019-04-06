jQuery(document).ready(function($){
    'use strict';

    let currentSectionIndex = 0,
        sectionsIds = ['#home', '#works', '#team', '#quote'],
        sectionsPos = getSectionsPos( sectionsIds ),
        ts; // = touchStart

    $('.contenedor')
        .bind('mousewheel', function(e){

            if ($(this).hasClass('scroll-event-timeout')) {
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

            if ($(this).hasClass('scroll-event-timeout')) {
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

    $('.navigation-tabs a').click(function(e){
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

        $(el).animate({
            scrollTop: sectionsPos[currentSectionIndex]
        }, 500);
        
        $(el).addClass('scroll-event-timeout');
        setTimeout(function(){
            $('.contenedor').removeClass('scroll-event-timeout');
        }, 1000);

    }
        
});