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

        fetch()
      }
    }
  )

  const raza = document.querySelector("#cards"); 
  //const buscarBtn = document.


  // const response = await fetch(url)
  // const data = await response.json()
  // const response2 = await fetch(url2)
  // const data2 = await response2.json()
  
  // fetch(`https://dog.ceo/api/breed/beagle/images/random/3`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     let dogImg = data.message;
  //     for(let item of dogImg){
  //       let card = document.createElement("img");
  //       card.setAttribute('class', 'galeria__card')
  //       card.setAttribute('src', item); 
  //       raza.appendChild(card)
  //     }
  
  //   })

}


