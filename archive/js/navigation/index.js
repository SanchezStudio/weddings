import $ from "properjs-hobo";
import Menu from "../Menu";

(function() {

  let nav = new Menu( $( ".nav" ) );
  let toggle = $( ".nav__toggle" );
  let storyItem = $( ".nav__item--stories" );

  let onClick = function(e) {
    e.preventDefault();
    nav.toggle();
  }

  let itemClick = function(e) {
    // e.preventDefault();
    nav.toggle();
  }

  toggle.on("click", (e) => { onClick(e); });
  storyItem.on("click", (e) => { itemClick(e); });

})();
