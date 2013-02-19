$(function() {
    var $slider = $('#slider')
    var $tooltip = $('.tooltip')
    $tooltip.hide()
    $slider.slider({
        range: "min",
        min: 0,
        max:32,
        step:8,
        value: 0,
        start: function(event,ui) {
            $tooltip.fadeIn('fast')
            $tooltip.text(ui.value)
        },
        slide: function(event, ui) {
            var value = (ui.value/8)*25
            $tooltip.css('left', value ).text(ui.value)
        },
        stop: function(event,ui) {
            $tooltip.fadeOut('fast');
        }
    })
})