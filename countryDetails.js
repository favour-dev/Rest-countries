//use the window object model to get the search query parameter
const urlParams = new URLSearchParams(window.location.search);
//retrieve the parameter called countryid
const myParam = urlParams.get("countryName");
const countriesDetail = document.querySelector(".country-card");
const countryBorder = document.querySelector(".bottom-bottom")

console.log("the params are ", myParam);
//retrieve the array with the matched value
let countriesFromLocalStorage = localStorage.getItem("countries");
let countryList = JSON.parse(countriesFromLocalStorage);

let retrieveCLickedCountryDetails = countryList.find(
  (country) => country.name === myParam

);
const showBorder = (borders) => {
    //console.log("borders is ", borders);
    let result = ``;
    if (borders.length) {
      borders.forEach((element) => {
        result += `<button onclick="clickButton()"  class="b-country">${element}</button>`;
      });
      return result;
    } else {
      return `<p>No border</p>`;
    }
  };
  const showLanguage = (languages) => {
    //console.log("borders is ", borders);
    let result = ``;
    if (languages.length) {
      languages.forEach((elements) => {
        result += `${elements.name}\n`;
      });
      return result;
    } 
  };
  
countriesDetail.innerHTML =`<div class="top-right">
     <div class="back-btn">
         <button onclick="history.back()" class=" btn-primary"><< Back</button>
     </div>
    <div class="countries-flag">
        <img src=${retrieveCLickedCountryDetails.flag}>
    </div>
 </div>
 <div class="bottom">
     <div class="bottom-top">
         <div class="country-information">
             <h3>${retrieveCLickedCountryDetails.name}</h3>
             <p class="info"><span>Native Name:</span> ${retrieveCLickedCountryDetails.nativeName}</p>
             <p class="info"><span>Population:</span>${retrieveCLickedCountryDetails.population}</p>
             <p class="info"><span>Region:</span> ${retrieveCLickedCountryDetails.region}</p>
             <p class="info"><span>Sub Region:</span> ${retrieveCLickedCountryDetails.subregion}</p>
             <p class="info"><span>Capital:</span>${retrieveCLickedCountryDetails.capital}</p>
         </div>
         <div class="information-two">
             <p class="info top"><span>TopLevel Domain:</span> ${retrieveCLickedCountryDetails.topLevelDomain[0]}</p>
             <p class="info"><span>Currencies</span>:${retrieveCLickedCountryDetails.currencies[0].name}</p>
             <p class="info"><span>Language:</span> ${showLanguage(retrieveCLickedCountryDetails.languages)}</p>
         </div>
         
    </div>
    <div class="bottom-bottom">
            <div class="border-countries">
            <h3>Border Countries:</h3>
            ${showBorder(retrieveCLickedCountryDetails.borders)}
            </div>
        </div> 
 </div>`

console.log(
  "the retrieved country details are ",
  retrieveCLickedCountryDetails
);
// function clickButton(){
//   alert('clicked')
//   renderCountryDetails(countryDetails)
// }


// let displayb = `${retrieveCLickedCountryDetails.borders}`
// display.map((bordersss) => `<div class="border-countries">
// <h3>Border Countries:</h3>
// <button id="france" class="b-country">${retrieveCLickedCountryDetails.borders[0]}</button>
// <button id="Germany" class="b-country">${retrieveCLickedCountryDetails.borders[1]}</button>
// <button id="Netherlands" class="b-country">${retrieveCLickedCountryDetails.borders[2]}</button>
// </div>
// `
// ;)


// countryBorder.innerHTML+=`<div class="border-countries">
// <h3>Border Countries:</h3>
// <button id="france" class="b-country">${retrieveCLickedCountryDetails.borders[0]}</button>
// <button id="Germany" class="b-country">${retrieveCLickedCountryDetails.borders[1]}</button>
// <button id="Netherlands" class="b-country">${retrieveCLickedCountryDetails.borders[2]}</button>
// </div>
// `

// function buttonEvent (){
//      document.querySelector('.france').addEventListener('click', countryBorder)
      
// }
// function countryBorder(){
//     alert('clicked')
       
// }

    //  location.href = 'country.html';
    //  countryToShow = state.countryList.filter((country) =>
     
    //  country.name.includes(country.name)