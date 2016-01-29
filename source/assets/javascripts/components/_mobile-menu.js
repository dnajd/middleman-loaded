// ------------------------------------------------------------
// Mobile Menu
// ------------------------------------------------------------

/**
 * Creates a new MobileMenu. Handles handlebar templates.
 * @class
 */

function MobileMenu(options) {
  this.enableDebug = false;
  mix(options, this); // mix
}
MobileMenu.fn = MobileMenu.prototype;


MobileMenu.fn.init = function() {

  // wire gripper click
  this.gripper.click($.proxy(function(){
    this.container.toggleClass('menu-active');

    this.getSubMenus().hide();
  }, this));

  // wire sub-menus
  $.each(this.getSubMenuGrippers(), $.proxy(function(i,e){
    var gripper = $(e);

    gripper.click($.proxy(function(){
      gripper.parent().find('ul').toggle();
    },this));

  },this))

  // wire roll-overs
  $.each(this.getTopLevelMenuItems(), $.proxy(function(i,e){

    var item = $(e);
    var submenu = item.find('ul');

    item.mouseover($.proxy(function(){
      if (!this.container.hasClass('menu-active'))
        submenu.show();
    },this));
    item.mouseout($.proxy(function(){
      if (!this.container.hasClass('menu-active'))
        submenu.hide();
    },this));
  },this));

};


MobileMenu.fn.getSubMenuGrippers = function(){
  return this.container.find('ul i');
};
MobileMenu.fn.getSubMenus = function(){
  return this.container.find('ul ul');
};

MobileMenu.fn.getTopLevelMenuItems = function(){
  return this.container.find('ul > li');
};
