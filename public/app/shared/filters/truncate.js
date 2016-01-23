'use strict';
/**
 * Truncate permet de couper un champ de texte et de remplacer la fin par "..." ce qui permet d'éviter d'avoir du texte qui déborde 
 * dans une preview de news par exemple
 * 
 * @param  {[int]} = lenght -> limite de caractère à partir de laquelle la fonction tronque la chaîne et la termine par "..."
 * @return {[string]} -> retourne la chaîne de caractère réduite 
 */
app.filter('truncate', function(){
	return function(input, length){
		if(angular.isString(input)){
			return input.length > length ? input.substring(0, length) + '... Lire la suite' : input;
		}
		return input;
	};
});
