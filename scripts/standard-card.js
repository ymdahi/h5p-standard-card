var H5P = H5P || {};
 
H5P.StandardCard = (function ($) {
  /**
   * Constructor function.
   */
  function StandardCard(options, id) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      cardImage: '',
      cardTitle: 'Card title',
      cardText: 'Card text'
    }, options);
    // Keep provided id.
    this.id = id;
    console.log(`from standard-card 0: ${this}`);
    console.log(`from standard-card 1: ${this.options}`);
  };

  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */

  StandardCard.prototype.attach = function ($container) {

    $container.addClass("h5p-standard-card");

    console.log(`from standard-card 2: ${this.options}`);
  
  };
  

  return StandardCard;

})(H5P.jQuery);