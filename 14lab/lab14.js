$(document).ready(function () {
   /* //alert('Версия Jquery'+jQuery.fn.jquery);

   // Табы на JS

   //отслеживаем событие клик на элементе таб, устанавливаем обработчик событий методом он
    $(".dws-form").on("click", ".tab", function () {
    //    Удаляем все классы active
    $(".dws-form").find(".active").removeClass("active");

    //Добавляем класс active для вкладки, на которой сработал клик
    $(this).addClass("active");

    //с помощью метода eq достаём форму с таким индексом и для неё класс эктив
    $(".tab-form").eq($(this).index()).addClass("active");
    });*/
});


function makeValidation() {

    let name=document.forms[1].elements['name'];
    let surname=document.forms[1].elements['surname'];
    let dateBirth=document.forms[1].elements['dateBirth'];
    let email=document.forms[1].elements['email'];
    let password=document.forms[1].elements['password'];
    let agreeRules=document.getElementById('ckbox');

   if(name.value!="" && surname.value!="" && dateBirth.value!="" && email.value!="" && password.value!="") {
        if(!checkSurname(surname.value)) {
            surname.style.color="red";
        } else {
            surname.style.color="#4564a7";
        }

        if(!checkName(name.value)) {
            name.style.color="red";
        } else {
            name.style.color="#4564a7";
        }      

        if(!checkDateBirth(dateBirth.value)) {
            dateBirth.style.color="red";
        } else {
            dateBirth.style.color="#4564a7";
        }

        if(!checkEmail(email.value)) {
            email.style.color="red";
        } else {
            email.style.color="#4564a7";
        }

         if(!checkPass(password.value)) {
            password.style.color="red";
        } else {
            password.style.color="#4564a7";
        }

        if(!agreeRules.checked) {
            alert("Вы ознакомились с условиями регистрации?");
        }


        if(checkSurname(surname.value) && checkName(name.value) && checkDateBirth(dateBirth.value) && checkEmail(email.value) && checkPass(password.value) && agreeRules.checked) {
            alert("Вы успешно зарегистрировались!");
        }
   } else {
        alert("Заполните все поля");
   }
    

    function checkName(name_user) {
        return name_user.match(/^[A-ZА-Я]{1}[a-zа-я]{1,}$/);
    }
    function checkSurname(surname_user) {
        return surname_user.match(/^[A-ZА-Я]{1}[a-zа-я]{2,}$/);
    }
    function checkDateBirth(dateBirth_user) {
        return dateBirth_user.match(/^([1-9]|0[1-9]|((1|2)[0-9])|3[0-1])\.(0[1-9]|1[0-2])\.(\d{4}|\d{2})$/);
    }
    function checkEmail(email_user) {
        return email_user.match(/^[a-zA-Z0-9]+\@(mail|gmail)\.(ru|com)$/);
    }
    function checkPass(password_user) {
        //позитивный заход вперёд
        return password_user.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/);
    }
   
}
