var sentences = new Array ('Hello Codepen !','How are you ?','Welcome to my new pen ...', 'A quote rotator with a blur effect', 'Unlimited sentences', 'Just put the text in the JS array', 'Define the Timer ...', '... and check the result !','Thank you for watching');

var timer = 5000;

$(document).ready(function(){

    var total = sentences.length - 1;

    for (var i = 0; i <= total; i++) {

        $('#box').append('<p class="sl" id="textBox'+i+'"></p>');
         
        var max = sentences[i].length - 1;

        for (var j = 0; j <= max; j++) {
            $('#textBox'+i).append('<span class="textspan" style="transition: ' + Math.random()*3 + 's; transition-delay: ' + Math.random() + 's;">' + sentences[i].charAt(j) + '</span>'); 
        };

    }; 

    var maxBox = $('#box > p').length;
    var r = 0;

    $('#textBox' + r).addClass('active');

    setInterval(function(){ 

        $('#textBox' + r).removeClass('active');

        r++;

        if (r == maxBox) {
            r = 0;
        }
   
        setTimeout(function(){ 
            $('#textBox' + r).addClass('active');
        }, 2000);

    }, timer);

});