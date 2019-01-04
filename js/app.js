var toogleMobileMenu = false;
function menuMobile(t){
  var b = t.children[0];
  toogleMobileMenu = !toogleMobileMenu;
  if(toogleMobileMenu){
    b.setAttribute("src", "img/close-mobile.png")
  } else {
    b.setAttribute("src", "img/menu-mobile.png")
  }
}
