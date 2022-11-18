$(document).ready(function(){
    $(".pop").hide();
    $("#item_software").click(function(){
      $("#pop_programming_language").hide();
      $("#pop_language").hide();
      $("#pop_software").toggle();
    })
    $("#item_programming_language").click(function(){
      $("#pop_language").hide();
      $("#pop_software").hide();
      $("#pop_programming_language").toggle();
      $(".pop").css({"box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"})
    })
    $("#item_language").click(function(){
      $("#pop_programming_language").hide();
      $("#pop_software").hide();
      $("#pop_language").toggle();
      $(".pop").css({"box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"})
    })
    $(".close_icon").click(function(){
      $(".pop_all").hide();
    })
    $('svg.radial-progress').each(function( index, value ) { 
$(this).find($('circle.complete')).removeAttr( 'style' );
});
$(window).scroll(function(){


$('svg.radial-progress').each(function( index, value ) { 
{
    // Get percentage of progress
    percent = $(value).data('percentage');
    // Get radius of the svg's circle.complete
    radius = $(this).find($('circle.complete')).attr('r');
    // Get circumference (2πr)
    circumference = 2 * Math.PI * radius;
    // Get stroke-dashoffset value based on the percentage of the circumference
    strokeDashOffset = circumference - ((percent * circumference) / 100);
    // Transition progress for 1.25 seconds
    $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
}
});
}).trigger('scroll');


})





const gra = function(min, max) {
    return Math.random() * (max - min) + min;
}
const init = function(){
    let items = document.querySelectorAll('section');
    for (let i = 0; i < items.length; i++){
        items[i].style.background = randomColor({luminosity: 'light'});
    }
    cssScrollSnapPolyfill()
}
init();


