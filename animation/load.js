(function () {
  const event = ('ontouchstart' in document.documentElement)
          ? 'touchstart'
          : 'mousedown';

  var toggleTransOn = false,
      togglePosOn = false;

  const toggleTrans = document.getElementById('toggleTrans'),
        boxTrans = $('#boxTrans'),

        togglePos = document.getElementById('togglePos'),
        boxPos = $('#boxPos');

  document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Loaded");
  }, false);

  toggleTrans.addEventListener(event, function () {
    if (!toggleTransOn) {
      boxTrans.toggleClass('translate', true);
      toggleTransOn = true;
    } else {
      boxTrans.toggleClass('translate', false);
      toggleTransOn = false;
    }
  }, true);

  togglePos.addEventListener(event, function () {
    if (!togglePosOn) {
      boxPos.css('left', '100px');
      togglePosOn = true;
    } else {
      boxPos.css('left', '0px');
      togglePosOn = false;
    }
  }, true);
})();
