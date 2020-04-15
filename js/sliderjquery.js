$(function(){
 
  var moveSlide = function (container, slideNum) {

    var 
      items = container.find('.slider__item'),
      activeSlide = items.filter('.active'),
      reqItem = items.eq(slideNum),
      reqIndex = reqItem.index(),
      list = container.find('.slider__list'),
      duration = 500;

    if (reqItem.length) { 
      list.animate({
        'left' : -reqIndex * 100 + '%'
      }, duration, function() {
        activeSlide.removeClass('active');
        reqItem.addClass('active');
      });   
    }  
  }


    $('.slider__page').on('click', function(e){
      e.preventDefault();

      var $this = $(this),
        container = $this.closest('.slider'),
        items = $('.slider__item', container),
        activeItem = items.filter('.active'),
        existedItem, edgeItem, reqItem;

      if ($this.hasClass('slider__pages-next')) {
        existedItem = activeItem.next();
        edgeItem = items.first();
      }   

      if ($this.hasClass('slider__pages-prev')) {
        existedItem = activeItem.prev();
        edgeItem = items.last();
      }
      
      reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

      moveSlide(container, reqItem);
    
    });

});