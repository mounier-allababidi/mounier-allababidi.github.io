

$(document).ready(function () {
  console.log("Hello");
  $(".navbar-nav .nav-link").on("click", function () {
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});