$(document).ready(function() {
  var folder = "images/screenshots/";

  $.ajax({
    url : folder,
    success: function (data) {
      $(data).find("a").attr("href", function (i, val) {
        if( val.match(/\.(jpe?g|png|gif)$/) ) {
          $("button").click(function(){
            $("p").hide();
          });
        }
      });
    }
  });

});
