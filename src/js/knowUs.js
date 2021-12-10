export function knowUs() {

    let link = document.querySelector(".menu__link--know")
    link.onclick = callback; 
    
    function callback(event){
        const knowSection = document.querySelector('.hero'); 
        knowSection.innerHTML = '';

        const knowContent = document.createElement('div');
        knowContent.classList.add('knowus-container');

        const knowTitle = document.createElement('h2');
        knowTitle.classList.add('knowus__title');
        knowTitle.innerHTML = '¡Te damos la bienvenida!'
        knowContent.appendChild(knowTitle); 

        const knowText1 = document.createElement('p');
        knowText1.classList.add('knowus__text');
        knowText1.innerHTML = 'Si has llegado hasta aquí, es porque compartimos una visión: Somos amantes de los perros y creemos que cada uno de ellos merece una vida y familia llena de amor y bienestar. <br><br>';
        knowContent.appendChild(knowText1);

        const knowText2 = document.createElement('p');
        knowText2.classList.add('knowus__text');
        knowText2.innerHTML = 'InstaDogs es una ventana para poder conocer a tu posible futuro miembro de familia.';
        knowContent.appendChild(knowText2);
        
        const icons = document.createElement('span');
        icons.classList.add('knowus__icons');
        icons.innerHTML = '<i class="fab fa-instagram"></i> <br> <i class="fab fa-twitter"></i> <br> <i class="fab fa-facebook"></i> <br>';
        knowContent.appendChild(icons); 

        knowSection.appendChild(knowContent); 

    }
}