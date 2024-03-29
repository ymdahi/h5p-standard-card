var H5P = H5P || {};
 
H5P.StandardCard = (function ($) {
  /**
   * Constructor function.
   */
  function StandandCard(options, id) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      cardImage: null,
      cardTitle: 'Title',
      cardText: 'Text'
    }, options);
    // Keep provided id.
    this.id = id;

  };
 
  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */

  StandandCard.prototype.attach = function ($container) {

    $container.addClass("h5p-standard-card");
    console.log("from standard-card.js");
  };
 
  return StandandCard;


})(H5P.jQuery);