jQuery('Document').ready(function(){
	
	var nme;
	nme = prompt('Ваше имя?');
	jQuery('#nme').html(nme);
	
	jQuery('#scm').on('click', function() {
		confirm('Ты хочешь халявное нитро?');
		alert('Нажмите ок что-бы продолжить');
		alert('Ты пойман за руку как халявщик, дешёвый халявщик, а главное - лжец');
	})
	
	jQuery('body').append('<a href="https://boticord.top/server/986989653229994004">Наш сервер на boticord</a>');
		
		jQuery('#btnc').on('click', function() {
			
		var value1, value2, value3;
		value1 = jQuery('#val1').val();
		value2 = jQuery('#val2').val();	
	
		value1 = parseInt(value1);
		value2 = parseInt(value2);
		
		value3 = value1 + value2;
		
		alert('Сейчас скажу ответ:');
		alert(value3);
		
	});
});

