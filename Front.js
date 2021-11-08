
var $loginMsg = $(".loginMsg"),
  $login = $(".login"),
  $signupMsg = $(".signupMsg"),
  $signup = $(".signup"),
  $frontbox = $(".frontbox");

$("#switch1").on("click", function () {
  $loginMsg.toggleClass("visibility");
  $frontbox.addClass("moving");
  $signupMsg.toggleClass("visibility");

  $signup.toggleClass("hide");
  $login.toggleClass("hide");
});

$("#switch2").on("click", function () {
  $loginMsg.toggleClass("visibility");
  $frontbox.removeClass("moving");
  $signupMsg.toggleClass("visibility");

  $signup.toggleClass("hide");
  $login.toggleClass("hide");
});

setTimeout(function () {
  $("#switch1").click();
}, 1000);

setTimeout(function () {
  $("#switch2").click();
}, 3000);

var MainMenu = (function() {
  var MainMenu = function(config) {
      config = config || {};
      this.toggleBtn = $(config.toggleBtn);
      this.menu = $(config.menu);
      this.close = $(config.close);

      this.init();
      config = null;
  };
  // public interface
  MainMenu.prototype = {
      constructor: MainMenu,
      init: function() {
          this.eventManager();
      },
      eventManager: function() {
          this.toggleBtn.on('click.openMenu', onButtonClickHandler.bind(this));
          this.close.on('click.closeMenu', onCloseClickHandler.bind(this));
      }
  };
  // private interface
  function onButtonClickHandler(menu, evt) {
      if (!this.menu.hasClass('open')) {
          this.menu.addClass('open');
      };

  }

  function onCloseClickHandler(evt) {
      this.menu.removeClass('open')
  }

  function onDocumentClickHandler(evt) {
      var $target = $(evt.target);

      if (!$target.closest(this.menuForm).length && !$target.closest(this.menuContent).length && this.menu.hasClass('open')) {
          this.menu.removeClass('open')
      }
  }

  return MainMenu;
})();


$(document).ready(function() {
  var mainMenu = new MainMenu({
      menu: '.main-menu',
      toggleBtn: '.main-menu-btn',
      close: '.main-menu-close'
  });
});