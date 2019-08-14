$(document).ready(function() {

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  $("#header > #nav > ul > .icon").click(function() {
    $("#header > #nav > ul").toggleClass("responsive");
  });

  $("#menu > #nav").show();
  $("#menu-icon, #menu-icon-tablet").click(function() {
    if ($("#menu").css("visibility") == "hidden") {
      $("#menu").css("visibility", "visible");
      $("#menu-icon, #menu-icon-tablet").addClass("active");
      return false;
    } else {
      $("#menu").css("visibility", "hidden");
      $("#menu-icon, #menu-icon-tablet").removeClass("active");
      return false;
    }
  });
  if ($("#menu").length) {
    $(window).on("scroll", function() {
      var topDistance = window.scrollY;

      if ($("#menu").css("visibility") != "hidden" && topDistance < 50) {
        $("#menu > #nav").show();
      } else if ($("#menu").css("visibility") != "hidden" && topDistance > 100) {
        $("#menu > #nav").hide();
      }
    });
  }
});

$(function() {
  if (location.pathname !== "/") return;
  var str = "xPlan is a minimalistic and responsive theme for bloggers.";

  var options = {
    strings: [
      str
    ],
    typeSpeed: 20,
    startDelay: 300,
    // loop: true,
  };
  var typed = new Typed(".description .typed", options);
});


