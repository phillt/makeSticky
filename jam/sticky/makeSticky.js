(function($){

        /**
         * @function makeSticky
         *
         * Method provides a light method to keep an element "Sticky." This is a
         * BYOCSS method, as it does not fix any CSS. The method assumes that the
         * provided global object (must be a jquery ie: $(".myStickyStuff")) has a
         * position of absolute.
         *
         * @var offsetTop int provide an offset for the top. This helps if you don't want the element to be directly on the top of the view port.
         * @return returns global variable for those jQuery Nerds
         *
         * @todo if device changes orientation, we might want to fix the offsetTop
         * @todo fix jerking when scrolling down, interestingly enough, when scrolling faster it is smoother. Use CSS3 transition to help ease teh jerking
         */

$.fn.makeSticky = function(offsetTop){

          var /**
               * @var element object cahce
               */
            element = $(this);


          $(window).scroll(function(){

            var /**
                 * @var ex int Add extra offset to top, otherwise will stick to top of view port
                 */
                ex = 0|offsetTop,
                /**
                 * @var offsetTopVP int calculates how far the element is from view port
                 * @return object returns global variable for the jQuery nerds
                 */
                offsetTopVP = element.offset().top - $(document).scrollTop() - ex;


            // Handle position if element is out of the view port
            if(offsetTopVP < 0 ){

              var /**
                   * @var restriction int calculates the boundaries (within parent of element) that the element will stick to
                   */
                restriction = element.parent().height() - element.height();


              // Check if the element's top position is past the restrition
              if(element.position().top >= restriction){
                // Set it's top to restrition and prevent anymore code from being read
                element.css("top", restriction);
                return;

              }


              // Keep element on view port from top
              element.css("top", (offsetTopVP * -1) + element.position().top);
              element.addClass("sticking");

            // Handle position if element is under view port
          }else if (offsetTopVP > 0){


              // Check if element is past view port
                if(element.position().top <= 0){

                  // Set element's top to 0 and stop
                  element.css("top", 0);
                  element.removeClass("sticking");
                  return;

                }


                // Keep element on view port from top
                element.css("top", element.position().top - offsetTopVP);
                element.addClass("sticking");

            }

          });


          // Maintain chainability for jQuery nerds
          return element;

        }

})($);
