var H5P = H5P || {};
 
H5P.StandardCard = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      cardImage: '',
      cardTitle: 'Card title',
      cardText: 'Card text'
    }, options);
    // Keep provided id.
    this.id = id;
  };

  console.log(this);

  return C;

})(H5P.jQuery);