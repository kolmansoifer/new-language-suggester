$(document).ready(function () {
  $("form#language").submit(function (event) {

    const skill = parseInt($("select#skill").val());
    const interest = parseInt($("select#interest").val());
    const os = parseInt($("select#os").val());

    $(".message").show();

    if ((skill === 1 && os === 9) || (skill === 1 && os === 7) || (skill === 1 && os === 9)) {
      $("#hoon").hide();
      $("#javascript").hide();
      $("#python").show();
    } else if ((skill === 2 && interest === 4) || (skill === 2 && interest === 5) || (skill === 2 && interest === 6)) {
      $("#hoon").hide();
      $('#python').hide();
      $("#javascript").show();
    } else {
      $("#python").hide();
      $("#javascript").hide();
      $("#hoon").show();
    }

    event.preventDefault();

  });
});
