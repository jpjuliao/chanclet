jQuery(document).ready(function($){
    'use strict';

    let currentSectionIndex = 0,
        sectionsIds = ['#home', '#works', '#team', '#quote'],
        sectionsPos = [];

    $.each(sectionsIds, function(i, id) {  
        sectionsPos.push($(id).offset().top);
    });

    $('.contenedor').bind('mousewheel', function(e){

        if ($(this).hasClass('mousewheel-timeout')) {
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

        $(this).animate({
            scrollTop: sectionsPos[currentSectionIndex]
        }, 500);
        
        $(this).addClass('mousewheel-timeout');
        setTimeout(function(){
            $('.contenedor').removeClass('mousewheel-timeout');
        }, 1000);
        
    });

    var ts;
    $('.contenedor').bind('touchstart', function(e) {
        ts = e.originalEvent.touches[0].clientY;
    });

    $('.contenedor').bind('touchmove', function(e) {

        if ($(this).hasClass('mousewheel-timeout')) {
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

        $(this).animate({
            scrollTop: sectionsPos[currentSectionIndex]
        }, 500);
        
        $(this).addClass('mousewheel-timeout');
        setTimeout(function(){
            $('.contenedor').removeClass('mousewheel-timeout');
        }, 1000);

    });

    $('.navegation-tabs a').click(function(e){
        e.preventDefault();

        let href = $(this).attr('href');

        $.each(sectionsIds, function(i, id){

            if (id == href) {
                currentSectionIndex = i;
            }
        });

        $('.contenedor').animate({
            scrollTop: sectionsPos[currentSectionIndex]
        }, 500);

    })

        
});