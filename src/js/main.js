export function main() {

  let lista = document.querySelector("#selectRazas"); 
  
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
      
     
    }
      
    )}
