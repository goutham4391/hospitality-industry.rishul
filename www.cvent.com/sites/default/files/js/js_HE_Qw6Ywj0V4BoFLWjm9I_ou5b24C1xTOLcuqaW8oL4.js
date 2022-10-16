/**
 * @file
 * Handle issue with internal menu link target _blank.
 */
!function ($) {
  "use strict";

  Drupal.behaviors.radioButtonAdjust = {
    attach: function (context, settings) {
      $( "li.menu-link-new-tab" ).children().each(function() {
        $(this).attr("target","_blank");
      });
    }
  }
}(jQuery);
;
