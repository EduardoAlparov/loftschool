const myForm = document.querySelector(".order__form-tag");
const send = document.querySelector(".button_send");
const clearField = document.querySelector(".btn_clear");
const popupTrue =document.querySelector(".status-popup-true");
const popupFalse =document.querySelector(".status-popup-false");

clearField.addEventListener("click", event =>{
    event.preventDefault();
    const data = {
      names : myForm.elements.names.value='',
      phone : myForm.elements.phone.value='',
      street : myForm.elements.street.value='',
      home : myForm.elements.home.value='',
      part : myForm.elements.part.value='',
      appt : myForm.elements.appt.value='',
      floor : myForm.elements.floor.value='',
      comment : myForm.elements.comment.value='' ,
      to : 'workman133@yandex.ru',           
    };
});

send.addEventListener("click", event =>{
    event.preventDefault();

    if(!validateForm(myForm)){
        const data = {
            names : myForm.elements.names.value ,
            phone : myForm.elements.phone.value ,
            comment : myForm.elements.comment.value ,
            to :'workman133@yandex.ru',
        };

        xhr = new XMLHttpRequest();
        xhr.responseType ='json';
        xhr.open('POST','https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.send(JSON.stringify(data));

        xhr.addEventListener("load", ()=>{
            event.preventDefault();
            if(xhr.response.statusText<=200){
                var timerId = setInterval(function goodMessage(){
                popupTrue.classList.remove("non-open");  
            }, 500);
            setTimeout(function() {
            clearInterval(timerId);
                popupTrue.classList.add("non-open");
            }, 3000);
            }
                else{
                var timerId = setInterval(function badMessage(){
                popupFalse.classList.remove("non-open");  
            }, 500);
            setTimeout(function() {
            clearInterval(timerId);
                popupFalse.classList.add("non-open");
            }, 3000);
            }
        });
    }
});

function validateForm(form){
    let valid =true;

    if(!validateField(form.elements.names)){
        valid = false;
    }
    if(!validateField(form.elements.phone)){
        valid = false;
    }
    if(!validateField(form.elements.comment)){
        valid = false;
    }
}

function validateField(field){
    field.nextSibling.textContent = field.validationMessage;
    return field.checkValidity();
}

















