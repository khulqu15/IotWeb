if( $(window).innerWidth() >= 767 ) {
    $('#menu-nav').show();
    $('#menu-close').hide();
} 

$(window).ready(function(){
    $('#menu-toggle').click(function(){
        $('#menu-nav').slideToggle(500);
        $('#menu-toggle').toggle(500);
        $('#menu-close').toggle(500);
        $('#ul-menu li a').addClass('text-black');
        $('body').addClass('overflowx');
        $('#ul-menu li svg').addClass('text-black');
    })
    $('#menu-close').click(function(){
        $('#menu-nav').hide(500);
        $('#menu-toggle').toggle(500);
        $('#menu-close').toggle(500);
        $('.settings').hide(500);
        $('#settingsNav').slideToggle(500);
        $('#settingsClose').slideToggle(500);
        $('body').removeClass('overflowx');
    })
    // $('#settingsNav').click(function() {
    //     $('nav').addClass('nav-down');
    //     $('#settingsNav').slideToggle(500);
    //     $('body').addClass('overflowx');
    //     $('#settingsClose').slideToggle(500);
    //     $('.settings').slideToggle(500);
    //     $('#ul-menu li a').addClass('text-black');
    //     $('#ul-menu li svg').addClass('text-black');    
    //     $('#brand-nav p').addClass('text-black');
    //     $('.line').addClass('text-white');
    // });
    // $('#settingsClose').click(function() {
    //     $('#settingsNav').slideToggle(500);
    //     $('#settingsClose').slideToggle(500);
    //     $('.settings').slideToggle(500);
    //     $('#ul-menu li a').addClass('text-black');
    //     $('#ul-menu li svg').addClass('text-black');    
    //     $('#brand-nav p').addClass('text-black');
    //     $('.line').addClass('text-white');
    //     $('body').removeClass('overflowx');
    // });
        
    if($(window).innerWidth() <= 767) {
        $('#ul-menu li a').addClass('text-black');
        $('#ul-menu li svg').addClass('text-black');
        $('#settingsNav').click(function() {
            $('nav').addClass('nav-down');
            $('.settings').show(500);
            $('#ul-menu li a').addClass('text-black');
            $('#ul-menu li svg').addClass('text-black');    
            $('#brand-nav p').addClass('text-black');
            $('.line').addClass('text-white');
            $('#menu-close').show();
            $('#menu-nav').slideToggle(500);
            $('body').removeClass('overflowx');
        });
    }
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    $('#des-parallax1').css({
        "transform": "translate(0px, " + wScroll/4 + "px)"
    });
    if($(this).scrollTop() >= 100) {
        $('nav').addClass('nav-down');
        $('#ul-menu li a').addClass('text-black');
        $('#ul-menu li svg').addClass('text-black');
        $('#brand-nav p').addClass('text-black');
        $('.line').addClass('bg-dark');
    } else {
        $('nav').removeClass('nav-down');
        $('#ul-menu li a').removeClass('text-black');
        $('#ul-menu li svg').removeClass('text-black');
        $('#brand-nav p').removeClass('text-black');
        $('.line').removeClass('bg-dark');
    }
});
