$(document).ready(function() {
  $("form#language").submit(function(event) {

    const skill = parseInt($("select#skill").val());
    const interest = parseInt($("select#interest").val());
    const os = parseInt($("select#os").val());

  $(".message").show();     
      
  if (skill === 1 && os === 9) {
    $("#python").show();
  } else if (skill === 2 && os === 8) {
    $("#javascript").show();
  } else if (skill === 3 && os === 7) {
    $("#hoon").show();
  } else if (skill === 1 && os === 8) {
    $("#python").show();
  } else if (skill === 2 && os === 7) {
    $("#javascript").show();
  } else if (skill === 3 && os === 9) {
    $("#hoon").show();
  } else if (skill === 1 && os === 7) {
    $("#python").show();
  } else if (skill === 2 && os === 9) {
    $("#javascript").show();
  } else if (skill === 3 && os === 8) {
    $("#hoon").show();
  }  
  event.preventDefault();  
  
  });
});
  

