function accordionMenu() {
  let menuItems = document.querySelectorAll('.acco__item'); // полуаем все li элементы
  let menuAccord = document.querySelector('.acco'); // полуаем ul элемент

  menuAccord.addEventListener('click', event => {
    event.preventDefault();
    let target = event.target.parentNode; // родитель спана - ссылка
    let content = target.nextElementSibling; // следующий сосед ссылки - див с контентом
    let item = target.parentNode; 
    const tarWidth = target.clientWidth; // ширина одной лишки (ссылки)
    const windowWidth = document.documentElement.clientWidth; // ширина окна браузера
    const layoutContentWidth = 520; // ширина контента
    const breakpointPhone = 480; // точка меньше которой меняется поведение слайдера
    const closeMenuWidth = tarWidth * menuItems.length; // ширина закрытого слайдера (3 лишки)
    const openMenuWidth = closeMenuWidth + layoutContentWidth; // ширина открытого слайдера (3 лишки и контент)
    // проверяем был ли клик по спану
    if (event.target.classList.contains('acco__trigger-text')) {
    moveMenu();
    }
    // клик был не по спану - переопределяем переменные
    target = event.target; // ссылка
    content = target.nextElementSibling;
    item = target.parentNode;
    // проверяем был ли клик по ссылке
    if (target.classList.contains('acco__trigger')) {
    moveMenu();
    }
    function moveMenu() {
    // закрываем все лишки, кроме той по которой был клик
    for (const iterator of menuItems) {
        if (iterator != item) {
        iterator.classList.remove('acco__item--active');
        iterator.lastElementChild.style.width = 0;
        menuAccord.style.transform = `translateX(0)`;
        }
    }
    if (item.classList.contains('acco__item--active')) {
        item.classList.remove('acco__item--active');
        content.style.width = 0;
    } else {
        item.classList.add('acco__item--active');
        if (windowWidth > breakpointPhone && windowWidth < openMenuWidth) {
        content.style.width = windowWidth - closeMenuWidth + 'px';
        } else if (windowWidth <= breakpointPhone) {
        let num;
        // получаем число лишек на которое нужно сдвинуть список
        for (let i = 0; i < menuItems.length; i++) {
            if (menuItems[i] === item) {
            num = menuItems.length - (i + 1);
            }
        }
        menuAccord.style.transform = `translateX(${tarWidth * num}px)`;
        content.style.width = windowWidth - tarWidth + 'px';
        } else {
        content.style.width = 520 + 'px';
        }
    }
    }
  });
}
accordionMenu();

  
  
  
  