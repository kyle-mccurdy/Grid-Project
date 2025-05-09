function navToggle() { 
  var x = document.getElementById("main-nav"); 
    if (x.className === "topnav") { 
    x.className += "responsive";   
  } else {                          
    x.className = "topnav";         
  } 
} 





var slideIndex = 1; // creates a new variable, names it slideIndex, and sets it = to 1

showSlides(slideIndex); // uses the index variable as the parameter of the showSlides function

function plusSlides(n) { // function for incrementing (adding to) slideIndex, takes n as its parameter
  showSlides(slideIndex += n); // function runs showSlides with index + n as its parameter
}

function currentSlide(n) { // creates function identifying the current slide, using n as the parameter
  showSlides(slideIndex = n); // function runs showSlides with index = to n as the parameter
}

function showSlides(n) { // creates the showSlides function using n as the parameter
  var i; // creates a generic variable to be used as an identifier
  var slides = document.getElementsByClassName("slide"); // sets variable slides = to # of slides
  var indicator = document.getElementsByClassName("indicator"); // sets indicator to # of indicators
  if (n > slides.length) {slideIndex = 1} // if n is greater than the # of slides, index is set to 1
  if (n < 1) {slideIndex = slides.length} // if n is less than 1, set index to # of slides
  for (i = 0; i < slides.length; i++) { // set i=0, and when i is less than # of slides, run the code below and increment i by 1
      slides[i].style.display = "none"; // then hide those slides by setting display to none
  }
  for (i = 0; i < indicator.length; i++) { // when i is = to 0 and less than # of indicators, increment i by 1
      indicator[i].className = indicator[i].className.replace(" active", ""); // and the associated indicators gets the .active class removed from them
  }
  slides[slideIndex-1].style.display = "block"; // display slides
  indicator[slideIndex-1].className += " active"; // make indicator active
}




$(".card").on("click", function() {
    var modal = $(this).data("modal");
    $(modal).show(); 
  });
  $(".modal").on("click", function(e) { 
    var className = e.target.className; 
    if(className === "modal" || className === "close"){ 
      $(this).closest(".modal").hide(); 
    }
  });