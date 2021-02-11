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
        buttom.onclick = callback
  
        function callback(event){
          const raza = option.value
          
          fetch(`https://dog.ceo/api/breed/${raza}/images/3`)
          .then(response => response.json())
          .then(data => {
            let dogImg = data.message;
            console.log(dogImg)
              let card = document.createElement("img");
              card.setAttribute('src', dogImg); 
              raza.appendChild(card)
          })
 
        }
      }
    }
  )
}


