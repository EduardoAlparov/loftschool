function popupReview(){
  const reviewList = document.querySelector('.feed__list');
  
  reviewList.addEventListener('click' , function(e){
    if(e.target.classList.contains('button')){
      const title = e.target.parentNode.querySelector('.feed__title').textContent;
      const text = e.target.parentNode.querySelector('.feed__text').textContent;
      
      renderPopup(title, text);
    }
  })
  
  function renderPopup(title, text){
    const popup = document.querySelector('.popup');

    popup.classList.add('popup--active');

    popup.querySelector('.full-review__title').textContent = title;
    popup.querySelector('.full-review__content').textContent = text;

    popup.querySelector('.full-review__close').addEventListener('click' , e=>{
      e.preventDefault();

      popup.classList.remove('popup--active');
    })

    if (popup.classList.contains('popup--active')) {
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup')) {
          popup.classList.remove('popup--active')
        }
      })
    }
  }
}

popupReview();
