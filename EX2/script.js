const countryName = document.getElementById("country-input").value; // assuming the input element has an ID of "country-input"
const apiUrl2 = `https://restcountries.com/v2/name/${countryName}?fullText=true`;

fetch(apiUrl2)
  .then(response => response.json())
  .then(data => {
    const population = data[0].population;
    const countryList = document.getElementById("country-list"); // assuming the list element has an ID of "country-list"
    const newListItem = document.createElement("li");
    newListItem.innerHTML = `${countryName}: ${population}`;
    countryList.appendChild(newListItem);
  })
  .catch(error => {
    console.error(`Error fetching population data for ${countryName}: ${error}`);
  });

// if the given country name does not exists then

  const countryName2 = document.getElementById("country-input").value; // assuming the input element has an ID of "country-input"
const apiUrl = `https://restcountries.com/v2/name/${countryName2}?fullText=true`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    if (data.length > 0) {
      const population = data[0].population;
      const countryList = document.getElementById("country-list"); // assuming the list element has an ID of "country-list"
      const newListItem = document.createElement("li");
      newListItem.innerHTML = `${countryName}: ${population}`;
      countryList.appendChild(newListItem);
    } else {
      alert(`The country '${countryName2}' could not be found.`);
    }
  })
  .catch(error => {
    console.error(`Error fetching population data for ${countryName2}: ${error}`);
  });
