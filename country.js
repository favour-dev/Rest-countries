const state = {
    countryList: [];
}
const baseUrl = "https://restcountries.eu/rest/v2/all"
const countries = document.querySelector('.country-cards')

let deserialised = JSON.parse(localStorage.getItem("countries"))
console.log(deserialised)

// const searched = document.querySelector('.country-search')
fetch(`${baseUrl}`)
.then(response => response.json())
 .then(data => {
     let serialised =JSON.stringify(data);
    localStorage.setItem("countries", serialised)
    //   console.log('The Data',data);
    countryItem(data)
    let searchCountry = document.querySelectorAll('.country-item')
 
})

function countryItem (arr){
    return arr.map((country) => { 
       let countryCard = `<div data-itemCountry=${country.name}  class="country-item">
         <div class="flag">
             <img src=${country.flag}>
         </div>
         <div class="country-description">
             <button class="btn">${country.name}</button>
             <p>Population:${country.population}</p>
             <p>Region: ${country.region}</p>
             <p>Capital:${country.capital}</p>
         </div>
        </div>`
        countries.innerHTML += countryCard;
        // console.log(country.flag)
    })
}

const searchUrl = "https://restcountries.eu/rest/v2/name/";
const countryName = document.getElementById('search-bar');
countryName.addEventListener("keyup", function(event){
    let userInput = event.target.value;
    console.log(userInput)
    let filteredCountry = deserialised.filter( (z) => {
        return z.name.toLowerCase().includes(userInput) 
                 `<div class="country">
                 <div class="country-flag">
                     <img src=${z.flag}>
                 </div>
                 <div class="country-details">
                     <button class="btn">${z.name}</button>
                     <p>Population:${z.population}</p>
                     <p>Region: ${z.region}</p>
                     <p>Capital:${z.capital}</p>
                 </div>
                </div>`

    })

    console.log(filteredCountry);
    countryItem(filteredCountry)
    // deserialised.filter(() => {

    // })

    // if(event.keyCode === 13){
    //     let name = countryName.value
    //     fetch(`${searchUrl}${name}`)
    //     .then(response => response.json())
    //      .then(area => { console.log('The Country',area);

    //      countryItem(area)
    //     })
        
    //     function countryItem (arr){
    //         return arr.map((country) => { 
    //             let countryCard = `<div class="country">
    //              <div class="country-flag">
    //                  <img src=${country.flag}>
    //              </div>
    //              <div class="country-details">
    //                  <button class="btn">${country.name}</button>
    //                  <p>Population:${country.population}</p>
    //                  <p>Region: ${country.region}</p>
    //                  <p>Capital:${country.capital}</p>
    //              </div>
    //             </div>`
    //             countries.innerHTML = countryCard;
    //             // console.log(country.flag)
    //         })
    //     }
        
    //  }
    // else{
    //     return countryItem();
    // }
})





// let nav = documnet.getElementById('nav');
// function toggle(state) {
// if(state === 1){
//    nav.style.backgroundColor = ' hsl(200, 15%, 8%)';
// }
// else{
//     nav.style.backgroundColor = 'hsl(0, 0%, 100%) '
// }
// }