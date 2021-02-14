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
        }

        let buttom = document.querySelector(".hero__btn-primary")
        buttom.onclick = callback; 

        function callback(event){
    
          const raza = lista.value
          const galeria = document.querySelector('.gallery__container')
          galeria.innerHTML = ""

          fetch(`https://dog.ceo/api/breed/${raza}/images/random/8`)
          .then(response => response.json())
          .then(data => {
            let dogImg = data.message;
            console.log(dogImg)
            for(let item of dogImg){
              let title = document.querySelector('#galleryTitle'); 
              let contenedorCol = document.createElement("div"); 
              let contenedorBoxImg = document.createElement("div"); 
              let card = document.createElement("img");

              title.innerHTML = `Galería de ${raza}`; 
              contenedorCol.classList.add('gallery__col');
              contenedorBoxImg.classList.add('gallery__box-img');
              card.classList.add('gallery__img'); 
              card.setAttribute('src', item); 
              
              contenedorBoxImg.appendChild(card)
              contenedorCol.appendChild(contenedorBoxImg)
              galeria.appendChild(contenedorCol)
        
            }
            window.scrollTo(0,window.innerHeight);
            
          })
 
  
    }
  })
}

  