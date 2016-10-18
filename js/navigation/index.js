import $ from "properjs-hobo";
import Menu from "../Menu";

(function() {

  let nav = new Menu( $( ".nav" ) );
  let toggle = $( ".nav__toggle" );

  let onClick = function(e) {
    e.preventDefault();
    nav.toggle();
  }

  toggle[0].addEventListener("click", onClick, false);

})();
