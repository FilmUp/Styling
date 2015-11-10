$(document).ready(function(){
        $('#logbutton').on('click', function(){
            $("#signin").addClass('hidden');
            $("#login").removeClass('hidden');
        });

        $('#signbutton').on('click', function(){
            $("#login").addClass('hidden');
            $("#signin").removeClass('hidden');
        });

    })
