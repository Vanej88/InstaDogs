export function contact() {

    let link = document.querySelector(".menu__link--contact")
    link.onclick = callback; 
    
    function callback(event){
        const contactSection = document.querySelector('.hero'); 
        contactSection.innerHTML = '';

        const contactContent = document.createElement('div');
        contactContent.classList.add('contact');

        const contactTitle = document.createElement('h2');
        contactTitle.classList.add('knowus__title');
        contactTitle.innerHTML = 'Contáctanos';
        contactContent.appendChild(contactTitle); 

        const contactText = document.createElement('p'); 
        contactText.classList.add('contact__text');
        contactText.innerHTML = 'Para conocer a tu nuevo compañero peludo, puedes escribirnos';
        contactContent.appendChild(contactText);

        const contactForm = document.createElement('form');
        const nameLabel = document.createElement('label');
        const nameInput = document.createElement('input');
        const phoneLabel = document.createElement('label');
        const phoneInput = document.createElement('input');
        const emailLabel = document.createElement('label');
        const emailInput = document.createElement('input');
        const textLabel = document.createElement('label');
        const textInput = document.createElement('textarea');

        contactForm.classList.add('contact__form');

        nameLabel.classList.add('form-label');
        nameLabel.innerHTML = 'Déjanos tu nombre y apellidos:';
        nameInput.classList.add('form-input');

        phoneLabel.classList.add('form-label');
        phoneLabel.innerHTML = '¿A cuál número te podemos llamar?';
        phoneInput.classList.add('form-input');

        emailLabel.classList.add('form-label');
        emailLabel.innerHTML = '¿Cuál es tu e-mail?';
        emailInput.classList.add('form-input');

        textLabel.classList.add('form-label');
        textLabel.innerHTML = 'Queremos escuchar tus preguntas o tu historia:';
        textInput.classList.add('form-input');
        
        contactForm.appendChild(nameLabel) 
        contactForm.appendChild(nameInput) 
        contactForm.appendChild(phoneLabel)
        contactForm.appendChild(phoneInput)
        contactForm.appendChild(emailLabel)
        contactForm.appendChild(emailInput)
        contactForm.appendChild(textLabel)
        contactForm.appendChild(textInput);
    
        contactContent.appendChild(contactForm);
        contactSection.appendChild(contactContent); 

    }
    

}