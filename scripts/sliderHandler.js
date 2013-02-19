define(['dom'],function(DOM){
    return{
        init:function(){
            DOM.$tooltip.hide()
            DOM.$slider.slider({
                range: "min",
                min: 0,
                max:32,
                step:8,
                value: 0,
                start: function(event,ui) {
                    DOM.$tooltip.fadeIn('fast')
                    DOM.$tooltip.text(ui.value)
                },
                slide: function(event, ui) {
                    var value = (ui.value/8)*25
                    DOM.$tooltip.css('left', value ).text(ui.value)
                },
                stop: function(event,ui) {
                    DOM.$tooltip.fadeOut('fast');
                }
            })
        }
    }
})
