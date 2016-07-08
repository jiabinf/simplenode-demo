(function () {

  var lastH;
  var lastRotation;

  function log(message) {
    console.log(message);
  }

  function updateSticky() {
    log('@@@ in sticky,');
    log('innerH: ' + window.innerHeight);
    var h = window.innerHeight ? window.innerHeight : $(window).height();
    lastH = h;
    h = h - 70; // #t height 40, + 50 offset
    $('#t').css('top', h + 'px');
  }

  function checkRotation() {
    const h = window.innerHeight;
    const w = window.innerWidth;
    return ( h >=  w ) ? 'PORTRAIT' : 'LANDSCAPE';
  }

  log('innerHeight: ' + window.innerHeight);

  $(document).ready(function () {
    log('DOM Loaded');
    lastRotation = checkRotation();
    $('#dummy1').height(window.innerHeight * 1.3);
    updateSticky();
  });

  $(window).on('resize', function(event) {
    log('@@@ in resize');
    log('innerH: '+ window.innerHeight);

    const rotation = checkRotation();
    const el = $('#t');

    if (rotation === lastRotation) {
      var change = window.innerHeight - lastH;
      var max = el[0].getBoundingClientRect().top - $('#dummy1')[0].getBoundingClientRect().bottom;
      log('change: ' + change + ' max: ' + max);

      if (change > 0 || max > 80) {
        el.toggleClass('animation', true);
        el.css('transform', 'translateY('+ change + 'px)');
      }
    } else {
      lastRotation = rotation;
      el.toggleClass('animation', false);
      el.css('transform', '');
      updateSticky();
    }
  });

  $('#t').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(event) {
    const el = $('#t');
    el.toggleClass('animation', false);
    el.css('transform', '');
    updateSticky();
  });

})();
