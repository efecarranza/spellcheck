// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(function() {

	$('.replace-word').on('click', function(e) {
		e.preventDefault();
		var newWord = $(e.target).text();
		var originalWord = $(e.target).closest('td').siblings('td').text();
		var originalText = $('.original').text()
		var newText = originalText.replace(originalWord, newWord);
			newText = newText.replace('Original text:', 'New text:');
		$('.original').text(newText);
	});

});