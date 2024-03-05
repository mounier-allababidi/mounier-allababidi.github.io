

$(document).ready(function () {
  console.log("Hello");
  $(".navbar-nav .nav-link").on("click", function () {
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });

  $('#video_1').on('play', function() {
    // Pause videoB if it is playing
    if (!$('#video_2')[0].paused) {
      $('#video_2')[0].pause();
    }
    if (!$('#video_3')[0].paused) {
      $('#video_3')[0].pause();
    }
  });

  $('#video_2').on('play', function() {
    // Pause videoB if it is playing
    if (!$('#video_3')[0].paused) {
      $('#video_3')[0].pause();
    }
    if (!$('#video_1')[0].paused) {
      $('#video_1')[0].pause();
    }
  });

  $('#video_3').on('play', function() {
    // Pause videoB if it is playing
    if (!$('#video_2')[0].paused) {
      $('#video_2')[0].pause();
    }
    if (!$('#video_1')[0].paused) {
      $('#video_1')[0].pause();
    }
  });
});