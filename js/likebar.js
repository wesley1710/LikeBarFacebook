(function($){
    $.fn.likeBar = function(settings){
        var config = {
            url: settings
        };
        if (settings){$.extend(config, settings);}
		
		var urlAvatar = "https://www.facebook.com/plugins/likebox.php?href=" + config.url + "&amp;width&amp;height=300&amp;colorscheme=light&amp;show_faces=false&amp;header=false&amp;stream=false&amp;show_border=false";
		var urlFaces = "https://www.facebook.com/plugins/facepile.php?app_id&amp;href=" + config.url + "&amp;action&amp;width&amp;height&amp;max_rows=2&amp;colorscheme=light&amp;size=large&amp;show_count=false";

        return this.each(function(){
			var iframe1 = '<iframe class="fbAvatar" src="' + urlAvatar + '" scrolling="no" frameborder="0" allowTransparency="true"></iframe>';
        	$(this).append(iframe1);
			$(".fbAvatar").css("height", $("._8o._8r.lfloat._ohe").width());
			var iframe2 = '\
			<div class="parentFbFaces">\
				<iframe class="fbFriendFaces" id="fbFriendFaces" src="' + urlFaces + '" scrolling="no" frameborder="0" allowTransparency="true"></iframe>\
			</div>';
			$(this).append(iframe2);
            $("body").append("<link rel='stylesheet' href='http://leygos.com/plugins/likeBar/css/likebar.css'>");
		});
    };
})(jQuery);

$(".likebarcontent").each(function(){
	$(this).likeBar($(this).attr('data-url'));
})