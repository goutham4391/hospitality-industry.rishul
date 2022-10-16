/**
 * @file
 * Based on Marketo Custom Form radio selection, set certain hidden fields.
 */
!function ($) {
  "use strict";

  Drupal.behaviors.radioButtonAdjust = {
    attach: function (context, settings) {

      let video_id = drupalSettings.video_id;
      if( $(".paragraph--type--simple-video-modal") ) {
        window.onVidyardAPI = (vidyardEmbed) => {
        vidyardEmbed.api.addReadyListener((_, player) => { 
        
          /* function sendToThirdParty(playerUuid, chapter, percentProgress) {
                // send data to an analytics backend
                console.log('Vidyard progress'+ percentProgress);
            }*/

           function registerProgressEvents(vidyardEmbed) {
              vidyardEmbed.api.progressEvents(function (result) {
                console.log('Vidyard progress '+ result.event+'%');
                //sendToThirdParty(result.player.uuid, result.chapter, result.event);
              }, [1, 25, 50, 75, 100]);
            }

            window.vidyardEmbed
              ? registerProgressEvents(window.vidyardEmbed)
              : (window.onVidyardAPI = (vidyardEmbed) => registerProgressEvents(vidyardEmbed));
          
          var video = VidyardV4.players[0];
          video.on('playerComplete', function() {
              $('.vidyard-close-x').click();
             //$("#lengththumbnail").show();
          });
       })
       }
     }
       //end outter IF
    }
  }
}(jQuery);
;
