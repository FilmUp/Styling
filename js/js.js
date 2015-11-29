$(document).ready(function () {
    var p = $("#logbutton");
    var offset = p.offset();
    $(".arrow").offset({ top: offset.top+33, left: offset.left+30})
        
    $( window ).resize(function() {
        if ($('#signin').hasClass("hidden")){
            var p = $("#logbutton");
            var offset = p.offset();
            $(".arrow").offset({ top: offset.top+33, left: offset.left+30})
        }
        else{
            var p = $("#signbutton");
            var offset = p.offset();
            $(".arrow").offset({ top: offset.top+33, left: offset.left+30})
        }        
    });
        
    $('#logbutton').on('click', function(){
        $("#signin").addClass('hidden');
        $("#login").removeClass('hidden');
        var p = $("#logbutton");
        var offset = p.offset();
        $(".arrow").offset({ top: offset.top+33, left: offset.left+30});
    });

    $('#signbutton').on('click', function(){
        $("#login").addClass('hidden');
        $("#signin").removeClass('hidden');
        var p = $("#signbutton");
        var offset = p.offset();
        $(".arrow").offset({ top: offset.top+33, left: offset.left+30})
    });
})
