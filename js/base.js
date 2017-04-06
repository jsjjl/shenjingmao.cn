//页面rem
(function (doc, win) {
          var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
              var clientWidth = docEl.clientWidth;
			  var clientWidth = $(".nwrapper").width();
              /*if (!clientWidth) return;*/
              docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
			  
            };
          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);





$(document).ready(function(e) {
    $("body").css("visibility","visible");$("body").addClass("jbox");
	$(".back").click(function(){window.history.back(); })
});
setTimeout(function () {$("body").css("visibility","visible");$("body").addClass("jbox");}, 200);