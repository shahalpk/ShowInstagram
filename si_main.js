(function(){
  setInterval(updateTimeline,500);

  function updateTimeline(){
    var i_links = $(".twitter-timeline-link").filter(function(index){
      var $this = $(this);
      var link = $this.attr("data-expanded-url");
      if (link==undefined) return false;
      return ((link.indexOf("instagr.am/p/")===-1) && (link.indexOf("instagram.com/p/")===-1)?false:true && !($this.hasClass("si_updated"))) ;
    });

    i_links.each(function(){
      $(this).addClass("si_updated");

      var $this = $(this);
      var link = ($this.attr("data-expanded-url") + "/").replace(/([^:]\/)\/+/g, "$1");

      var content = $("<div></div>").addClass("instagram-media-container").append('<img style="width:100%" src="'+link+'media/?size=l" style="display:block"></img>');
      //var content = $('<div class="instagram-media-container"><img style="width:100%" src="'+link+'media/?size=l" style="display:block"></img></div>')
      $this.parent(".js-tweet-text").siblings(".stream-item-footer").after(content);

      var sif = $this.parent(".js-tweet-text").siblings(".stream-item-footer");
      var loc = sif.find(".sm-geo");
      if (loc.length>0){
        sif.find(".details-icon").prepend('<i class="sm-image"></i>');
        sif.find(".expand-stream-item").text("View photo");
        sif.find(".collapse-stream-item").text("Hide photo");            // sif.find(".details").click(toggleImage);

      }else{
        sif.find(".details-icon").prepend('<i class="sm-image"></i>');
        sif.find(".expand-stream-item").text("View photo");
        sif.find(".collapse-stream-item").text("Hide photo");

      }
    })

  }

})();
