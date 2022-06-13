$(document).ready(function () {
    $('.navigators-play').on('click', function () {
            $( '.navigators-pause' ).toggle();
            $( '.navigators-play' ).toggle();
            $('#video').trigger( $('video').prop('paused') ? 'play' : 'pause');
        });
        
        
        
        
    $('.pause').on('click', function() {
        console.log('Navigator is working!');
        $('#video').trigger( $('video').prop('paused') ? 'play' : 'pause');
        $( '.navigators-pause' ).toggle();
        $( '.navigators-play' ).toggle();
    })
        
    $('.forward').on('click', function() {
        console.log('Forward button is working!');
        $('.video').toggle();
        // $('.video1').pause();
    })
    
    $('.backward').on('click', function() {
        console.log('Backward button is working!');
        $('.video').toggle();
        })
    })
