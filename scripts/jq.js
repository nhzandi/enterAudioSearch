$(function(){
  $(document).keydown(function(e){
	if (e.keyCode==13){
	     $("#inp").delay(1000).text(dataArray[0]);
	     // delay(10);
	     var norm = dataArray[1]/128;
	     $("#rect").css("opacity",norm);
 	}
  });
});


$(function(){
  $(document).ready(function(){
      $("h2").click(function(){
          $(this).hide();
      });
  });
});

$(function(){
  $(document).ready(function(){
      $("canvas").click(function(){
          // $(this).hide();       
          $("#inp").text(dataArray[0]);
          var norm = dataArray[0]/255;
          $("#rect").css("opacity",norm);
      });
  });
});