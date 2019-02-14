(function ($) {
    "use strict";
    $( "textarea" ).on("keyup", function () {
        var value = $( this ).val();
        if(value){
            $( ".show_output" ).text( $.md5(value)).addClass("show_output_css");
        }
    })
})(jQuery);
