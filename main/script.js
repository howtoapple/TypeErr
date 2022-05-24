
  function sites() {
    document.getElementById("siteDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
        }
      } 
    } 

element=0; 
function openNav() {

  if (element == 0) {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById('swish').innerHTML = "×";
    element = 1;
  } 
  else if (element == 1) {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById('swish').innerHTML= "=";
    element = 0;
  }
}

function responsiveAuth() {
  
}