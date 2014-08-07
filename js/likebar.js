(function($){
    $.fn.likeBar = function(settings){
        if(typeof(settings) == "string"){
            settings = {url: settings}
        }
        var config = {
            url: "",
            css: "online",
            width: "100%",
        };
        if (settings){$.extend(config, settings);}
        
		var urlAvatar = "https://www.facebook.com/plugins/likebox.php?href=" + config.url + "&amp;width&amp;height=300&amp;colorscheme=light&amp;show_faces=false&amp;header=false&amp;stream=false&amp;show_border=false";
		var urlFaces = "https://www.facebook.com/plugins/facepile.php?app_id&amp;href=" + config.url + "&amp;action&amp;width&amp;height&amp;max_rows=2&amp;colorscheme=light&amp;size=large&amp;show_count=false";

        return this.each(function(){
            $(this).css("width", config.width).removeClass("likebarcontent").addClass("likebarcontent");
			var iframe1 = '<iframe class="fbAvatar" src="' + urlAvatar + '" scrolling="no" frameborder="0" allowTransparency="true"></iframe>';
        	$(this).append(iframe1);
            
			var iframe2 = '\
			<div class="parentFbFaces">\
				<iframe class="fbFriendFaces" id="fbFriendFaces" src="' + urlFaces + '" scrolling="no" frameborder="0" allowTransparency="true"></iframe>\
			</div>';
			$(this).append(iframe2);
            if(config.css == "online")
                $("body").append("<link rel='stylesheet' href='http://leygos.com/plugins/likeBar/css/likebar.css'>");
		});
    };
})(jQuery);

$(".likebarcontent").each(function(){
	$(this).likeBar($(this).attr("data-url"));
});