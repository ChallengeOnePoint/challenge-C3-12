'use strict';
// Permet d'adapter la hauteur des block en fonction de leur largeur
app.directive("equalHeight", function() {
	return {
		link: function(scope, element){
			// +30 = padding appliqué par bootstrap au éléments col*
			var elementWidth = $(element).width() + 30;
			$(element).height(elementWidth);
		}
	};
});