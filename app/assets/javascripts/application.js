// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
// = require popper
// = require bootstrap-sprockets
// = require lightbox
// = require pagination

$(document).ready(function() {
	
	// INITIATE THE FOOTER
  siteFooter();
	// COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
	$(window).resize(function() {
		siteFooter();
	});
	
	function siteFooter() {
		var siteContent = $('#site-content');
		var siteContentHeight = siteContent.height();
		var siteContentWidth = siteContent.width();

		var siteFooter = $('#footer');
		var siteFooterHeight = siteFooter.height();
		var siteFooterWidth = siteFooter.width();

		// console.log('Content Height = ' + siteContentHeight + 'px');
		// console.log('Content Width = ' + siteContentWidth + 'px');
		// console.log('Footer Height = ' + siteFooterHeight + 'px');
		// console.log('Footer Width = ' + siteFooterWidth + 'px');

		siteContent.css({
			"margin-bottom" : siteFooterHeight + 80
		});
	};
});