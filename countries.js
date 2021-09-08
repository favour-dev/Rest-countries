const state = {
    countryList: []
  };
  const baseUrl = "https://restcountries.eu/rest/v2/all";
  const countries = document.querySelector(".country-cards");
  const searchField = document.querySelector("#search-bar");
  
  //components
  // Loopping throught each of the array and displaying it as a card compoenet on the browser
  let displayCountry = (countryList) => {
    return countryList.map(
      (country) =>
        `<a href="./country.html?countryName=${country.name}" rel="noopener noreferrer">
        <div data-itemCountry=${country.name}  class="country-item">
        <div class="flag">
            <img src=${country.flag} >
        </div>
        <div class="country-description">
            <button class="btn">${country.name}</button>
            <p>Population:${country.population}</p>
            <p>Region: ${country.region}</p>
            <p>Capital:${country.capital}</p>
        </div>
       </div></a>`
    );
  };

  //render
  let renderCountries = (countryToShow) => {
    countries.innerHTML = "";
    countries.innerHTML += displayCountry(countryToShow);
  };
  // fetching data from the api and loading the data as the webpage is loading
  window.addEventListener("load", async () => {
    let country = await fetch(`${baseUrl}`).then((response) => response.json());
    // state.countryList = country;
    localStorage.setItem("countries", JSON.stringify(country));
     //get the item you have saved from the local storage and set it to the local state 
    let countriesFromLocalStorage = localStorage.getItem("countries");
    let countryList = JSON.parse(countriesFromLocalStorage);
 
  //set its value to the local state 
    state.countryList = countryList;
    console.log(state.countryList)
    renderCountries(state.countryList);
    // buttonEvent()
  });
  
  //update the state action
  //Serach field event listener thats converting the users serach word to lowercase 
  //and filtering it to check if it matches any country record
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

  // filter section for each region
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


  //  function buttonEvent (){
  //  document.querySelector('.btn').addEventListener('click', countryButton)
    
  //  }
  //  function countryButton(){
  //    alert('clicked')
  //    location.href = 'country.html';
  //    countryToShow = state.countryList.filter((country) =>
     
  //   //  country.name.includes(country.name)
  //  );
  //  }
  