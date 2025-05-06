function navToggle() { // creates a new function named navToggle
  var x = document.getElementById("main-nav"); // creates a variable set to #main-nav
    if (x.className === "topnav") { // if #main-nav has a class of .topnav,
    x.className += "responsive";   // then add a new class
  } else {                          // if it doesn't,
    x.className = "topnav";         // set class to .topnav
  } //closes if-else
} //closes function



$(".button").on("click", function() {
    var modal = $(this).data("modal");
    $(modal).show(); 
  });
  $(".modal").on("click", function(e) { 
    var className = e.target.className; 
    if(className === "modal" || className === "close"){ 
      $(this).closest(".modal").hide(); 
    }
  });