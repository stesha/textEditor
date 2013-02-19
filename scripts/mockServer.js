define(['dom','settings'],function(DOM, settings){
    return{
        updateTextFormat: function(){
            if(typeof(DOM.$text.val()) !== "undefined"){
                settings.text = 'This is result: ' + DOM.$text.val()
            }
            settings.font = DOM.$font.val()
            var randomSize = 10 + Math.floor(Math.random() * 8)
            settings.fontSize = (DOM.$slider.slider('value') > 0)?DOM.$slider.slider('value'):randomSize

            DOM.$result.text(settings.text)
                .css('font-family',settings.font)
                .css('font-size',settings.fontSize)
        },
        sendToServer: function(){
            console.log('text: '+settings.text)
            console.log('font: '+settings.font)
            console.log('fontSize: '+settings.fontSize)
            console.log('------------------')
        }
    }
})

