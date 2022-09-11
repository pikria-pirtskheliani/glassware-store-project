let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navigation-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
})


        var LoginForm = document.getElementById("LoginForm");
        var RegForm = document.getElementById("RegForm");
        var Indicator = document.getElementById("Indicator");
            
            function register(){
                Regform.style.transform = "translateX(0px)";
                Loginform.style.transform = "translateX(0px)";
                Indicator.style.transform = "translateX(100px)";

            }
            function login(){
                Regform.style.transform = "translateX(300px)";
                Loginform.style.transform = "translateX(300px)";
                Indicator.style.transform = "translateX(0px)";

            }


