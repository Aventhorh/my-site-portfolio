    //Форма
    
    function validateForm(){
        var element = document.forms["myForm"]["fname"].value;
        var tel = document.forms["myForm"]["ftel"].value;
        if(element == ""){
            alert("Вы не ввели ваше имя");
            return false;
        }else if (tel == ""){
            alert("Вы не ввели ваш челефон");
            return false;
        }
    }


    //Автоматический слайдер

    window.addEventListener('load', function(){
        'use strict';
       
        var selId = 2;

        function slideAuto(){
            var sel = document.querySelector('#r' + selId);
            selId += 1;
            if(selId == 5){
                selId = 1;
            }
            sel.click();
            }

        setInterval(slideAuto, 5000);
        });


    


    