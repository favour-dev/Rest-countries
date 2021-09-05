//use the window object model to get the search query parameter
const urlParams = new URLSearchParams(window.location.search);
//retrieve the parameter called countryid
const myParam = urlParams.get("countryName");
const countriesDetail = document.querySelector(".country-card");

console.log("the params are ", myParam);
//retrieve the array with the matched value
let countriesFromLocalStorage = localStorage.getItem("countries");
let countryList = JSON.parse(countriesFromLocalStorage);

let retrieveCLickedCountryDetails = countryList.find(
  (country) => country.name === myParam
  
);
countriesDetail.innerHTML =`<div class="top-right">
     <div class="back-btn">
         <button onclick="window.location.href="./index.html" class=" btn-primary"><< Back</button>
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
             <p class="info top"><span>Top Level Domain:</span> ${retrieveCLickedCountryDetails.toplevelDomain}</p>
             <p class="info"><span>Currencies</span>:${retrieveCLickedCountryDetails.currencies}</p>
             <p class="info"><span>Language:</span> ${retrieveCLickedCountryDetails.languages}</p>
         </div>
    </div>
    <div class="bottom-bottom">
         <div class="border-countries">
             <h3>Border Countries:</h3>
             <button class="b-country">France</button>
             <button class="b-country">Germany</button>
             <button class="b-country">Netherlands</button>
         </div>
    </div>
 </div>`

console.log(
  "the retrieved country details  are ",
  retrieveCLickedCountryDetails
);

  