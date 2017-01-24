//  Этот код будет работать по современному стандарту ES5
"use strict";


$(document).ready(function() {


});

$(window).load(function() {



}); 


// Создаем свои функции в Jquery
$.fn.nameFucn = function( options ) {
	options = {
		nameOpt : options.nameOpt || 'default value'
	}
};


//PHP Ajax form
var FormSender = ( function () {

	// Подключаем прослушку событий
	function __setUpListener () {
		$('.class').on('submit', __showResult);
	};

	// Обработка submit формы
	function __showResult ( event ) {
		event.preventDefault();

		var form = $(this),
				url = '/ajax.php', ///mail.php
				dataType = 'JSON',
				defObject = __ajaxForm( form, url, dataType);

		defObject.done( function (answer) {
			console.log('Все пришло');
		});
	};

	// Универсальная функция AJAX
	function __ajaxForm ( form, url, dataType ) {
		var data = form.serialize(),
				defObject = $.ajax({
						type: 'POST',
						url: url,
						dataType: dataType,
						data: data
					})
					.fail( function () {
						console.log('Проблемы на стороне сервера');
				});

		return defObject;
	};

	// Возращаем в глобальную область видимости
	return {
		init: function () {
			__setUpListener();
		}
	};
}());

FormSender.init();