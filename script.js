function fetchRomeInfo() {
  fetch("https://restcountries.com/v3.1/name/italy?").then(async response => {
     const data = await response.json();
     return data[0]
   }).then(function(data) {
     console.log(data);
     let info = "<h2>Country Name: " + data.name.common + "</h2>";
     info += "<h2>Flag : <img class=\"cimage\" src=" + data.flags.png + " /></h2>";
     info += "<h2>Currency: " + data.currencies.EUR.name + " (" + data.currencies.EUR.symbol + ")</h2>";
     info += "<h2>Language(s): " + data.languages.ita + "<h2>";
     info += "<h2>Population: " + data.population + "<h2>";
     console.log(info);
     document.getElementById("country-info").innerHTML = info;
   });
}

function fetchSouthAfricaInfo() {
  fetch("https://restcountries.com/v3.1/name/south%20africa?").then(async response => {
     const data = await response.json();
     return data[0]
   }).then(function(data) {
     console.log(data);
     let info = "<h2>Country Name: " + data.name.common + "</h2>";
     info += "<h2>Flag : <img class=\"cimage\" src=" + data.flags.png + " /></h2>";
     info += "<h2>Currency: " + data.currencies.ZAR.name + " (" + data.currencies.ZAR.symbol + ")</h2>";
     info += "<h2>Language(s): " + data.languages.afr + ", " +
             data.languages.eng + ", " +
             data.languages.nbl + ", " +
             data.languages.nso + ", " +
             data.languages.sot + ", " +
             data.languages.ssw + "<h2>";
     info += "<h2>Population: " + data.population + "<h2>";
     console.log(info);
     document.getElementById("country-info").innerHTML = info;
   });
}
