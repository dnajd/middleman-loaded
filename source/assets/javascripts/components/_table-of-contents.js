var tableOfContents = function() {

	var $h2s = $('h2').length;

	// Auto ToC
	(function($){
		var ToC =
			"<nav class='table-of-contents'>" +
				"<ul>";

		var newLine, el, title, link;

		$(".section-title").each(function() {

			el = $(this);
			title = el.text();
			link = "#" + el.attr("id");

			newLine =
				"<li>" +
					"<a href='" + link + "'>" +
						title +
					"</a>" +
				"</li>";

			ToC += newLine;

		});

		ToC +=
			 "</ul>" +
			"</nav>";

		$("#toc").prepend(ToC);
	})(jQuery);
}