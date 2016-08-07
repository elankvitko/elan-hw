$(document).ready(function() {
  var counter = 4;

  id = setInterval( function() {
        counter --;
        if ( counter < 1 ) {
          $( '.timer' ).hide();

          $.ajax({
            url: '/code'
          }).done( function( response ) {
            $( '.hidden' ).show();
            
            $( '#source-code' ).text( response.code );

            $('pre code').each(function(i, block) {
              hljs.highlightBlock(block);
            });

            clearInterval( id );
          });
        }
        else {
          $( '.timer' ).text( counter );
        }
      }, 1000 );
});
