/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/


$(function () {
  $("#day")
  .accordion({
    collapsible: true,
    active: false,
    heightStyle: "content"
  });


  $("#day").find('input[type="checkbox"]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    setTimeout(function() {
      this.checked = !this.checked;
    }.bind(this), 100);
  });


});
