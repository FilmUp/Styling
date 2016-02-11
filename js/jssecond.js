$(document).ready(function () {
    $('#ab').on('click', function(){
        $("#removehide").removeClass('hidden');
        $("#removehidetwo").removeClass('hidden');
        $("#removehidethree").removeClass('hidden');
        $("#removehidepic").removeClass('hidden');
        $("#addone").addClass('text-center');
        $("#addtwo").removeClass('pull-right');
        $("#addtwo").addClass('center');
        $("#addthree").addClass('text-center');
        $("#addthree").addClass('text-center');
        $("#ab").addClass('hidden'); 
        $("#abtwo").removeClass('hidden');  
    });
    
    $('#abtwo').on('click', function(){
        
        $("#removehide").addClass('hidden');
        $("#removehidetwo").addClass('hidden');
        $("#removehidethree").addClass('hidden');
        $("#removehidepic").addClass('hidden');
        $("#addone").removeClass('text-center');
        $("#addtwo").addClass('pull-right');
        $("#addtwo").removeClass('center');
        $("#addthree").removeClass('text-center');
        $("#addthree").removeClass('text-center');
        $("#ab").removeClass('hidden'); 
        $("#abtwo").addClass('hidden');  
    });
})
