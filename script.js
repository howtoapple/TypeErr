function drop() {
  document.getElementById("authorDropdown").classList.toggle("show");
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
    
function openNav() {
  var element = document.getElementById('swish')
  if (element = "=") {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("swish").innerHTML ="×";
  } else if (element = "×") { //Fix Later!
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("swish").innerHTML= "=";
  } else {
    document.write("Hello World!");
  }
}