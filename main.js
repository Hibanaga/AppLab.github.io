selector(".menu").addEventListener('click', function () {
    this.classList.toggle('open');

    selector('header').classList.toggle('open');
    selector('.overlay').classList.toggle('open');
});




function selector(s) {
    return document.querySelector(s);
} 






/*
Animation toogle switch
*/
document.addEventListener("DOMContentLoaded" , function() {
    var checkbox = document.querySelector('input[type="checkbox"]');
    let annualy = document.querySelector(".chargs-annualy");

    
  
    checkbox.addEventListener('change' , function() {
      if (checkbox.checked) {
        document.querySelector(".chargs-monthly").style.color = "#616368";
        annualy.style.color = "#2500f9";
        
      } else {
  
        document.querySelector(".chargs-monthly").style.color = "#2500f9";
        annualy.style.color = "#616368";
      }
    });
  });


  
/*
Slider_user
*/
window.onload = function() {
  var slideIndex = 0;
  var stopslider = false;
  slider();
  
  function change(n) {
    stopslider = true;
    var s = document.getElementsByClassName("item_slide");
    slideIndex += n;
    if (slideIndex > s.length) {
      slideIndex = 1;
    } else if (slideIndex < 1) {
      slideIndex = s.length;
    }
    for (var i=0; i<s.length; i++) {
      s[i].style.display = "none";
    }
    s[slideIndex-1].style.display = "block";
  }
  
  function slider() {
    if (stopslider == false) {
      var s = document.getElementsByClassName("item_slide");
      for (var i=0; i<s.length; i++) {
        s[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > s.length) {
        slideIndex = 1;
      }
      s[slideIndex-1].style.display = "block";
      // setTimeout(slider, 4000);
    }
  }
  
//CLICK-HANDLERS-------------------------
  document.getElementById("previous").onclick = function(){change(-1);};
  document.getElementById("latter").onclick = function(){change(+1);};
};





/*
FAQ QUESTIONS
*/

var coll = document.getElementsByClassName("btn_collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
        content.style.paddingBottom = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.paddingBottom = '5px';
    } 
  });
}
