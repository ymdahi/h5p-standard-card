var H5P = H5P || {};
 
H5P.StandardCard = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
        elementList: []
    }, options);
    // Keep provided id.
    this.id = id;
  };

  return C;

})(H5P.jQuery);