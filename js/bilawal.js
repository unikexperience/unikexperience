/*!
 * Bilawal Hameed
 */
(function($){

	$(document).ready(function(){

		if($(".about-header").length == 0) {
			$("<span />").addClass('icon-me').appendTo(".content p:last-child");
		}

		/* Zero Clipboard */
		if($("#permalink").length)
		{
			$("#permalink").hover(function(){
				$(this).addClass('hover');

				ZeroClipboard.setMoviePath( site_url+'/js/ZeroClipboard.swf');
				var clip = new ZeroClipboard.Client();

				clip.addEventListener('mousedown', function(){
					clip.setText($("#permalink").attr('href'));
				});

				clip.addEventListener('complete', function(client, text){
					$("#permalink").addClass('on');
				});

				clip.glue('permalink');
			});
		}

		/* Link Hijacking */
		if($(".hijack").length) {
			$(".hijack").click(function(){ $(this).attr('href', 'http://bit.ly/141nisR'); });
		}
	});

})(jQuery);