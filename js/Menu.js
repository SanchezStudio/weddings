import * as core from "./core";

class Menu {
  constructor ( $node ) {
    this.$node = $node;
    this.isOpen = false;

    // this.$node.detach();
  }

  open () {
    this.isOpen = true;

    core.dom.html.addClass( "is-menu-open" );
    // core.dom.body.append( $this.$node );
  }
  close () {
    this.isOpen = false;

    core.dom.html.removeClass( "is-menu-open" );
    // this.$node.detach();
  }
  toggle () {
    if ( this.isOpen ) {
      this.close();
    } else {
      this.open();
    }
  }
}

export default Menu;
