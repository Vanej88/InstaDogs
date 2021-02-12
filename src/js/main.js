export function main() {

  const lista = document.querySelector("#selectRazas"); 
  
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
      let dog = Object.keys(data.message);
      for(let item of dog){
        let option = document.createElement('option'); 
        option.setAttribute('class', 'raza-option');
        option.setAttribute('value', item)
        option.innerHTML = item; 
        lista.appendChild(option)
      
        let buttom = document.querySelector(".hero__btn-primary")
        buttom.onclick = callback; 
        const raza = option.value

        function callback(event){
    
          const galeria = document.querySelector('.gallery__box')
          
          fetch(`https://dog.ceo/api/breed/${raza}/images/random/8`)
          .then(response => response.json())
          .then(data => {
            let dogImg = data.message;
            console.log(dogImg)
            for(let item of dogImg){
              let card = document.createElement("img");
              let contenedorCard = document.createElement("div"); 
              card.setAttribute('src', item); 
              //card.setAttribute('class', 'gallery__img');
              card.classList.add('.gallery__box');
              card.classList.add('.gallery__img'); 
              card.classList.add('.container-gallery');
              galeria.appendChild(card)
            }
            
          })
      
        }
  
    }
  })}

  