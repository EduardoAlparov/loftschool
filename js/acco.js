
function accordeonTeam(){
  const workers =  document.querySelectorAll('.accordeon__item');
  const teamAccord = document.querySelector('.accordeon__list');

  teamAccord.addEventListener('click', function(event){
    event.preventDefault();
    const target =event.target;

    if(target.classList.contains('accordeon__item-trigger')){
      const worker = target.parentNode; // родитель ссылки 
      const content = target.nextElementSibling; // рядом на уровне
      const contentHeight = content.firstElementChild.clientHeight; // высота чайлда соседа

        for (const iterator of workers) {
          if(iterator !== worker){
            iterator.classList.remove('accordeon__item-active');
            iterator.lastElementChild.style.height = 0;
          }
        }

        if(worker.classList.contains('accordeon__item-active')){
          worker.classList.remove('accordeon__item-active');
          content.style.height =0;
        }
        else{
          worker.classList.add('accordeon__item-active');
          content.style.height = contentHeight + '120px';
        }
    }
  })
}

accordeonTeam();
