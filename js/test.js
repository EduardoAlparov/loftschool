const deliveryForm = document.querySelector('#deliveryForm');
const deliverySubmit = document.querySelector('#deliverySubmit');
    deliverySubmit.addEventListener ('click', e => {
        e.preventDefault();
        if(!validateForm(deliveryForm)){
            var formData = new FormData(deliveryForm);
            formData.append("to", "test@test.ru");
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.send(formData);
            xhr.addEventListener('load', ()=> {
                if(xhr.response.status) {
                    reviewTitle = "Заявка";
                    reviewText = xhr.response.message;
                    togglePopup(reviewTitle, reviewText);
                } else {
                    reviewTitle = "Ошибка";
                    reviewText = xhr.response.message;
                    togglePopup(reviewTitle, reviewText);
                };
            })
        }
    });
    function validateForm(form){
        let valid =true;
    
        if(!validateField(deliveryForm.elements.name)){
            valid = false;
        }
        if(!validateField(deliveryForm.elements.phone)){
            valid = false;
        }
        if(!validateField(deliveryForm.elements.comment)){
            valid = false;
        }
    }
    
    function validateField(field){
        field.nextElementSibling.textContent = field.validationMessage;
        return field.checkValidity();
    }



    