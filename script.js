$(document).ready(function() {
  $('.mobile-button a').click(function(e) {
	$(this).parent().parent().toggleClass('open');
  $(this).html($(this).html() == 'Close Menu' ? 'Menu' : 'Close Menu');
    e.preventDefault();
  });
});

var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }
  

 
  function NavigateToSite(){
    var ddl = document.getElementById("ddlMyList");
    var selectedVal = ddl.options[ddl.selectedIndex].value;
 
    window.location = selectedVal;
}