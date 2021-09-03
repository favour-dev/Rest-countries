const state = {
    countryList: []
  };
  const baseUrl = "https://restcountries.eu/rest/v2/all";
  const countries = document.querySelector(".country-cards");
  const searchField = document.querySelector("#search-bar");
  const countryDetails = document.querySelector(".country-card");
  

  
  //components
  let displayCountry = (countryList) => {
    return countryList.map(
      (country) =>
        `<div data-itemCountry=${country.name}  class="country-item">
      <div class="flag">
          <img src=${country.flag} >
      </div>
      <div class="country-description">
          <button class="btn">${country.name}</button>
          <p>Population:${country.population}</p>
          <p>Region: ${country.region}</p>
          <p>Capital:${country.capital}</p>
      </div>
     </div>`
    );
  };
  
   
  //render
  let renderCountries = (countryToShow) => {
    countries.innerHTML = "";
    countries.innerHTML += displayCountry(countryToShow);
  };
  
  window.addEventListener("load", async () => {
    let country = await fetch(`${baseUrl}`).then((response) => response.json());
    state.countryList = country;
    console.log(state.countryList)
    renderCountries(state.countryList);
    buttonEvent()
  });
  
  //update the state action
  searchField.addEventListener("input", () => {
    let inVal = searchField.value.toLowerCase();
    if (inVal) {
      countryToShow = state.countryList.filter((country) =>
        country.name.toLowerCase().includes(inVal)
      );
      renderCountries(countryToShow);
    } else {
      renderCountries(state.countryList);
      return;
    }
  });
   function selectRegion(){
      let selectedOption = document.getElementById('region-filter')
      let selectedValue = selectedOption.options[selectedOption.selectedIndex].value
      if(selectedValue === 'Africa'){
        countryToShow = state.countryList.filter((country) =>
        country.region.includes(selectedValue)
      );
      renderCountries(countryToShow);
      }else if(selectedValue === 'America'){
        countryToShow = state.countryList.filter((country) =>
        country.region.includes(selectedValue)
      );
      renderCountries(countryToShow);
      }else if(selectedValue === 'Asia'){
        countryToShow = state.countryList.filter((country) =>
        country.region.includes(selectedValue)
      );
      renderCountries(countryToShow);
      }else if(selectedValue === 'Europe'){
        countryToShow = state.countryList.filter((country) =>
        country.region.includes(selectedValue)
      );
      renderCountries(countryToShow);
      }else if(selectedValue === 'Oceania'){
        countryToShow = state.countryList.filter((country) =>
        country.region.includes(selectedValue)
      );
      renderCountries(countryToShow);
      }else {
        renderCountries(state.countryList);
        return;
      }
   }


   function buttonEvent (){
   document.querySelector('.btn').addEventListener('click', countryButton)
    
   }
   function countryButton(){
     alert('clicked')
     location.href = 'country.html';
     countryToShow = state.countryList.filter((country) =>
     `<div class="top-right">
     <div class="back-btn">
         <button class=" btn-primary"><< Back</button>
     </div>
    <div class="countries-flag">
        <img src=${country.flag}>
    </div>
 </div>
 <div class="bottom">
     <div class="bottom-top">
         <div class="country-information">
             <h3>Germany</h3>
             <p class="info"><span>Native Name:</span> ${country.nativeName}</p>
             <p class="info"><span>Population:</span>${country.population}</p>
             <p class="info"><span>Region:</span> ${country.region}</p>
             <p class="info"><span>Sub Region:</span> ${country.subregion}</p>
             <p class="info"><span>Capital:</span>${country.capital}</p>
         </div>
         <div class="information-two">
             <p class="info top"><span>Top Level Domain:</span> ${country.toplevelDomain}</p>
             <p class="info"><span>Currencies</span>:${country.currencies}</p>
             <p class="info"><span>Language:</span> ${country.languages}</p>
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
    //  country.name.includes(country.name)
   );
   }
  