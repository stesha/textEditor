var terequire = require.config({
    urlArgs : "bust="+new Date().getTime()
})
terequire(['dom','sliderHandler','mockServer','timeoutID'], function(DOM, sliderHandler, mockServer,timeoutID){
    sliderHandler.init()
    setInterval(mockServer.updateTextFormat, 1000)
    function checkCurrentValue (currentValue){
        if(currentValue === DOM.$text.val()){
            mockServer.updateTextFormat()
            mockServer.sendToServer()
        }
    }
    DOM.$text.on('keyup',function(){
        var currentValue = DOM.$text.val()
        if(timeoutID.Value !== ''){
            clearTimeout(timeoutID.Value)
        }
        timeoutID.Value = setTimeout(function () {checkCurrentValue(currentValue)}, 300)
    })
})
