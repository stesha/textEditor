var timeoutID
$(function() {
    $('#text').on('keyup',function(){
        var currentValue = $(this).val()
        if(typeof(timeoutID) !== "undefined"){
            clearTimeout(timeoutID)
        }
        timeoutID = setTimeout(function(){checkCurrentValue(currentValue)}, 300)
    })
    function checkCurrentValue(currentValue){
        if(currentValue === $('#text').val()){
            updateTextFormat()
            sendToServer()
        }
    }
})
