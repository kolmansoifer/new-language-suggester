$(document).ready(function() {
  $("form#language").submit(function(event) {

    const skill = parseInt($("select#skill").val());
    const interest = parseInt($("select#interest").val());
    const os = parseInt($("select#os").val());

    $(".message").show();
    
    
    
    if (skill === 1) {
      $("#python").show();
    } else if (skill === 2) {
      $("#javascript").show();
    } else if (skill === 3) {
      $("#hoon").show();
    } 
    
    
    console.log(interest)

  event.preventDefault();  
  });
  
});
