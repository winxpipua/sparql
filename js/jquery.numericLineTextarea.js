(function( $ ){

  $.fn.numericLineTextarea = function() {

  	$('iframe.k-content').contents().find("head").append('<style>p,ul,ol{margin:0;}code{font-size:inherit;}<style>');
  
    this.parent().parent().prepend('<td class="numericTd"><div id="numericLineTextarea"></div></td>');

    var countLines = Math.ceil( this.parent().parent().find('.numericTd').height() / 15 );

    for(var i = 1; i <= countLines; i++) {
    	this.parent().parent().find('.numericTd #numericLineTextarea').append('<div class="digit">' + i + '</div>');
    }

  };

})( jQuery );