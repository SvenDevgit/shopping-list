$( document ).ready(function() {
    console.log( "ready!" );  


   $('#btn1').on('click',function(){
   	  var appendedItem2 = '<li class="list-item"><span class="moveitem"><i class="fa fa-shopping-basket" aria-hidden="true"></i></span><span class="item">' +
   	                      $('#itm1').val() +
   	                      '</span><span class="deleteitem"><i class="fa fa-times"" aria-hidden="true"></i></span></li>'
   	  console.log(appendedItem2);
   	  $('.shopping-list').append(appendedItem2);
   	  $('#itm1').val('');
   });
     
   $('p').on('mousedown',function(){
   	 $('.shopping-list').append('<li>Appended item</li>');
   });
   $('.shopping-list').on('mousedown','.deleteitem', function(){
   	  $(this).parent().remove();
   });
   $('.shopping-list').on('mousedown','.moveitem', function(){

   	  var movebag =  $(this).parent(); /*.html().replace("fa-arrow-right","fa-arrow-left");*/
   	  /*$(this).parent().remove();*/
   	  $('.bagged-list').append(movebag);
   	     	  
   });
   $('.bagged-list').on('mousedown','.deleteitem', function(){
   	  $(this).parent().remove();
   });
   $('.bagged-list').on('mousedown','.moveitem', function(){
   	  var movebag =  $(this).parent(); /*.html().replace("fa-arrow-left","fa-arrow-right");*/
   	  /*$(this).parent().remove();*/
   	  $('.shopping-list').append(movebag);
   	  
   });
   $('body').on('keypress','#itm1',function(event){
   	    /*console.log(event.which);*/
        if (event.which == 13)	
        { console.log('enter');}
    });
 }) ;  

