$('button').on('click', function(){
    var btn=$(this);
    if(btn.attr('class')=='buttonchange'){

         btn.removeClass('buttonchange');
    }
    else{
        btn.addClass('buttonchange');
    }

})
