var  settings={
    text: 'This is result: ',
    font: $('#fontList option:selected').val(),
    fontSize: 10 + Math.floor(Math.random() * 8)
}

function updateTextFormat(){
    if(typeof($('#text').val()) !== "undefined"){
        settings.text = 'This is result: ' + $('#text').val()
    }
    settings.font = $('#fontList option:selected').val()
    var randomSize = 10 + Math.floor(Math.random() * 8)
    settings.fontSize = ($('#slider').slider('value') > 0)?$('#slider').slider('value'):randomSize

    $('#result').text(settings.text)
        .css('font-family',settings.font)
        .css('font-size',settings.fontSize)

}
function sendToServer(){
    console.log('text: '+settings.text)
    console.log('font: '+settings.font)
    console.log('fontSize: '+settings.fontSize)
    console.log('------------------')
}
$(function() {
    setInterval(updateTextFormat, 1000)
})
