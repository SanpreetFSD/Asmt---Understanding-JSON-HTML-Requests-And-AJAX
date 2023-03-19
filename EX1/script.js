// Use Ajax to read the restaurant data from the XML file
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const xmlDoc = this.responseXML;
    const restaurants = xmlDoc.getElementsByTagName("restaurant");
    
    // Loop through the restaurant data and create HTML elements to display the data
    for (let i = 0; i < restaurants.length; i++) {
      const restaurant = restaurants[i];
      const name = restaurant.getElementsByTagName("name")[0].childNodes[0].nodeValue;
      const address = restaurant.getElementsByTagName("address")[0].childNodes[0].nodeValue;
      const phone = restaurant.getElementsByTagName("phone")[0].childNodes[0].nodeValue;
      
      // Create HTML elements to display the restaurant data
      const nameEl = document.createElement("h2");
      nameEl.textContent = name;
      const addressEl = document.createElement("p");
      addressEl.textContent = address;
      const phoneEl = document.createElement("p");
      phoneEl.textContent = phone;
      const restaurantEl = document.createElement("div");
      restaurantEl.classList.add("restaurant");
      restaurantEl.appendChild(nameEl);
      restaurantEl.appendChild(addressEl);
      restaurantEl.appendChild(phoneEl);
      
      // Append the created HTML elements to the container element
      const container = document.getElementById("restaurant-container");
      container.appendChild(restaurantEl);
    }
  }
};
xhttp.open("GET", "restaurants.xml", true);
xhttp.send();


//create an XMLHttpRequest object
var xhttp = new XMLHttpRequest();

// define a function to handle the response
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // access the response text as XML
    var xml = xhttp.responseXML;
    // access the restaurant element and its attributes
    var restaurant = xml.getElementsByTagName("restaurant")[0];
    var name = restaurant.getAttribute("name");
    var address = restaurant.getAttribute("address");
    var lat = restaurant.getAttribute("lat");
    var lng = restaurant.getAttribute("lng");
    var type = restaurant.getAttribute("type");
    // do something with the attributes, e.g. display them in the page
    document.getElementById("name").innerHTML = name;
    document.getElementById("address").innerHTML = address;
    document.getElementById("lat").innerHTML = lat;
    document.getElementById("lng").innerHTML = lng;
    document.getElementById("type").innerHTML = type;
  }
};

// open and send the request
xhttp.open("GET", "restaurant.xml", true);
xhttp.send();